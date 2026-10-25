"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/products";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Lock, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem, 
    clearCart,
    totalPrice,
    totalItemsCount,
    getWhatsAppCheckoutUrl 
  } = useCart();

  if (!isCartOpen) return null;

  const pixPrice = totalPrice * (1 - STORE_CONFIG.pixDiscountPercent / 100);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.78)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          transition: "opacity 0.3s ease"
        }}
      />

      {/* Gaveta Lateral */}
      <aside
        style={{
          position: "relative",
          zIndex: 1000,
          width: "100%",
          maxWidth: "460px",
          height: "100%",
          backgroundColor: "var(--bg-surface)",
          borderLeft: "1px solid var(--border-ruby)",
          boxShadow: "-10px 0 35px rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          animation: "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Cabeçalho da Gaveta */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(22, 17, 26, 0.5)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(225, 29, 72, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ruby-light)"
              }}
            >
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>
                Sua Sacola
              </h3>
              <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                {totalItemsCount} {totalItemsCount === 1 ? "item selecionado" : "itens selecionados"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Fechar sacola"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.05)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(225, 29, 72, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Lista de Itens */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "16px",
                color: "var(--text-secondary)",
                padding: "40px 20px"
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px dashed var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)"
                }}
              >
                <ShoppingBag size={30} />
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "6px" }}>
                  Sua sacola está vazia
                </h4>
                <p style={{ fontSize: "0.88rem", maxWidth: "260px" }}>
                  Explore nossos produtos sensuais e encontre seus favoritos com toda a discrição.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
                style={{ marginTop: "10px", fontSize: "0.85rem", padding: "10px 24px" }}
              >
                Explorar Vitrine
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "14px",
                  padding: "12px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  alignItems: "center"
                }}
              >
                {/* Imagem do Produto */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    backgroundColor: "#000",
                    flexShrink: 0,
                    border: "1px solid rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Dados do Produto */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Link
                    href={`/produto/${item.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: "1.3",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    {item.name}
                  </Link>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--champagne)",
                      marginTop: "4px"
                    }}
                  >
                    {formatCurrency(item.price)}
                  </div>

                  {/* Controles de Quantidade */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "8px"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "var(--radius-full)",
                        padding: "2px 8px",
                        border: "1px solid var(--border-subtle)"
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Diminuir quantidade"
                        style={{
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "2px"
                        }}
                      >
                        <Minus size={13} />
                      </button>

                      <span style={{ fontSize: "0.85rem", fontWeight: 600, minWidth: "16px", textAlign: "center" }}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar quantidade"
                        style={{
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "2px"
                        }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remover item"
                      style={{
                        color: "var(--text-muted)",
                        transition: "color 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        padding: "4px"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ruby-glow)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé da Gaveta (Checkout) */}
        {items.length > 0 && (
          <div
            style={{
              padding: "20px 24px 28px",
              borderTop: "1px solid var(--border-subtle)",
              background: "rgba(10, 8, 14, 0.95)",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            {/* Aviso de Sigilo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(225, 29, 72, 0.08)",
                border: "1px solid rgba(225, 29, 72, 0.2)",
                fontSize: "0.78rem",
                color: "var(--text-secondary)"
              }}
            >
              <Lock size={14} style={{ color: "var(--ruby-light)", flexShrink: 0 }} />
              <span>Embalagem 100% descaracterizada e sigilo total no atendimento.</span>
            </div>

            {/* Subtotal e Pix */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)"
                }}
              >
                <span>Subtotal ({totalItemsCount} {totalItemsCount === 1 ? "item" : "itens"}):</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  color: "#4ade80"
                }}
              >
                <span>No Pix ({STORE_CONFIG.pixDiscountPercent}% OFF):</span>
                <span style={{ fontWeight: 700 }}>{formatCurrency(pixPrice)}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#fff",
                  paddingTop: "6px",
                  borderTop: "1px dashed rgba(255, 255, 255, 0.1)"
                }}
              >
                <span>Total Estimado:</span>
                <span style={{ color: "var(--champagne)" }}>{formatCurrency(totalPrice)}</span>
              </div>
            </div>

            {/* Botão de Finalizar no WhatsApp */}
            <a
              href={getWhatsAppCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
              }}
            >
              <MessageCircle size={19} />
              <span>Finalizar Pedido pelo WhatsApp</span>
            </a>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "4px"
              }}
            >
              <button
                onClick={clearCart}
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
              >
                Esvaziar sacola
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
              >
                <span>Continuar comprando</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        )}
      </aside>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
