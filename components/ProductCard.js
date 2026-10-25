"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/products";
import { ShoppingBag, Eye, Sparkles } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const mainImage = product.images?.[0] || "/img/logo.jpg";

  return (
    <div className="product-card group" style={{ position: "relative" }}>
      {/* Imagem com Link */}
      <Link href={`/produto/${product.slug}`} className="img-wrapper">
        <img
          src={mainImage}
          alt={product.name}
          loading="lazy"
        />

        {/* Efeito de Reflexo / Sombra interna */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)",
            pointerEvents: "none"
          }}
        />

        {/* Tags / Badges */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            zIndex: 2
          }}
        >
          {product.badge && (
            <span className="badge-tag badge-ruby">
              <Sparkles size={11} />
              {product.badge}
            </span>
          )}
          {hasDiscount && (
            <span className="badge-tag badge-wine">
              Oferta
            </span>
          )}
        </div>

        {/* Botão Hover de Ver Detalhes Rápido */}
        <div
          className="quick-view-btn"
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            right: "12px",
            background: "rgba(10, 8, 14, 0.88)",
            backdropFilter: "blur(8px)",
            borderRadius: "var(--radius-full)",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            color: "var(--text-primary)",
            fontSize: "0.8rem",
            fontWeight: 600,
            border: "1px solid var(--border-subtle)",
            transition: "all 0.25s ease",
            zIndex: 2
          }}
        >
          <Eye size={14} style={{ color: "var(--ruby-light)" }} />
          <span>Ver Detalhes</span>
        </div>
      </Link>

      {/* Conteúdo do Card */}
      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <div>
          {/* Categoria e Marca */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "6px",
              fontSize: "0.75rem"
            }}
          >
            <span style={{ color: "var(--ruby-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {product.category}
            </span>
            {product.brand && (
              <span style={{ color: "var(--text-muted)" }}>
                {product.brand}
              </span>
            )}
          </div>

          {/* Nome do Produto */}
          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", lineHeight: 1.35, marginBottom: "8px" }}>
            <Link
              href={`/produto/${product.slug}`}
              style={{
                color: "#fff",
                transition: "color 0.2s ease",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {product.name}
            </Link>
          </h3>

          {/* Breve Descrição */}
          {product.shortDescription && (
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                lineHeight: "1.45",
                marginBottom: "14px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
            >
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* Preço e Botão de Adicionar à Sacola */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "12px",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            gap: "10px"
          }}
        >
          <div>
            {hasDiscount && (
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  textDecoration: "line-through",
                  lineHeight: 1
                }}
              >
                {formatCurrency(product.originalPrice)}
              </div>
            )}
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--champagne)",
                lineHeight: 1.1
              }}
            >
              {formatCurrency(product.price)}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            aria-label="Adicionar à sacola"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--ruby-primary) 0%, #a80f33 100%)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(225, 29, 72, 0.4)",
              transition: "all 0.2s ease",
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 0, 85, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(225, 29, 72, 0.4)";
            }}
          >
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
