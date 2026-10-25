"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { CatalogProvider } from "@/context/CatalogContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SearchModal from "@/components/SearchModal";
import FloatingRosesBackground from "@/components/FloatingRosesBackground";

export default function ClientLayout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // Se estiver na rota de gestão, não exibir elementos da loja pública (rosas, navbar cliente, rodapé, etc)
  const isGestao = pathname?.startsWith("/gestao");

  if (isGestao) {
    return (
      <CatalogProvider>
        <CartProvider>
          <div style={{ minHeight: "100vh", backgroundColor: "#0c0c0e", color: "#f4f4f5" }}>
            {children}
          </div>
        </CartProvider>
      </CatalogProvider>
    );
  }

  return (
    <CatalogProvider>
      <CartProvider>
        <FloatingRosesBackground />
        <AgeVerificationModal />
        <Navbar onOpenSearch={() => setSearchOpen(true)} />
        <main style={{ minHeight: "75vh" }}>{children}</main>
        <Footer />
        <CartDrawer />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <FloatingWhatsApp />
      </CartProvider>
    </CatalogProvider>
  );
}
