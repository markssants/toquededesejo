"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCatalog } from "@/context/CatalogContext";
import { formatCurrency } from "@/lib/products";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";

export default function SearchModal({ isOpen, onClose }) {
  const { products } = useCatalog();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim() === ""
    ? []
    : products.filter((p) => {
        if (!p.active) return false;
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q)) ||
          (p.shortDescription && p.shortDescription.toLowerCase().includes(q))
        );
      });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px 20px 20px"
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(3, 2, 5, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
      />

      {/* Caixa de Busca */}
      <div
        className="glass-panel-glow"
        style={{
          position: "relative",
          zIndex: 1001,
          width: "100%",
          maxWidth: "640px",
          backgroundColor: "var(--bg-surface)",
          padding: "24px",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={16} style={{ color: "var(--ruby-light)" }} />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>
              Buscar Produtos
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar busca"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.05)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Input */}
        <div style={{ position: "relative" }}>
          <Search
            size={18}
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--ruby-light)"
            }}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o que você procura (ex: lubrificante, maçã do amor, vibrador...)"
            className="input-luxury"
            style={{ paddingLeft: "42px", fontSize: "0.95rem" }}
          />
        </div>

        {/* Resultados */}
        <div style={{ overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          {query.trim() === "" ? (
            <div style={{ padding: "20px 0", textAlign: "center", color: "var(--text-muted)", fontSize: "0.88rem" }}>
              Comece a digitar para encontrar produtos discretos e exclusivos.
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: "30px 0", textAlign: "center", color: "var(--text-secondary)" }}>
              <p style={{ fontWeight: 600, color: "#fff", marginBottom: "4px" }}>
                Nenhum produto encontrado para &quot;{query}&quot;
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Tente buscar por termos como &quot;gel&quot;, &quot;óleo&quot;, &quot;perfume&quot; ou explore as categorias.
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.id}
                href={`/produto/${item.slug}`}
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-ruby)";
                  e.currentTarget.style.background = "var(--bg-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    backgroundColor: "#000",
                    flexShrink: 0
                  }}
                >
                  <img
                    src={item.images?.[0] || "/img/logo.jpg"}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--ruby-light)", textTransform: "uppercase", fontWeight: 600 }}>
                    {item.category}
                  </div>
                  <h4
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "#fff",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {item.name}
                  </h4>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--champagne)" }}>
                    {formatCurrency(item.price)}
                  </div>
                </div>

                <ArrowRight size={16} style={{ color: "var(--text-muted)" }} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
