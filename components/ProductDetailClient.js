"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useCatalog } from "@/context/CatalogContext";
import { useCart } from "@/context/CartContext";
import { 
  getProductBySlug, 
  getRelatedProducts, 
  formatCurrency, 
  generateProductWhatsAppLink 
} from "@/lib/products";
import { STORE_CONFIG } from "@/lib/storeConfig";
import ProductCard from "@/components/ProductCard";
import { 
  MessageCircle, 
  ShoppingBag, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Check, 
  Sparkles, 
  ArrowLeft, 
  ZoomIn, 
  X,
  Share2
} from "lucide-react";

export default function ProductDetailClient({ slug, fallbackProduct }) {
  const { products } = useCatalog();
  const { addToCart } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Encontrar o produto atualizado no contexto de catálogo
  const product = useMemo(() => {
    return getProductBySlug(slug, products) || fallbackProduct;
  }, [slug, products, fallbackProduct]);

  // Produtos relacionados da mesma categoria
  const related = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(product, products, 4);
  }, [product, products]);

  if (!product) {
    return (
      <div className="container" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "16px" }}>
          Produto não encontrado
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
          O item solicitado não está mais disponível ou o link pode ter sido alterado.
        </p>
        <Link href="/#produtos" className="btn-primary">
          Voltar para a vitrine
        </Link>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : ["/img/logo.jpg"];
  const currentImage = images[activeImageIndex] || images[0];
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const pixPrice = product.price * (1 - STORE_CONFIG.pixDiscountPercent / 100);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappLink = generateProductWhatsAppLink(product, STORE_CONFIG.whatsappNumber);

  return (
    <div style={{ padding: "40px 0 80px" }}>
      <div className="container">
        {/* Navegação / Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "30px",
            fontSize: "0.85rem",
            color: "var(--text-secondary)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link
              href="/"
              style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              Início
            </Link>
            <span>/</span>
            <Link
              href={`/?categoria=${encodeURIComponent(product.category)}#produtos`}
              style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              {product.category}
            </Link>
            <span>/</span>
            <span style={{ color: "var(--champagne)", fontWeight: 500 }}>
              {product.name}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={handleShare}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-full)",
                padding: "6px 14px",
                color: "var(--text-secondary)",
                fontSize: "0.8rem",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "var(--border-ruby)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            >
              {copiedLink ? <Check size={14} style={{ color: "#4ade80" }} /> : <Share2 size={14} />}
              <span>{copiedLink ? "Link copiado!" : "Compartilhar"}</span>
            </button>

            <Link
              href="/#produtos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--ruby-light)",
                fontSize: "0.85rem",
                fontWeight: 600
              }}
            >
              <ArrowLeft size={16} />
              <span>Voltar para a vitrine</span>
            </Link>
          </div>
        </div>

        {/* Grade Principal: Galeria + Detalhes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "start",
            marginBottom: "70px"
          }}
        >
          {/* GALERIA DE IMAGENS */}
          <div>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border-ruby)",
                background: "#08070a",
                boxShadow: "0 15px 40px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(225, 29, 72, 0.25)",
                aspectRatio: "1 / 1.15",
                cursor: "pointer"
              }}
              onClick={() => setIsZoomOpen(true)}
            >
              <img
                src={currentImage}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
              />

              {/* Badges no Canto */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
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
                    Promoção Especial
                  </span>
                )}
              </div>

              {/* Botão de Ampliar */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomOpen(true);
                }}
                aria-label="Ampliar foto"
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(10, 8, 14, 0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--border-subtle)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
                  transition: "all 0.2s ease",
                  zIndex: 2
                }}
              >
                <ZoomIn size={18} />
              </button>
            </div>

            {/* Miniaturas se houver mais de uma */}
            {images.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "16px",
                  overflowX: "auto",
                  paddingBottom: "8px"
                }}
              >
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: "74px",
                      height: "74px",
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                      border: idx === activeImageIndex ? "2px solid var(--ruby-primary)" : "1px solid var(--border-subtle)",
                      background: "#000",
                      opacity: idx === activeImageIndex ? 1 : 0.6,
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} miniatura ${idx + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFORMAÇÕES E COMPRA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px"
                }}
              >
                <span className="badge-tag badge-ruby" style={{ fontSize: "0.74rem" }}>
                  {product.category}
                </span>
                {product.brand && (
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    Marca: <strong style={{ color: "#fff" }}>{product.brand}</strong>
                  </span>
                )}
                {product.volume && (
                  <span style={{ fontSize: "0.85rem", color: "var(--champagne)" }}>
                    • {product.volume}
                  </span>
                )}
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "12px"
                }}
              >
                {product.name}
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: product.stock > 0 ? "#22c55e" : "#ef4444",
                    boxShadow: product.stock > 0 ? "0 0 8px #22c55e" : "none"
                  }}
                />
                <span style={{ color: product.stock > 0 ? "#4ade80" : "#f87171", fontWeight: 500 }}>
                  {product.stock > 0 ? `Disponível em estoque (${product.stock} unidades)` : "Produto indisponível temporariamente"}
                </span>
                {product.id && (
                  <span style={{ color: "var(--text-muted)", marginLeft: "auto", fontSize: "0.75rem" }}>
                    Cód: {product.id}
                  </span>
                )}
              </div>
            </div>

            {/* Preço */}
            <div
              className="glass-panel"
              style={{
                padding: "20px 24px",
                border: "1px solid var(--border-ruby)",
                background: "linear-gradient(135deg, rgba(25, 17, 30, 0.7) 0%, rgba(14, 11, 18, 0.85) 100%)"
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px" }}>
                {hasDiscount && (
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-muted)",
                      textDecoration: "line-through"
                    }}
                  >
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "2.1rem",
                    fontWeight: 700,
                    color: "#fff"
                  }}
                >
                  {formatCurrency(product.price)}
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.92rem",
                  color: "#4ade80",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>No Pix ({STORE_CONFIG.pixDiscountPercent}% de desconto):</span>
                <span style={{ fontSize: "1.1rem" }}>{formatCurrency(pixPrice)}</span>
              </div>

              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "6px" }}>
                💳 Ou em até <strong>{STORE_CONFIG.maxInstallments}x</strong> no cartão de crédito
              </div>
            </div>

            {/* Ações de Compra */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: "16px 28px",
                  fontSize: "1.05rem",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <MessageCircle size={22} />
                <span>Comprar pelo WhatsApp com Discrição</span>
              </a>

              <button
                onClick={() => addToCart(product, quantity)}
                className="btn-primary"
                style={{
                  padding: "15px 28px",
                  fontSize: "0.98rem",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <ShoppingBag size={20} />
                <span>Adicionar à Sacola de Compras</span>
              </button>

              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  lineHeight: 1.4
                }}
              >
                ℹ️ A compra é finalizada via atendimento humanizado com total sigilo. Não solicitamos dados bancários abertos no site.
              </p>
            </div>

            {/* Benefícios de Sigilo */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Lock size={18} style={{ color: "var(--ruby-light)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--champagne)" }}>
                  <strong>Embalagem 100% Descaracterizada:</strong> Caixa sem nomes, adesivos ou menção à sex shop.
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <CreditCard size={18} style={{ color: "var(--ruby-light)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--champagne)" }}>
                  <strong>Sigilo na Fatura:</strong> Lançamento discreto no cartão de crédito.
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <ShieldCheck size={18} style={{ color: "var(--ruby-light)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--champagne)" }}>
                  <strong>Atendimento Exclusivo:</strong> Dúvidas sanadas com respeito, elegância e discrição.
                </span>
              </div>
            </div>

            {/* Descrição e Benefícios */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "10px" }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                  Sobre este produto
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {product.fullDescription || product.shortDescription}
                </p>
              </div>

              {product.benefits && product.benefits.length > 0 && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--champagne)", marginBottom: "10px" }}>
                    Destaques & Benefícios:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {product.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: "rgba(225, 29, 72, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--ruby-light)",
                            flexShrink: 0
                          }}
                        >
                          <Check size={12} />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.usageInstructions && (
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(225, 29, 72, 0.05)",
                    border: "1px solid rgba(225, 29, 72, 0.2)"
                  }}
                >
                  <h4 style={{ fontSize: "0.92rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                    Modo de Uso & Cuidados:
                  </h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    {product.usageInstructions}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRODUTOS RELACIONADOS */}
        {related.length > 0 && (
          <div
            style={{
              paddingTop: "50px",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "30px",
                flexWrap: "wrap",
                gap: "16px"
              }}
            >
              <div>
                <span className="badge-tag badge-wine" style={{ marginBottom: "6px" }}>
                  Você também pode gostar
                </span>
                <h3 className="title-section" style={{ fontSize: "1.8rem" }}>
                  Produtos Relacionados
                </h3>
              </div>

              <Link
                href="/#produtos"
                style={{
                  color: "var(--ruby-light)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>Ver toda a vitrine</span>
                <ArrowLeft size={14} style={{ transform: "rotate(180deg)" }} />
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "24px"
              }}
            >
              {related.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL DE ZOOM */}
      {isZoomOpen && (
        <div
          onClick={() => setIsZoomOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            aria-label="Fechar zoom"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001
            }}
          >
            <X size={24} />
          </button>

          <img
            src={currentImage}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.9)"
            }}
          />
        </div>
      )}
    </div>
  );
}
