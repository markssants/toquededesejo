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
  Share2,
  Truck,
  Heart,
  ChevronRight,
  Info,
  Layers,
  Flame
} from "lucide-react";

export default function ProductDetailClient({ slug, fallbackProduct }) {
  const { products } = useCatalog();
  const { addToCart } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("descricao"); // "descricao", "beneficios", "modo_uso"

  // Encontrar o produto no contexto do catálogo
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
        <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "16px", fontFamily: "var(--font-serif)" }}>
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
  const whatsappLink = generateProductWhatsAppLink(product, STORE_CONFIG.whatsappNumber);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div style={{ padding: "32px 0 90px" }}>
      <div className="container">
        {/* ========================================================
            1. BREADCRUMB & VOLTAR (SUPER CLEAN)
            ======================================================== */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "36px",
            fontSize: "0.84rem"
          }}
        >
          {/* Trilha de Navegação */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
              Início
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.2)" }} />
            <Link
              href={`/?categoria=${encodeURIComponent(product.category)}#produtos`}
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              {product.category}
            </Link>
            <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.2)" }} />
            <span style={{ color: "#fff", fontWeight: 500, maxWidth: "260px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {product.name}
            </span>
          </div>

          {/* Botões do Topo: Compartilhar + Voltar */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={handleShare}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "9999px",
                padding: "6px 14px",
                color: "var(--text-secondary)",
                fontSize: "0.8rem",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {copiedLink ? <Check size={13} color="#4ade80" /> : <Share2 size={13} />}
              <span>{copiedLink ? "Link copiado!" : "Compartilhar"}</span>
            </button>

            <Link
              href="/#produtos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--ruby-light)",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              <ArrowLeft size={14} />
              <span>Voltar à vitrine</span>
            </Link>
          </div>
        </div>

        {/* ========================================================
            2. GRADE PRINCIPAL: GALERIA (ESQUERDA) + COMPRA (DIREITA)
            ======================================================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "54px",
            alignItems: "start",
            marginBottom: "80px"
          }}
        >
          {/* COLUNA ESQUERDA: GALERIA DE FOTOS */}
          <div style={{ position: "sticky", top: "100px" }}>
            {/* Foto Principal com Zoom */}
            <div
              onClick={() => setIsZoomOpen(true)}
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(225, 29, 72, 0.35)",
                background: "#0a080d",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(225, 29, 72, 0.2)",
                aspectRatio: "1 / 1.12",
                cursor: "zoom-in"
              }}
            >
              <img
                src={currentImage}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease"
                }}
              />

              {/* Badges no Topo Esquerdo */}
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
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                      background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                      color: "#fff",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      boxShadow: "0 4px 12px rgba(225, 29, 72, 0.4)",
                      letterSpacing: "0.03em"
                    }}
                  >
                    <Sparkles size={11} />
                    {product.badge}
                  </span>
                )}
                {hasDiscount && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                      background: "rgba(43, 6, 16, 0.9)",
                      border: "1px solid #e11d48",
                      color: "#fecdd3",
                      fontSize: "0.72rem",
                      fontWeight: 600
                    }}
                  >
                    Oferta Especial
                  </span>
                )}
              </div>

              {/* Botão de Ampliar no Canto Inferior Direito */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(10, 8, 14, 0.82)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)"
                }}
              >
                <ZoomIn size={17} />
              </div>
            </div>

            {/* Miniaturas se houver mais de uma foto */}
            {images.length > 1 && (
              <div style={{ display: "flex", gap: "12px", marginTop: "16px", overflowX: "auto", paddingBottom: "4px" }}>
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: idx === activeImageIndex ? "2px solid var(--ruby-primary)" : "1px solid rgba(255,255,255,0.1)",
                      background: "#000",
                      opacity: idx === activeImageIndex ? 1 : 0.6,
                      cursor: "pointer",
                      padding: 0,
                      flexShrink: 0
                    }}
                  >
                    <img src={imgUrl} alt="Miniatura" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* COLUNA DIREITA: INFORMAÇÕES HIERÁRQUICAS E COMPRA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {/* Bloco 1: Linha de Rastreamento (Categoria / Marca / Volume) */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--ruby-light)",
                  marginBottom: "10px"
                }}
              >
                <span>{product.category}</span>
                {product.brand && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
                    <span style={{ color: "var(--champagne)" }}>{product.brand}</span>
                  </>
                )}
                {product.volume && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
                    <span style={{ color: "var(--text-muted)" }}>{product.volume}</span>
                  </>
                )}
              </div>

              {/* Título Principal de Alto Impacto */}
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.18,
                  marginBottom: "14px"
                }}
              >
                {product.name}
              </h1>

              {/* Disponibilidade / Pronta Entrega */}
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
                  {product.stock > 0 ? "Em estoque para envio imediato" : "Produto esgotado"}
                </span>
                <span style={{ color: "var(--text-muted)", marginLeft: "auto", fontSize: "0.75rem" }}>
                  REF: {product.slug?.slice(0, 14).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Bloco 2: Preço & Formas de Pagamento (Limpo e de Fácil Identificação) */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(25, 17, 30, 0.6) 0%, rgba(14, 11, 18, 0.8) 100%)",
                border: "1px solid rgba(225, 29, 72, 0.3)",
                borderRadius: "18px",
                padding: "22px 26px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)"
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "8px" }}>
                {hasDiscount && (
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--text-muted)",
                      textDecoration: "line-through"
                    }}
                  >
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
                {/* Preço Principal */}
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1
                  }}
                >
                  {formatCurrency(product.price)}
                </span>
              </div>

              {/* Destaque do Desconto no Pix */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 12px",
                  borderRadius: "8px",
                  background: "rgba(34, 197, 94, 0.12)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  marginBottom: "8px"
                }}
              >
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "1.15rem" }}>
                  {formatCurrency(pixPrice)}
                </span>
                <span style={{ color: "#86efac", fontSize: "0.8rem", fontWeight: 600 }}>
                  no Pix (-{STORE_CONFIG.pixDiscountPercent}% OFF)
                </span>
              </div>

              {/* Parcelamento no Cartão */}
              <div style={{ color: "var(--text-secondary)", fontSize: "0.84rem" }}>
                💳 Ou em até <strong>{STORE_CONFIG.maxInstallments}x</strong> no cartão de crédito
              </div>
            </div>

            {/* Bloco 3: Seletor de Quantidade e Botões de CTA (Destaque Visual) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "stretch" }}>
                {/* Stepper de Quantidade */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "9999px",
                    padding: "4px 8px"
                  }}
                >
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    title="Diminuir quantidade"
                  >
                    -
                  </button>

                  <span style={{ minWidth: "32px", textAlign: "center", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
                    {quantity}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(1)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    title="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>

                {/* Botão Principal: Adicionar à Sacola */}
                <button
                  onClick={() => addToCart(product, quantity)}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "16px 28px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #ff0055 0%, #e11d48 50%, #9f1239 100%)",
                    color: "#fff",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(225, 29, 72, 0.5)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <ShoppingBag size={20} />
                  <span>Adicionar à Sacola</span>
                </button>
              </div>

              {/* Botão Secundário: Comprar pelo WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "15px 24px",
                  borderRadius: "9999px",
                  background: "rgba(37, 211, 102, 0.12)",
                  border: "1px solid rgba(37, 211, 102, 0.35)",
                  color: "#4ade80",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
              >
                <MessageCircle size={19} />
                <span>Comprar direto pelo WhatsApp</span>
              </a>
            </div>

            {/* Bloco 4: Faixa de Garantias de Sigilo (3 Colunas Horizontais Limpas) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                padding: "16px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                textAlign: "center"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <Lock size={18} style={{ color: "var(--ruby-light)" }} />
                <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#fff" }}>Pacote 100% Neutro</span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Sem menção a sex shop</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <CreditCard size={18} style={{ color: "var(--ruby-light)" }} />
                <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#fff" }}>Fatura Discreta</span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Nome neutro no extrato</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={18} style={{ color: "var(--ruby-light)" }} />
                <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#fff" }}>Sigilo Absoluto</span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Atendimento respeitoso</span>
              </div>
            </div>

            {/* Bloco 5: Abas Interativas de Conteúdo (Elimina o amontoado de texto!) */}
            <div style={{ marginTop: "10px" }}>
              {/* Botões de Seleção da Aba */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: "10px",
                  marginBottom: "18px"
                }}
              >
                {[
                  { id: "descricao", label: "Sobre o Produto", icon: Info },
                  { id: "beneficios", label: "Destaques & Benefícios", icon: Sparkles },
                  { id: "modo_uso", label: "Modo de Uso", icon: Layers }
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        background: isActive ? "rgba(225, 29, 72, 0.18)" : "transparent",
                        border: isActive ? "1px solid var(--ruby-primary)" : "1px solid transparent",
                        color: isActive ? "#fff" : "var(--text-secondary)",
                        fontSize: "0.84rem",
                        fontWeight: isActive ? 600 : 500,
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <Icon size={14} style={{ color: isActive ? "var(--ruby-light)" : "inherit" }} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Conteúdo da Aba Ativa */}
              <div style={{ minHeight: "140px" }}>
                {activeTab === "descricao" && (
                  <p style={{ fontSize: "0.94rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                    {product.fullDescription || product.shortDescription}
                  </p>
                )}

                {activeTab === "beneficios" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {product.benefits && product.benefits.length > 0 ? (
                      product.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 14px",
                            borderRadius: "10px",
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            fontSize: "0.88rem",
                            color: "#fff"
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: "rgba(34, 197, 94, 0.15)",
                              color: "#4ade80",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            }}
                          >
                            <Check size={12} />
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))
                    ) : (
                      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                        Produto formulado com alto padrão de qualidade para máximo conforto.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "modo_uso" && (
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: "14px",
                      background: "rgba(225, 29, 72, 0.06)",
                      border: "1px solid rgba(225, 29, 72, 0.2)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <Flame size={16} style={{ color: "var(--ruby-light)" }} />
                      <strong style={{ color: "#fff", fontSize: "0.92rem" }}>Como aproveitar ao máximo:</strong>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>
                      {product.usageInstructions || "Aplique a quantidade desejada suavemente sobre a região pretendida e massageie conforme a preferência."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. PRODUTOS RELACIONADOS (VITRINE INFERIOR)
            ======================================================== */}
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
                  fontSize: "0.88rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none"
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

      {/* ========================================================
          MODAL DE ZOOM EM TELA CHEIA
          ======================================================== */}
      {isZoomOpen && (
        <div
          onClick={() => setIsZoomOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100000,
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
              border: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 100001
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
              borderRadius: "16px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)"
            }}
          ></img>
        </div>
      )}
    </div>
  );
}
