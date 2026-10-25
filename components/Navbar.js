"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function Navbar({ onOpenSearch }) {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de Notificação Superior */}
      <div
        style={{
          background: "linear-gradient(90deg, #1f040b 0%, #3d0715 50%, #1f040b 100%)",
          borderBottom: "1px solid rgba(225, 29, 72, 0.25)",
          color: "var(--champagne)",
          fontSize: "0.8rem",
          fontWeight: 500,
          textAlign: "center",
          padding: "7px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          letterSpacing: "0.02em"
        }}
      >
        <Sparkles size={13} style={{ color: "var(--ruby-light)" }} />
        <span>
          <strong>Sigilo Absoluto:</strong> Embalagens 100% discretas sem menção à loja • Pix e Cartão
        </span>
      </div>

      {/* Header Principal */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 90,
          background: isScrolled
            ? "rgba(6, 5, 8, 0.94)"
            : "rgba(6, 5, 8, 0.75)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: isScrolled
            ? "1px solid rgba(225, 29, 72, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          transition: "all 0.3s ease",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.7)" : "none"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
            gap: "20px"
          }}
        >
          {/* Logo e Nome */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none"
            }}
          >
            <div
              style={{
                position: "relative",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(135deg, #ff0055 0%, #e11d48 50%, #400918 100%)",
                boxShadow: "0 0 15px rgba(225, 29, 72, 0.45)"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#000"
                }}
              >
                <img
                  src="/img/logo.jpg"
                  alt="Toque de Desejo Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>

            <div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.02em",
                  display: "block",
                  lineHeight: 1
                }}
              >
                Toque de Desejo
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--ruby-light)",
                  fontWeight: 600,
                  display: "block",
                  marginTop: "3px"
                }}
              >
                Boutique Sensual
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px"
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: "0.92rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              Início
            </Link>

            <Link
              href="/#produtos"
              style={{
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: "0.92rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              Vitrine
            </Link>

            <Link
              href="/#categorias"
              style={{
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: "0.92rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              Categorias
            </Link>

            <Link
              href="/sobre"
              style={{
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: "0.92rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              Sobre a Loja
            </Link>
          </nav>

          {/* Ações da Direita */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Botão de Busca */}
            <button
              onClick={onOpenSearch}
              aria-label="Pesquisar produtos"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-ruby)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(225, 29, 72, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              }}
            >
              <Search size={18} />
            </button>

            {/* Botão de Sacola */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Abrir sacola de compras"
              style={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-ruby)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(225, 29, 72, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              }}
            >
              <ShoppingBag size={18} />
              {totalItemsCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    background: "var(--ruby-glow)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    width: "19px",
                    height: "19px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgba(255, 0, 85, 0.7)"
                  }}
                >
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Botão de Destaque CTA */}
            <Link
              href="/#produtos"
              className="btn-primary desktop-cta"
              style={{
                padding: "9px 20px",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em"
              }}
            >
              Ver Produtos
            </Link>

            {/* Menu Hambúrguer Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Abrir menu"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 89,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(20px)",
            padding: "90px 24px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--ruby-light)",
                fontSize: "2rem",
                marginBottom: "10px"
              }}
            >
              Seu prazer, seu segredo
            </div>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <span>Início</span>
              <ChevronRight size={18} style={{ color: "var(--ruby-primary)" }} />
            </Link>

            <Link
              href="/#produtos"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <span>Vitrine de Produtos</span>
              <ChevronRight size={18} style={{ color: "var(--ruby-primary)" }} />
            </Link>

            <Link
              href="/#categorias"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <span>Categorias</span>
              <ChevronRight size={18} style={{ color: "var(--ruby-primary)" }} />
            </Link>

            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <span>Sobre a Toque de Desejo</span>
              <ChevronRight size={18} style={{ color: "var(--ruby-primary)" }} />
            </Link>

            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingTop: "10px"
              }}
            >
              <ShieldCheck size={16} />
              <span>Painel do Lojista</span>
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <InstagramIcon size={18} />
              <span>Siga no Instagram @{STORE_CONFIG.handle}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <ShoppingBag size={18} />
              <span>Abrir Sacola ({totalItemsCount})</span>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.desktop-nav),
          :global(.desktop-cta) {
            display: none !important;
          }
        }
        @media (min-width: 861px) {
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
