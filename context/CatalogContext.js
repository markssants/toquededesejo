"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { INITIAL_PRODUCTS, getCatalog, saveCatalog, resetCatalog } from "@/lib/products";

const CatalogContext = createContext(null);

export function CatalogProvider({ children }) {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadFromStorage = () => {
    const list = getCatalog();
    setProducts(list);
    setIsLoaded(true);
  };

  useEffect(() => {
    loadFromStorage();

    const handleSync = () => {
      loadFromStorage();
    };

    window.addEventListener("toque_catalog_updated", handleSync);
    window.addEventListener("storage", handleSync);

    return () => {
      window.removeEventListener("toque_catalog_updated", handleSync);
      window.removeEventListener("storage", handleSync);
    };
  }, []);

  const addProduct = (newProduct) => {
    const updated = [newProduct, ...products];
    setProducts(updated);
    saveCatalog(updated);
  };

  const updateProduct = (id, updatedFields) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, ...updatedFields } : p
    );
    setProducts(updated);
    saveCatalog(updated);
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveCatalog(updated);
  };

  const toggleProductStatus = (id) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, active: !p.active } : p
    );
    setProducts(updated);
    saveCatalog(updated);
  };

  const handleResetCatalog = () => {
    const defaultList = resetCatalog();
    setProducts(defaultList);
  };

  const importCatalog = (importedList) => {
    if (Array.isArray(importedList) && importedList.length > 0) {
      setProducts(importedList);
      saveCatalog(importedList);
      return true;
    }
    return false;
  };

  return (
    <CatalogContext.Provider
      value={{
        products,
        isLoaded,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProductStatus,
        resetCatalog: handleResetCatalog,
        importCatalog
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error("useCatalog deve ser usado dentro de um CatalogProvider");
  }
  return context;
}
