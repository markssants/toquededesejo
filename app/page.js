"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useCatalog } from "@/context/CatalogContext";
import ProductCard from "@/components/ProductCard";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  SlidersHorizontal, 
  ShieldCheck, 
  CreditCard, 
  HeartHandshake, 
  Package, 
  CheckCircle2,
  Lock,
  Flame,
  ChevronDown,
  X
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function HomePage() {
  const { products, isLoaded } = useCatalog();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Verificar se há filtro de categoria vindo da URL (ex: ?categoria=Lubrificantes)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("categoria");
      if (catParam) {
        setSelectedCategory(catParam);
        const prodSection = document.getElementById("produtos");
        if (prodSection) {
          setTimeout(() => prodSection.scrollIntoView({ behavior: "smooth" }), 200);
        }
      }
    }
  }, []);

  // Filtragem e ordenação dinâmica dos produtos
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (!p.active) return false;
        
        // Filtro por categoria
        if (selectedCategory !== "all" && p.category !== selectedCategory) {
          return false;
        }

        // Filtro por busca
        if (searchTerm.trim() !== "") {
          const q = searchTerm.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          const matchBrand = p.brand && p.brand.toLowerCase().includes(q);
          const matchDesc = p.shortDescription && p.shortDescription.toLowerCase().includes(q);
          if (!matchName && !matchCat && !matchBrand && !matchDesc) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "newest") return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        // Default: featured first
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchTerm, sortBy]);

  // Contagem de produtos por categoria
  const categoryCounts = useMemo(() => {
    const counts = {};
    products.forEach((p) => {
      if (p.active) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, [products]);

  return (
    <div>
      {/* ========================================================
          1. BANNER PRINCIPAL (HERO SECTION)
          ======================================================== */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 0 100px",
          overflow: "hidden"
        }}
      >
        {/* Foto de Fundo Cinematográfica */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden"
          }}
        >
          <img
            src="/img/hero-bg.jpg"
            alt="Toque de Desejo Atmosfera de Luxo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              opacity: 0.42,
              transform: "scale(1.05)",
              filter: "brightness(0.9) contrast(1.15)"
            }}
          />

          {/* Gradiente Escuro Suave para Perfeita Legibilidade e Integração */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 90% 80% at 50% 40%, rgba(6, 5, 8, 0.45) 0%, rgba(6, 5, 8, 0.88) 75%, #060508 100%)",
              pointerEvents: "none"
            }}
          />

          {/* Iluminação Vermelho Rubi Neon Central */}
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "650px",
              height: "650px",
              background: "radial-gradient(circle, rgba(225, 29, 72, 0.28) 0%, rgba(64, 9, 24, 0.15) 50%, transparent 75%)",
              filter: "blur(60px)",
              pointerEvents: "none"
            }}
          />
        </div>

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge de Destaque da Bio */}
          <div style={{ display: "inline-flex", marginBottom: "20px" }}>
            <span
              className="badge-tag badge-ruby"
              style={{
                fontSize: "0.82rem",
                padding: "6px 16px",
                boxShadow: "0 0 20px rgba(225, 29, 72, 0.25)"
              }}
            >
              <Sparkles size={13} />
              Boutique Sensual Discreta & Sofisticada
            </span>
          </div>

          {/* Logo 3D em Destaque */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              margin: "0 auto 26px",
              padding: "4px",
              background: "linear-gradient(135deg, #ff0055 0%, #e11d48 40%, #2b0610 100%)",
              boxShadow: "0 0 40px rgba(225, 29, 72, 0.5), 0 10px 25px rgba(0, 0, 0, 0.8)",
              animation: "pulseGlow 5s ease-in-out infinite"
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
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="title-display" style={{ marginBottom: "16px" }}>
            Seu prazer, <span className="highlight">seu segredo.</span>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: "680px",
              margin: "0 auto 36px",
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Descubra sensações, explore desejos e encontre seus favoritos com toda a 
            discrição e o requinte que você merece.
          </p>

          {/* Botões de Ação */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "50px"
            }}
          >
            <a href="#produtos" className="btn-primary" style={{ padding: "15px 34px", fontSize: "1rem" }}>
              <span>Explorar Produtos</span>
              <ArrowRight size={18} />
            </a>

            <Link href="/sobre" className="btn-secondary" style={{ padding: "15px 30px", fontSize: "1rem" }}>
              <span>Conhecer a Loja</span>
            </Link>
          </div>

          {/* Destaques Rápidos da Bio do Instagram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--champagne)", fontSize: "0.85rem" }}>
              <Lock size={15} style={{ color: "var(--ruby-light)" }} />
              <span>Embalagens 100% Neutras</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--champagne)", fontSize: "0.85rem" }}>
              <CreditCard size={15} style={{ color: "var(--ruby-light)" }} />
              <span>Aceitamos Pix, Crédito e Débito</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--champagne)", fontSize: "0.85rem" }}>
              <Flame size={15} style={{ color: "var(--ruby-light)" }} />
              <span>Desperte Seus Sentidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SEÇÃO DE CATEGORIAS
          ======================================================== */}
      <section
        id="categorias"
        style={{
          padding: "70px 0 50px",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative"
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge-tag badge-wine" style={{ marginBottom: "10px" }}>
              Curadoria Exclusiva
            </span>
            <h2 className="title-section">Categorias Selecionadas</h2>
            <p className="subtitle-section" style={{ margin: "10px auto 0" }}>
              Navegue pelos nossos departamentos sensuais pensados para despertar cada um dos seus sentidos.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "20px"
            }}
          >
            {STORE_CONFIG.categories.map((cat) => {
              const count = categoryCounts[cat.name] || 0;
              const isSelected = selectedCategory === cat.name;

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    const prodSection = document.getElementById("produtos");
                    if (prodSection) prodSection.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    position: "relative",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: isSelected ? "1px solid var(--ruby-glow)" : "1px solid var(--border-subtle)",
                    background: "var(--bg-card)",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    height: "190px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "18px",
                    boxShadow: isSelected ? "0 0 25px rgba(225, 29, 72, 0.35)" : "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "var(--border-ruby)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.7), 0 0 15px rgba(225, 29, 72, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = isSelected ? "var(--ruby-glow)" : "var(--border-subtle)";
                    e.currentTarget.style.boxShadow = isSelected ? "0 0 25px rgba(225, 29, 72, 0.35)" : "none";
                  }}
                >
                  {/* Foto de Fundo da Categoria */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.38,
                      transition: "transform 0.5s ease"
                    }}
                  />

                  {/* Gradiente Escuro Sobre a Foto */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(14, 11, 18, 0.4) 0%, rgba(10, 8, 14, 0.95) 85%)",
                      pointerEvents: "none"
                    }}
                  />

                  {/* Conteúdo do Card */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "4px"
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.08rem",
                          fontWeight: 700,
                          color: "#fff",
                          fontFamily: "var(--font-serif)"
                        }}
                      >
                        {cat.name}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                          background: count > 0 ? "rgba(225, 29, 72, 0.2)" : "rgba(255, 255, 255, 0.05)",
                          color: count > 0 ? "var(--ruby-light)" : "var(--text-muted)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          fontWeight: 600
                        }}
                      >
                        {count} {count === 1 ? "item" : "itens"}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VITRINE DE PRODUTOS (PRINCIPAL)
          ======================================================== */}
      <section
        id="produtos"
        style={{
          padding: "80px 0 60px",
          position: "relative"
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "32px"
            }}
          >
            <div>
              <span className="badge-tag badge-ruby" style={{ marginBottom: "8px" }}>
                Vitrine Virtual
              </span>
              <h2 className="title-section">Nossos Produtos</h2>
              <p className="subtitle-section" style={{ marginTop: "6px" }}>
                Clique em qualquer produto para visualizar a página completa com fotos reais, benefícios e compra facilitada.
              </p>
            </div>

            {/* Contador de Itens */}
            <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Mostrando <strong style={{ color: "#fff" }}>{filteredProducts.length}</strong> produtos
            </div>
          </div>

          {/* Barra de Filtros e Busca */}
          <div
            className="glass-panel"
            style={{
              padding: "16px 20px",
              marginBottom: "32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px"
            }}
          >
            {/* Campo de Busca Rápida */}
            <div
              style={{
                position: "relative",
                flex: "1 1 280px",
                maxWidth: "420px"
              }}
            >
              <Search
                size={16}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--ruby-light)"
                }}
              />
              <input
                type="text"
                placeholder="Buscar pelo nome ou marca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-luxury"
                style={{ paddingLeft: "38px", paddingRight: "36px", fontSize: "0.88rem" }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--text-muted)"
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Seletor de Ordenação */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                Ordenar por:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "10px 14px",
                  fontSize: "0.85rem",
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                <option value="featured" style={{ background: "#120e17" }}>Destaques</option>
                <option value="price-asc" style={{ background: "#120e17" }}>Menor Preço</option>
                <option value="price-desc" style={{ background: "#120e17" }}>Maior Preço</option>
                <option value="newest" style={{ background: "#120e17" }}>Novidades</option>
              </select>
            </div>
          </div>

          {/* Abas de Categorias (Pills Horizontais) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "16px",
              marginBottom: "32px",
              scrollbarWidth: "none"
            }}
          >
            <button
              onClick={() => setSelectedCategory("all")}
              style={{
                padding: "8px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.84rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                border: "1px solid",
                borderColor: selectedCategory === "all" ? "var(--ruby-primary)" : "var(--border-subtle)",
                background: selectedCategory === "all" ? "rgba(225, 29, 72, 0.2)" : "rgba(255, 255, 255, 0.03)",
                color: selectedCategory === "all" ? "#fff" : "var(--text-secondary)",
                transition: "all 0.2s ease"
              }}
            >
              Todos os Produtos ({products.filter((p) => p.active).length})
            </button>

            {STORE_CONFIG.categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              const count = categoryCounts[cat.name] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    border: "1px solid",
                    borderColor: isSelected ? "var(--ruby-primary)" : "var(--border-subtle)",
                    background: isSelected ? "rgba(225, 29, 72, 0.2)" : "rgba(255, 255, 255, 0.03)",
                    color: isSelected ? "#fff" : "var(--text-secondary)",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat.name} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>

          {/* Grade de Produtos */}
          {filteredProducts.length === 0 ? (
            <div
              className="glass-panel"
              style={{
                padding: "60px 20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px"
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(225, 29, 72, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ruby-light)"
                }}
              >
                <Package size={28} />
              </div>

              <h3 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600 }}>
                Nenhum produto encontrado
              </h3>
              <p style={{ color: "var(--text-secondary)", maxWidth: "420px", fontSize: "0.9rem" }}>
                Não encontramos produtos correspondentes ao filtro ou busca selecionada no momento.
              </p>

              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="btn-primary"
                style={{ marginTop: "10px", fontSize: "0.85rem", padding: "10px 22px" }}
              >
                Limpar filtros e ver todos
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "26px"
              }}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          4. SEÇÃO DE CONFIANÇA & BENEFÍCIOS
          ======================================================== */}
      <section
        style={{
          padding: "70px 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          background: "linear-gradient(180deg, rgba(14, 11, 18, 0.3) 0%, rgba(20, 15, 26, 0.5) 100%)"
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge-tag badge-ruby" style={{ marginBottom: "10px" }}>
              Nossos Compromissos
            </span>
            <h2 className="title-section">Compre com Tranquilidade</h2>
            <p className="subtitle-section" style={{ margin: "8px auto 0" }}>
              Criamos uma experiência segura, acolhedora e 100% discreta para você realizar seus desejos.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px"
            }}
          >
            {STORE_CONFIG.badges.map((badge, index) => {
              return (
                <div
                  key={index}
                  className="glass-panel"
                  style={{
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "transform 0.25s ease, border-color 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "var(--border-ruby)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, rgba(225, 29, 72, 0.2) 0%, rgba(64, 9, 24, 0.4) 100%)",
                      border: "1px solid rgba(225, 29, 72, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--ruby-light)"
                    }}
                  >
                    {index === 0 && <ShieldCheck size={24} />}
                    {index === 1 && <CreditCard size={24} />}
                    {index === 2 && <Sparkles size={24} />}
                    {index === 3 && <HeartHandshake size={24} />}
                  </div>

                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>
                    {badge.title}
                  </h3>

                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. BANNER INSTAGRAM & BIO
          ======================================================== */}
      <section
        style={{
          padding: "80px 0 30px",
          position: "relative"
        }}
      >
        <div className="container">
          <div
            className="glass-panel-glow"
            style={{
              padding: "44px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "30px",
              background: "linear-gradient(135deg, rgba(25, 17, 30, 0.9) 0%, rgba(13, 10, 18, 0.95) 100%)"
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <span className="badge-tag badge-wine" style={{ marginBottom: "12px" }}>
                Comunidade & Novidades
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#fff",
                  fontWeight: 600,
                  marginBottom: "12px",
                  lineHeight: 1.25
                }}
              >
                Acompanhe a Toque de Desejo no Instagram
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  color: "var(--champagne)",
                  fontSize: "0.92rem",
                  marginBottom: "18px"
                }}
              >
                <div>❤️🔥 Seu prazer, seu segredo, tudo discreto</div>
                <div>💋 Perfumes íntimos, lubrificantes e muito mais</div>
                <div>✨ Desperte seus sentidos</div>
                <div>💸 Aceitamos Pix, crédito e débito</div>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                Fique por dentro dos lançamentos, receba dicas de autocuidado sensual e tire dúvidas diretamente por mensagem.
              </p>
            </div>

            <div>
              <a
                href={STORE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "16px 32px",
                  fontSize: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <InstagramIcon size={20} />
                <span>Siga @{STORE_CONFIG.handle}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
