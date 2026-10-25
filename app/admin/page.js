"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCatalog } from "@/context/CatalogContext";
import { formatCurrency } from "@/lib/products";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { 
  ShieldCheck, 
  Lock, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  Download, 
  Upload, 
  RotateCcw, 
  Check, 
  Sparkles, 
  ArrowLeft,
  Search,
  Package,
  Layers,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const ADMIN_PIN = "2026"; // PIN padrão para acesso do lojista

export default function AdminPage() {
  const { 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    toggleProductStatus, 
    resetCatalog,
    importCatalog 
  } = useCatalog();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Estado do Modal de Edição/Criação
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Formulário do Produto
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    slug: "",
    category: STORE_CONFIG.categories[0].name,
    brand: "",
    price: "",
    originalPrice: "",
    stock: "10",
    image: "/img/produtos/1.jpg",
    badge: "",
    active: true,
    featured: true,
    shortDescription: "",
    fullDescription: "",
    volume: "",
    usageInstructions: "",
    benefitsText: ""
  });

  // Salvar autenticação na sessão
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem("toque_admin_logged");
      if (auth === "true") {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("toque_admin_logged", "true");
      setAuthError("");
    } else {
      setAuthError("Código de acesso incorreto. Tente '2026'.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("toque_admin_logged");
    setPinInput("");
  };

  // Abrir Modal para Novo Produto
  const handleOpenNew = () => {
    setEditingProduct(null);
    setFormData({
      id: `prod-${Date.now()}`,
      name: "",
      slug: "",
      category: STORE_CONFIG.categories[0].name,
      brand: "",
      price: "",
      originalPrice: "",
      stock: "15",
      image: "/img/produtos/1.jpg",
      badge: "Novidade",
      active: true,
      featured: true,
      shortDescription: "",
      fullDescription: "",
      volume: "",
      usageInstructions: "",
      benefitsText: ""
    });
    setIsModalOpen(true);
  };

  // Abrir Modal para Editar Produto Existente
  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      id: product.id,
      name: product.name,
      slug: product.slug,
      category: product.category,
      brand: product.brand || "",
      price: product.price ? product.price.toString() : "",
      originalPrice: product.originalPrice ? product.originalPrice.toString() : "",
      stock: product.stock ? product.stock.toString() : "0",
      image: product.images?.[0] || "/img/produtos/1.jpg",
      badge: product.badge || "",
      active: product.active,
      featured: product.featured,
      shortDescription: product.shortDescription || "",
      fullDescription: product.fullDescription || "",
      volume: product.volume || "",
      usageInstructions: product.usageInstructions || "",
      benefitsText: product.benefits ? product.benefits.join("\n") : ""
    });
    setIsModalOpen(true);
  };

  // Gerar slug automaticamente ao digitar nome
  const handleNameChange = (e) => {
    const val = e.target.value;
    const autoSlug = val
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setFormData((prev) => ({
      ...prev,
      name: val,
      slug: editingProduct ? prev.slug : autoSlug
    }));
  };

  // Salvar Produto (Novo ou Editado)
  const handleSubmitProduct = (e) => {
    e.preventDefault();

    const benefitsArray = formData.benefitsText
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const productPayload = {
      id: formData.id || `prod-${Date.now()}`,
      name: formData.name.trim(),
      slug: formData.slug.trim() || `produto-${Date.now()}`,
      category: formData.category,
      brand: formData.brand.trim(),
      price: parseFloat(formData.price) || 0,
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      stock: parseInt(formData.stock, 10) || 0,
      images: [formData.image.trim() || "/img/produtos/1.jpg"],
      badge: formData.badge.trim(),
      active: formData.active,
      featured: formData.featured,
      shortDescription: formData.shortDescription.trim(),
      fullDescription: formData.fullDescription.trim(),
      volume: formData.volume.trim(),
      usageInstructions: formData.usageInstructions.trim(),
      benefits: benefitsArray,
      createdAt: editingProduct?.createdAt || new Date().toISOString()
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productPayload);
    } else {
      addProduct(productPayload);
    }

    setIsModalOpen(false);
  };

  // Exportar Catálogo em JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `catalogo_toque_de_desejo_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Importar Catálogo em JSON
  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (importCatalog(parsed)) {
          alert("Catálogo importado com sucesso!");
        } else {
          alert("Arquivo inválido. Certifique-se de que é um array de produtos válido.");
        }
      } catch (err) {
        alert("Erro ao ler arquivo JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  // Produtos filtrados na busca do admin
  const filteredProducts = products.filter((p) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q))
    );
  });

  // ==========================================================
  // TELA DE LOGIN DO ADMIN SE NÃO AUTENTICADO
  // ==========================================================
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px"
        }}
      >
        <div
          className="glass-panel-glow"
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "40px 30px",
            textAlign: "center"
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(225, 29, 72, 0.15)",
              border: "1px solid rgba(225, 29, 72, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--ruby-light)",
              margin: "0 auto 20px"
            }}
          >
            <Lock size={26} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "8px"
            }}
          >
            Acesso ao Lojista
          </h2>

          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
            Digite seu PIN de segurança para gerenciar produtos, preços, imagens e estoque.
          </p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="password"
              placeholder="PIN de acesso (padrão: 2026)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="input-luxury"
              style={{ textAlign: "center", fontSize: "1.1rem", letterSpacing: "0.15em" }}
              autoFocus
            />

            {authError && (
              <div style={{ color: "#f87171", fontSize: "0.82rem" }}>
                {authError}
              </div>
            )}

            <button type="submit" className="btn-primary" style={{ padding: "14px" }}>
              <span>Entrar no Painel</span>
              <ShieldCheck size={18} />
            </button>
          </form>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/"
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <ArrowLeft size={13} />
              <span>Voltar para a loja</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================
  // DASHBOARD PRINCIPAL DO ADMIN
  // ==========================================================
  const activeCount = products.filter((p) => p.active).length;
  const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);

  return (
    <div style={{ padding: "40px 0 80px" }}>
      <div className="container">
        {/* Top Header do Admin */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "32px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "24px"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span className="badge-tag badge-ruby">
                <ShieldCheck size={13} />
                Painel Administrativo
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                Toque de Desejo Boutique
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 700, color: "#fff" }}>
              Gerenciamento de Produtos
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/" className="btn-secondary" style={{ padding: "10px 18px", fontSize: "0.85rem" }}>
              <ArrowLeft size={15} />
              <span>Ver Loja</span>
            </Link>

            <button
              onClick={handleOpenNew}
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.85rem" }}
            >
              <Plus size={16} />
              <span>Novo Produto</span>
            </button>

            <button
              onClick={handleLogout}
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                padding: "8px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              Sair
            </button>
          </div>
        </div>

        {/* Estatísticas Rápidas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "18px",
            marginBottom: "32px"
          }}
        >
          <div className="glass-panel" style={{ padding: "20px" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Total de Produtos
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#fff", marginTop: "4px" }}>
              {products.length}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Produtos Ativos na Vitrine
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
              {activeCount}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Unidades em Estoque
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--champagne)", marginTop: "4px" }}>
              {totalStock}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Categorias Ativas
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--ruby-light)", marginTop: "4px" }}>
              {STORE_CONFIG.categories.length}
            </div>
          </div>
        </div>

        {/* Barra de Ferramentas: Busca + Import/Export */}
        <div
          className="glass-panel"
          style={{
            padding: "16px 20px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ position: "relative", flex: "1 1 260px", maxWidth: "380px" }}>
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
              placeholder="Filtrar por nome ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-luxury"
              style={{ paddingLeft: "38px", fontSize: "0.88rem" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            {/* Exportar JSON */}
            <button
              onClick={handleExportJSON}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "8px 14px",
                color: "var(--text-secondary)",
                fontSize: "0.82rem"
              }}
              title="Baixar backup dos produtos em JSON"
            >
              <Download size={14} />
              <span>Exportar JSON</span>
            </button>

            {/* Importar JSON */}
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "8px 14px",
                color: "var(--text-secondary)",
                fontSize: "0.82rem",
                cursor: "pointer"
              }}
              title="Carregar catálogo salvo em JSON"
            >
              <Upload size={14} />
              <span>Importar JSON</span>
              <input type="file" accept=".json" onChange={handleImportJSON} style={{ display: "none" }} />
            </label>

            {/* Resetar Padrão */}
            <button
              onClick={() => {
                if (confirm("Deseja restaurar o catálogo padrão original? Todas as alterações manuais serão resetadas.")) {
                  resetCatalog();
                }
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(225, 29, 72, 0.08)",
                border: "1px solid rgba(225, 29, 72, 0.2)",
                borderRadius: "var(--radius-md)",
                padding: "8px 14px",
                color: "var(--ruby-light)",
                fontSize: "0.82rem"
              }}
              title="Restaurar produtos iniciais do Instagram"
            >
              <RotateCcw size={14} />
              <span>Restaurar Padrão</span>
            </button>
          </div>
        </div>

        {/* Tabela de Produtos */}
        <div
          className="glass-panel"
          style={{
            overflowX: "auto",
            borderRadius: "var(--radius-lg)"
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "0.88rem"
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "rgba(255, 255, 255, 0.02)",
                  color: "var(--text-muted)",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em"
                }}
              >
                <th style={{ padding: "14px 20px" }}>Produto</th>
                <th style={{ padding: "14px 16px" }}>Categoria</th>
                <th style={{ padding: "14px 16px" }}>Preço</th>
                <th style={{ padding: "14px 16px" }}>Estoque</th>
                <th style={{ padding: "14px 16px" }}>Status</th>
                <th style={{ padding: "14px 20px", textAlign: "right" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
                    Nenhum produto cadastrado com esse critério.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr
                    key={p.id}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                      transition: "background 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    {/* Imagem + Nome + Slug */}
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "var(--radius-sm)",
                            overflow: "hidden",
                            backgroundColor: "#000",
                            flexShrink: 0
                          }}
                        >
                          <img
                            src={p.images?.[0] || "/img/produtos/1.jpg"}
                            alt={p.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
                            {p.name}
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                            /{p.slug} {p.brand && `• ${p.brand}`}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Categoria */}
                    <td style={{ padding: "14px 16px", color: "var(--champagne)" }}>
                      {p.category}
                    </td>

                    {/* Preço */}
                    <td style={{ padding: "14px 16px" }}>
                      <div style={{ fontWeight: 600, color: "#fff" }}>
                        {formatCurrency(p.price)}
                      </div>
                      {p.originalPrice && (
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textDecoration: "line-through" }}>
                          {formatCurrency(p.originalPrice)}
                        </div>
                      )}
                    </td>

                    {/* Estoque */}
                    <td style={{ padding: "14px 16px" }}>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: p.stock > 0 ? "#4ade80" : "#f87171"
                        }}
                      >
                        {p.stock} un.
                      </span>
                    </td>

                    {/* Status */}
                    <td style={{ padding: "14px 16px" }}>
                      <button
                        onClick={() => toggleProductStatus(p.id)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "4px 10px",
                          borderRadius: "var(--radius-full)",
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          background: p.active ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
                          color: p.active ? "#4ade80" : "#f87171",
                          border: `1px solid ${p.active ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`
                        }}
                      >
                        {p.active ? <Eye size={12} /> : <EyeOff size={12} />}
                        <span>{p.active ? "Ativo" : "Inativo"}</span>
                      </button>
                    </td>

                    {/* Ações */}
                    <td style={{ padding: "14px 20px", textAlign: "right" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <Link
                          href={`/produto/${p.slug}`}
                          target="_blank"
                          title="Ver página ao vivo"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "var(--radius-sm)",
                            background: "rgba(255, 255, 255, 0.05)",
                            color: "var(--text-secondary)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Eye size={15} />
                        </Link>

                        <button
                          onClick={() => handleOpenEdit(p)}
                          title="Editar produto"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "var(--radius-sm)",
                            background: "rgba(225, 29, 72, 0.15)",
                            color: "var(--ruby-light)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Edit3 size={15} />
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Excluir o produto "${p.name}"?`)) {
                              deleteProduct(p.id);
                            }
                          }}
                          title="Excluir produto"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "var(--radius-sm)",
                            background: "rgba(239, 68, 68, 0.15)",
                            color: "#f87171",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==========================================================
          MODAL DE CADASTRO / EDIÇÃO DE PRODUTO
          ========================================================== */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            className="glass-panel-glow"
            style={{
              width: "100%",
              maxWidth: "760px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
              position: "relative"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Sparkles size={18} style={{ color: "var(--ruby-light)" }} />
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>
                  {editingProduct ? "Editar Produto" : "Cadastrar Novo Produto"}
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitProduct} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Linha 1: Nome e Slug */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Nome Completo do Produto *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Ex: Sedenta Molhada 50g"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Slug da URL (/produto/seu-slug) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="ex: sedenta-molhada-50g"
                    className="input-luxury"
                  />
                </div>
              </div>

              {/* Linha 2: Categoria, Marca e Volume */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Categoria *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="input-luxury"
                    style={{ cursor: "pointer" }}
                  >
                    {STORE_CONFIG.categories.map((c) => (
                      <option key={c.id} value={c.name} style={{ background: "#120e17" }}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Marca / Fabricante
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="Ex: INTT Cosméticos, Sexy Fantasy"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Conteúdo / Volume
                  </label>
                  <input
                    type="text"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    placeholder="Ex: 50g, 130ml, 1 unidade"
                    className="input-luxury"
                  />
                </div>
              </div>

              {/* Linha 3: Preço, Preço Original e Estoque */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Preço de Venda (R$) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="39.90"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Preço Original / Promoção (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    placeholder="Opcional (ex: 49.90)"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Quantidade em Estoque *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="input-luxury"
                  />
                </div>
              </div>

              {/* Linha 4: Caminho da Imagem e Etiqueta */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Caminho ou URL da Foto Principal *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Ex: /img/produtos/1.jpg ou link externo"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Etiqueta / Badge
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="Ex: Mais Vendido, Novidade"
                    className="input-luxury"
                  />
                </div>
              </div>

              {/* Linha 5: Descrição Curta */}
              <div>
                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Descrição Curta (Vitrine) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  placeholder="Resumo de 1 a 2 linhas para o card"
                  className="input-luxury"
                />
              </div>

              {/* Linha 6: Descrição Completa */}
              <div>
                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Descrição Detalhada do Produto
                </label>
                <textarea
                  rows={4}
                  value={formData.fullDescription}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  placeholder="Explicação rica sobre as sensações, diferenciais e composição do produto"
                  className="input-luxury"
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Linha 7: Benefícios (1 por linha) */}
              <div>
                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Benefícios e Destaques (escreva um benefício por linha)
                </label>
                <textarea
                  rows={3}
                  value={formData.benefitsText}
                  onChange={(e) => setFormData({ ...formData, benefitsText: e.target.value })}
                  placeholder="Deslize intenso e duradouro&#10;Não irrita e respeita o pH íntimo&#10;Fórmula à base d'água"
                  className="input-luxury"
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Linha 8: Modo de Uso */}
              <div>
                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Modo de Uso e Cuidados
                </label>
                <input
                  type="text"
                  value={formData.usageInstructions}
                  onChange={(e) => setFormData({ ...formData, usageInstructions: e.target.value })}
                  placeholder="Instruções de aplicação ou higienização fornecidas pelo fabricante"
                  className="input-luxury"
                />
              </div>

              {/* Linha 9: Switches de Status */}
              <div style={{ display: "flex", gap: "24px", paddingTop: "8px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.88rem", color: "#fff" }}>
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  />
                  <span>Produto Ativo (Visível na loja)</span>
                </label>

                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.88rem", color: "#fff" }}>
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  />
                  <span>Destaque na Página Inicial</span>
                </label>
              </div>

              {/* Botões do Rodapé do Modal */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-secondary"
                  style={{ padding: "10px 20px", fontSize: "0.9rem" }}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "10px 26px", fontSize: "0.9rem" }}
                >
                  <Check size={16} />
                  <span>{editingProduct ? "Salvar Alterações" : "Criar Produto"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
