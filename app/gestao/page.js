"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useCatalog } from "@/context/CatalogContext";
import { formatCurrency } from "@/lib/products";
import {
  INITIAL_CLIENTS,
  INITIAL_ORDERS,
  MONTHLY_REPORTS,
  CATEGORY_REVENUE,
  QUICK_MESSAGE_TEMPLATES,
  getStoredOrders,
  saveStoredOrders,
  getStoredClients,
  saveStoredClients
} from "@/lib/gestaoStorage";
import {
  LayoutDashboard,
  FolderGit2,
  Users,
  DollarSign,
  Package,
  BarChart3,
  Scale,
  FileText,
  Search,
  Plus,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Sun,
  Bell,
  LogOut,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Tag,
  Copy,
  Check,
  Download,
  Filter,
  Sparkles,
  ShoppingBag,
  Heart
} from "lucide-react";

const GESTAO_PIN = "2026";

export default function GestaoPage() {
  const { products, updateProduct } = useCatalog();

  // Autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Navegação da Sidebar:
  // "dashboard", "clientes", "pedidos", "estoque", "relatorios", "mensagens"
  const [currentView, setCurrentView] = useState("dashboard");

  // Grupos colapsáveis da Sidebar
  const [gestaoOpen, setGestaoOpen] = useState(true);
  const [financeiroOpen, setFinanceiroOpen] = useState(true);
  const [comunicacaoOpen, setComunicacaoOpen] = useState(false);

  // Estados dos Dados
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [orderSearch, setOrderSearch] = useState("");
  const [orderFilter, setOrderFilter] = useState("Todas");
  const [clientSearch, setClientSearch] = useState("");
  const [stockSearch, setStockSearch] = useState("");
  const [stockCategoryFilter, setStockCategoryFilter] = useState("Todas");

  // Modal Novo Pedido
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customerName: "",
    customerPhone: "",
    mainProduct: "",
    description: "",
    total: "",
    priority: "Normal",
    status: "Aguardando",
    notes: ""
  });

  // Modal Novo Cliente
  const [isNewClientOpen, setIsNewClientOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    tag: "Cliente VIP"
  });

  // Feedback Toast
  const [toast, setToast] = useState("");
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  };

  useEffect(() => {
    try {
      if (sessionStorage.getItem("toque_gestao_auth") === "true") {
        setIsAuthenticated(true);
      }
      setOrders(getStoredOrders());
      setClients(getStoredClients());
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === GESTAO_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("toque_gestao_auth", "true");
      setAuthError("");
    } else {
      setAuthError("PIN incorreto. Digite 2026.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("toque_gestao_auth");
    setPinInput("");
  };

  // Pedidos Filtrados
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      if (orderFilter !== "Todas") {
        if (orderFilter === "Aguardando" && o.status !== "Aguardando") return false;
        if (orderFilter === "Em análise" && o.status !== "Em análise") return false;
        if (orderFilter === "Aguardando reposição" && !o.status.toLowerCase().includes("reposição") && !o.status.toLowerCase().includes("peça")) return false;
        if (orderFilter === "Em separação" && !o.status.toLowerCase().includes("separação")) return false;
        if (orderFilter === "Pronto p/ entrega" && !o.status.toLowerCase().includes("pronto")) return false;
        if (orderFilter === "Entregue" && o.status !== "Entregue") return false;
      }
      if (orderSearch.trim()) {
        const q = orderSearch.toLowerCase();
        const mId = o.id.toLowerCase().includes(q);
        const mName = o.customerName.toLowerCase().includes(q);
        const mProd = o.mainProduct.toLowerCase().includes(q);
        const mDesc = o.description.toLowerCase().includes(q);
        if (!mId && !mName && !mProd && !mDesc) return false;
      }
      return true;
    });
  }, [orders, orderFilter, orderSearch]);

  // Clientes Filtrados
  const filteredClients = useMemo(() => {
    return clients.filter((c) => {
      if (!clientSearch.trim()) return true;
      const q = clientSearch.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q)
      );
    });
  }, [clients, clientSearch]);

  // Estoque Filtrado
  const filteredStock = useMemo(() => {
    return products.filter((p) => {
      if (stockCategoryFilter !== "Todas" && p.category !== stockCategoryFilter) {
        return false;
      }
      if (stockSearch.trim()) {
        const q = stockSearch.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q);
      }
      return true;
    });
  }, [products, stockCategoryFilter, stockSearch]);

  // Ações de Salvar
  const handleSaveOrder = (e) => {
    e.preventDefault();
    if (!newOrder.customerName || !newOrder.mainProduct) return;

    const created = {
      id: `PED-${Math.floor(2000 + Math.random() * 900)}`,
      customerName: newOrder.customerName.trim(),
      customerPhone: newOrder.customerPhone || "11999999999",
      customerCity: "São Paulo/SP",
      mainProduct: newOrder.mainProduct.trim(),
      description: newOrder.description.trim() || "Produto sensual para entrega discreta.",
      total: parseFloat(newOrder.total) || 190.00,
      priority: newOrder.priority,
      status: newOrder.status,
      date: "Hoje",
      paymentMethod: "Pix",
      notes: newOrder.notes.trim() || "Embalagem 100% neutra."
    };

    const updated = [created, ...orders];
    setOrders(updated);
    saveStoredOrders(updated);
    setIsNewOrderOpen(false);
    setNewOrder({
      customerName: "",
      customerPhone: "",
      mainProduct: "",
      description: "",
      total: "",
      priority: "Normal",
      status: "Aguardando",
      notes: ""
    });
    showToast(`Pedido ${created.id} criado com sucesso!`);
  };

  const handleSaveClient = (e) => {
    e.preventDefault();
    if (!newClient.name || !newClient.phone) return;

    const names = newClient.name.trim().split(" ");
    const initials = names.length > 1
      ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
      : names[0].slice(0, 2).toUpperCase();

    const created = {
      id: `cli-${Date.now()}`,
      initials,
      name: newClient.name.trim(),
      since: "Recente",
      phone: newClient.phone.trim(),
      email: newClient.email.trim() || `${names[0].toLowerCase()}@email.com`,
      address: newClient.address.trim() || "São Paulo/SP",
      ordersCount: 1,
      totalSpent: 180.00,
      tags: [newClient.tag],
      avatarColor: "#e11d48"
    };

    const updated = [created, ...clients];
    setClients(updated);
    saveStoredClients(updated);
    setIsNewClientOpen(false);
    setNewClient({ name: "", phone: "", email: "", address: "", tag: "Cliente VIP" });
    showToast(`Cliente ${created.name} cadastrada!`);
  };

  const handleQuickStock = (prod, delta) => {
    const cur = Number(prod.stock) || 0;
    const next = Math.max(0, cur + delta);
    updateProduct(prod.id, { stock: next });
    showToast(`Estoque atualizado: ${next} un`);
  };

  const handleOpenWhatsApp = (phone, text) => {
    const clean = phone.replace(/\D/g, "");
    window.open(`https://wa.me/55${clean}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleExportPDF = () => {
    window.print();
  };

  // Helper de cor do status
  const getStatusBadge = (status) => {
    const s = (status || "").toLowerCase();
    if (s.includes("entregue")) {
      return { dot: "#22c55e", bg: "rgba(34, 197, 94, 0.12)", color: "#4ade80", text: "• Entregue" };
    }
    if (s.includes("pronto")) {
      return { dot: "#10b981", bg: "rgba(16, 185, 129, 0.12)", color: "#34d399", text: "• Pronto p/ entrega" };
    }
    if (s.includes("análise") || s.includes("analise")) {
      return { dot: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", color: "#38bdf8", text: "• Em análise" };
    }
    if (s.includes("separação") || s.includes("separacao") || s.includes("embalando")) {
      return { dot: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", color: "#c084fc", text: "• Em separação" };
    }
    if (s.includes("reposição") || s.includes("reposicao") || s.includes("peça") || s.includes("estoque")) {
      return { dot: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)", color: "#fbbf24", text: "• Aguardando reposição" };
    }
    return { dot: "#a1a1aa", bg: "rgba(161, 161, 170, 0.12)", color: "#d4d4d8", text: `• ${status}` };
  };

  // Helper de prioridade
  const getPriorityBadge = (prio) => {
    if (prio === "Alta" || prio === "VIP") {
      return { bg: "rgba(225, 29, 72, 0.14)", color: "#fb7185", border: "rgba(225, 29, 72, 0.3)" };
    }
    if (prio === "Baixa") {
      return { bg: "rgba(161, 161, 170, 0.1)", color: "#a1a1aa", border: "rgba(161, 161, 170, 0.2)" };
    }
    return { bg: "rgba(59, 130, 246, 0.12)", color: "#60a5fa", border: "rgba(59, 130, 246, 0.25)" };
  };

  // ========================================================
  // TELA DE DESBLOQUEIO POR PIN
  // ========================================================
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08060a",
          padding: "20px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "380px",
            background: "#120e17",
            border: "1px solid rgba(225, 29, 72, 0.25)",
            borderRadius: "20px",
            padding: "36px 28px",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              margin: "0 auto 16px",
              overflow: "hidden",
              border: "2px solid #e11d48",
              boxShadow: "0 0 20px rgba(225, 29, 72, 0.4)"
            }}
          >
            <img src="/img/logo.jpg" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <h1 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
            Toque de Desejo
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#a1a1aa", marginBottom: "24px" }}>
            Painel Executivo & Gestão
          </p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input
              type="password"
              placeholder="Digite o PIN (2026)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              autoFocus
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "1.1rem",
                textAlign: "center",
                letterSpacing: "4px",
                background: "#09070c",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                color: "#fff",
                outline: "none"
              }}
            />

            {authError && (
              <div style={{ color: "#fb7185", fontSize: "0.82rem" }}>{authError}</div>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "9999px",
                fontSize: "0.92rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(225, 29, 72, 0.4)"
              }}
            >
              Acessar Painel
            </button>
          </form>

          <div style={{ marginTop: "24px" }}>
            <Link href="/" style={{ color: "#71717a", fontSize: "0.82rem", textDecoration: "none" }}>
              ← Voltar para a loja online
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // LAYOUT PRINCIPAL (IDÊNTICO AOS PRINTS, EM MODO ESCURO PRETO & VERMELHO)
  // ========================================================
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#09070c",
        color: "#f4f4f5",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      {/* Toast de notificação rápida */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            background: "#1c1424",
            border: "1px solid #e11d48",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.88rem"
          }}
        >
          <Check size={16} color="#4ade80" />
          <span>{toast}</span>
        </div>
      )}

      {/* ========================================================
          SIDEBAR LATERAL ESQUERDA (EXATAMENTE COMO NOS PRINTS)
          ======================================================== */}
      <aside
        style={{
          width: "250px",
          flexShrink: 0,
          background: "#100c16",
          borderRight: "1px solid rgba(255, 255, 255, 0.07)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "24px 16px"
        }}
      >
        <div>
          {/* Logo + Título no Topo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 8px 24px", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #e11d48",
                flexShrink: 0
              }}
            >
              <img src="/img/logo.jpg" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", lineHeight: 1.2 }}>
                Toque de Desejo
              </div>
              <div style={{ fontSize: "0.75rem", color: "#e11d48", fontWeight: 600 }}>
                Central da Boutique
              </div>
            </div>
          </div>

          {/* Menus de Navegação */}
          <nav style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {/* 1. Item Dashboard */}
            <button
              onClick={() => setCurrentView("dashboard")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                padding: "10px 14px",
                borderRadius: "9999px",
                background: currentView === "dashboard" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                color: currentView === "dashboard" ? "#fff" : "#a1a1aa",
                fontWeight: currentView === "dashboard" ? 600 : 500,
                fontSize: "0.88rem",
                border: "none",
                cursor: "pointer",
                boxShadow: currentView === "dashboard" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none",
                transition: "all 0.15s ease"
              }}
            >
              <LayoutDashboard size={17} />
              <span>Dashboard</span>
            </button>

            {/* 2. Grupo Gestão (Colapsável) */}
            <div style={{ marginTop: "12px" }}>
              <button
                onClick={() => setGestaoOpen(!gestaoOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "6px 14px",
                  background: "transparent",
                  border: "none",
                  color: "#71717a",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  textTransform: "capitalize"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FolderGit2 size={16} style={{ color: "#e11d48" }} />
                  <span style={{ color: "#d4d4d8" }}>Gestão</span>
                </div>
                {gestaoOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {gestaoOpen && (
                <div style={{ marginTop: "4px", paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <button
                    onClick={() => setCurrentView("clientes")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "9px 14px",
                      borderRadius: "9999px",
                      background: currentView === "clientes" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                      color: currentView === "clientes" ? "#fff" : "#a1a1aa",
                      fontWeight: currentView === "clientes" ? 600 : 500,
                      fontSize: "0.85rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: currentView === "clientes" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                    }}
                  >
                    <Users size={15} />
                    <span>Clientes</span>
                  </button>

                  <button
                    onClick={() => setCurrentView("pedidos")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "9px 14px",
                      borderRadius: "9999px",
                      background: currentView === "pedidos" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                      color: currentView === "pedidos" ? "#fff" : "#a1a1aa",
                      fontWeight: currentView === "pedidos" ? 600 : 500,
                      fontSize: "0.85rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: currentView === "pedidos" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                    }}
                  >
                    <ShoppingBag size={15} />
                    <span>Pedidos & Entregas</span>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Grupo Financeiro (Colapsável) */}
            <div style={{ marginTop: "12px" }}>
              <button
                onClick={() => setFinanceiroOpen(!financeiroOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "6px 14px",
                  background: "transparent",
                  border: "none",
                  color: "#71717a",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <DollarSign size={16} style={{ color: "#e11d48" }} />
                  <span style={{ color: "#d4d4d8" }}>Financeiro</span>
                </div>
                {financeiroOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {financeiroOpen && (
                <div style={{ marginTop: "4px", paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <button
                    onClick={() => setCurrentView("estoque")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "9px 14px",
                      borderRadius: "9999px",
                      background: currentView === "estoque" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                      color: currentView === "estoque" ? "#fff" : "#a1a1aa",
                      fontWeight: currentView === "estoque" ? 600 : 500,
                      fontSize: "0.85rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: currentView === "estoque" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                    }}
                  >
                    <Package size={15} />
                    <span>Estoque de Produtos</span>
                  </button>

                  <button
                    onClick={() => setCurrentView("relatorios")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "9px 14px",
                      borderRadius: "9999px",
                      background: currentView === "relatorios" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                      color: currentView === "relatorios" ? "#fff" : "#a1a1aa",
                      fontWeight: currentView === "relatorios" ? 600 : 500,
                      fontSize: "0.85rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: currentView === "relatorios" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                    }}
                  >
                    <BarChart3 size={15} />
                    <span>Relatórios</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Grupo Comunicação & WhatsApp */}
            <div style={{ marginTop: "12px" }}>
              <button
                onClick={() => setComunicacaoOpen(!comunicacaoOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "6px 14px",
                  background: "transparent",
                  border: "none",
                  color: "#71717a",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Scale size={16} style={{ color: "#e11d48" }} />
                  <span style={{ color: "#d4d4d8" }}>Atendimento</span>
                </div>
                {comunicacaoOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {comunicacaoOpen && (
                <div style={{ marginTop: "4px", paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <button
                    onClick={() => setCurrentView("mensagens")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "9px 14px",
                      borderRadius: "9999px",
                      background: currentView === "mensagens" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                      color: currentView === "mensagens" ? "#fff" : "#a1a1aa",
                      fontWeight: currentView === "mensagens" ? 600 : 500,
                      fontSize: "0.85rem",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    <FileText size={15} />
                    <span>Modelos WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Rodapé da Sidebar: Perfil da Lojista */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 10px",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "14px",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #e11d48 0%, #4c0519 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.82rem",
                color: "#fff"
              }}
            >
              TD
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#fff" }}>Toque de Desejo</div>
              <div style={{ fontSize: "0.72rem", color: "#71717a" }}>contato@toquededesejo.com</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{ background: "none", border: "none", color: "#71717a", cursor: "pointer", padding: "4px" }}
            title="Sair do painel"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* ========================================================
          ÁREA DE CONTEÚDO PRINCIPAL (COM BARRA DE BUSCA EM PÍLULA)
          ======================================================== */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Barra de Busca Superior em Pílula (Idêntica ao topo dos prints) */}
        <div
          style={{
            padding: "16px 32px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px"
          }}
        >
          {/* Campo de Busca em Pílula Redonda */}
          <div
            style={{
              flex: "1 1 400px",
              maxWidth: "600px",
              position: "relative"
            }}
          >
            <Search size={15} style={{ position: "absolute", left: "16px", top: "12px", color: "#71717a" }} />
            <input
              type="text"
              placeholder="Buscar pedido, cliente ou produto..."
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px 10px 42px",
                borderRadius: "9999px",
                background: "#14101a",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#fff",
                fontSize: "0.88rem",
                outline: "none"
              }}
            />
          </div>

          {/* Atalhos Rápidos da Direita: Site, Modo, Notificações */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              href="/"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#d4d4d8",
                fontSize: "0.82rem",
                textDecoration: "none"
              }}
            >
              <ExternalLink size={13} />
              <span>Site</span>
            </Link>

            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#eab308"
              }}
            >
              <Sun size={15} />
            </div>

            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a1a1aa",
                position: "relative"
              }}
            >
              <Bell size={15} />
              <span style={{ position: "absolute", top: "8px", right: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#e11d48" }} />
            </div>

            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#fff"
              }}
            >
              TD
            </div>
          </div>
        </div>

        {/* ========================================================
            CORPO DA PÁGINA (CONFORME A GUIA ATIVA)
            ======================================================== */}
        <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
          {/* ========================================================
              VIEW 1: DASHBOARD PRINCIPAL (SCREENSHOT 3)
              ======================================================== */}
          {currentView === "dashboard" && (
            <div>
              {/* Título da Seção + Botão Nova Ordem */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
                <div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    Dashboard
                  </h1>
                  <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                    Visão geral da boutique — setembro de 2026
                  </p>
                </div>

                <button
                  onClick={() => setIsNewOrderOpen(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                  }}
                >
                  <Plus size={16} />
                  <span>Novo pedido</span>
                </button>
              </div>

              {/* 4 Cards de Métricas do Topo com cantos arredondados (20px) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "18px", marginBottom: "26px" }}>
                {/* Card 1 */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(225, 29, 72, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fb7185" }}>
                      <TrendingUp size={18} />
                    </div>
                    <ArrowUpRight size={16} color="#71717a" />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    R$ 9.800
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#d4d4d8", fontWeight: 600, marginBottom: "2px" }}>
                    Faturamento do mês
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#71717a" }}>
                    33 pedidos • +12% vs. período anterior
                  </div>
                </div>

                {/* Card 2 */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#38bdf8" }}>
                      <ShoppingBag size={18} />
                    </div>
                    <ArrowUpRight size={16} color="#71717a" />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    5
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#d4d4d8", fontWeight: 600, marginBottom: "2px" }}>
                    Pedidos em aberto
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#71717a" }}>
                    Em análise, separação ou aguardando
                  </div>
                </div>

                {/* Card 3 */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(34, 197, 94, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80" }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <ArrowUpRight size={16} color="#71717a" />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    1
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#d4d4d8", fontWeight: 600, marginBottom: "2px" }}>
                    Prontos p/ entrega
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#71717a" }}>
                    Aguardando envio discreto ou retirada
                  </div>
                </div>

                {/* Card 4 */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(225, 29, 72, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fb7185" }}>
                      <Package size={18} />
                    </div>
                    <ArrowUpRight size={16} color="#71717a" />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    3
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#d4d4d8", fontWeight: 600, marginBottom: "2px" }}>
                    Produtos em baixa
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#71717a" }}>
                    Abaixo do estoque mínimo
                  </div>
                </div>
              </div>

              {/* Linha do Meio: Gráfico de Faturamento (65%) + Alertas de Estoque (35%) */}
              <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: "20px", marginBottom: "26px" }}>
                {/* Gráfico de Faturamento dos Últimos 7 Meses */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>Faturamento</h3>
                      <span style={{ fontSize: "0.78rem", color: "#71717a" }}>Últimos 7 meses</span>
                    </div>
                    <button
                      onClick={() => setCurrentView("relatorios")}
                      style={{ background: "none", border: "none", color: "#e11d48", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}
                    >
                      Ver relatórios →
                    </button>
                  </div>

                  {/* Curva SVG Suave com Gradiente Vermelho Rubi */}
                  <div style={{ height: "200px", width: "100%", position: "relative" }}>
                    <svg viewBox="0 0 600 200" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id="rubyGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#e11d48" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Linhas de Grade Horizontais */}
                      <line x1="0" y1="20" x2="600" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                      <line x1="0" y1="70" x2="600" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                      <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                      <line x1="0" y1="170" x2="600" y2="170" stroke="rgba(255,255,255,0.06)" />

                      {/* Área Preenchida com Gradiente */}
                      <path
                        d="M 20 120 C 80 110, 140 100, 180 115 C 220 130, 260 80, 320 60 C 380 40, 440 30, 500 50 C 540 60, 570 120, 580 140 L 580 170 L 20 170 Z"
                        fill="url(#rubyGradient)"
                      />

                      {/* Linha Spline em Vermelho Rubi Vibrante */}
                      <path
                        d="M 20 120 C 80 110, 140 100, 180 115 C 220 130, 260 80, 320 60 C 380 40, 440 30, 500 50 C 540 60, 570 120, 580 140"
                        fill="none"
                        stroke="#e11d48"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Rótulos dos Meses */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", color: "#71717a", fontSize: "0.78rem" }}>
                      <span>Mar</span>
                      <span>Abr</span>
                      <span>Mai</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Ago</span>
                      <span>Set</span>
                    </div>
                  </div>
                </div>

                {/* Card de Alertas de Estoque */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                      Alertas de estoque
                    </h3>
                    <span style={{ fontSize: "0.78rem", color: "#71717a", display: "block", marginBottom: "18px" }}>
                      Reposição recomendada
                    </span>

                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.88rem" }}>Sedenta Por Conforto 50g</div>
                          <span style={{ color: "#71717a", fontSize: "0.75rem" }}>REF-SED-GLITTER</span>
                        </div>
                        <span style={{ fontSize: "0.78rem", padding: "3px 10px", borderRadius: "9999px", background: "rgba(245, 158, 11, 0.15)", color: "#facc15", fontWeight: 600 }}>
                          2 / 4
                        </span>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.88rem" }}>Vibrador Líquido Beijável</div>
                          <span style={{ color: "#71717a", fontSize: "0.75rem" }}>REF-VIB-LIQ</span>
                        </div>
                        <span style={{ fontSize: "0.78rem", padding: "3px 10px", borderRadius: "9999px", background: "rgba(239, 68, 68, 0.15)", color: "#f87171", fontWeight: 600 }}>
                          0 / 2
                        </span>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.88rem" }}>Phero Aroma Feromônios</div>
                          <span style={{ color: "#71717a", fontSize: "0.75rem" }}>REF-PHERO-15ML</span>
                        </div>
                        <span style={{ fontSize: "0.78rem", padding: "3px 10px", borderRadius: "9999px", background: "rgba(245, 158, 11, 0.15)", color: "#facc15", fontWeight: 600 }}>
                          1 / 2
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentView("estoque")}
                    style={{
                      marginTop: "20px",
                      background: "none",
                      border: "none",
                      color: "#a1a1aa",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    Gerenciar estoque →
                  </button>
                </div>
              </div>

              {/* Tabela de Pedidos Recentes */}
              <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>Pedidos recentes</h3>
                    <span style={{ fontSize: "0.78rem", color: "#71717a" }}>Acompanhamento de entregas em tempo real</span>
                  </div>
                  <button
                    onClick={() => setCurrentView("pedidos")}
                    style={{ background: "none", border: "none", color: "#e11d48", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}
                  >
                    Ver todos →
                  </button>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
                    <thead>
                      <tr style={{ color: "#71717a", fontSize: "0.78rem", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Pedido</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Cliente</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Produto / Itens</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Prioridade</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Previsão</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500, textAlign: "right" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.slice(0, 5).map((ord) => {
                        const prio = getPriorityBadge(ord.priority);
                        const stat = getStatusBadge(ord.status);
                        return (
                          <tr key={ord.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
                            <td style={{ padding: "14px", color: "#60a5fa", fontWeight: 600 }}>{ord.id}</td>
                            <td style={{ padding: "14px", fontWeight: 600, color: "#fff" }}>{ord.customerName}</td>
                            <td style={{ padding: "14px", color: "#d4d4d8" }}>{ord.mainProduct}</td>
                            <td style={{ padding: "14px" }}>
                              <span
                                style={{
                                  fontSize: "0.74rem",
                                  padding: "2px 8px",
                                  borderRadius: "6px",
                                  background: prio.bg,
                                  color: prio.color,
                                  border: `1px solid ${prio.border}`,
                                  fontWeight: 600
                                }}
                              >
                                {ord.priority}
                              </span>
                            </td>
                            <td style={{ padding: "14px", color: "#a1a1aa" }}>{ord.date}</td>
                            <td style={{ padding: "14px", textAlign: "right" }}>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  padding: "4px 10px",
                                  borderRadius: "9999px",
                                  background: stat.bg,
                                  color: stat.color,
                                  fontWeight: 600
                                }}
                              >
                                {stat.text}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              VIEW 2: PEDIDOS & ENTREGAS (CENTRAL DE DESPACHO)
              ======================================================== */}
          {currentView === "pedidos" && (
            <div>
              {/* Topo: Título + Botão Novo Pedido */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
                <div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    Pedidos & Entregas
                  </h1>
                  <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                    Controle completo dos pedidos, embalagem discreta e entregas
                  </p>
                </div>

                <button
                  onClick={() => setIsNewOrderOpen(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                  }}
                >
                  <Plus size={16} />
                  <span>Novo pedido</span>
                </button>
              </div>

              {/* Barra de Filtro e Busca com Pílulas */}
              <div
                style={{
                  background: "#15111c",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "9999px",
                  padding: "6px 12px 6px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  marginBottom: "26px",
                  flexWrap: "wrap"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: "1 1 240px" }}>
                  <Search size={15} color="#71717a" />
                  <input
                    type="text"
                    placeholder="Buscar por pedido, cliente ou produto..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      fontSize: "0.85rem",
                      outline: "none"
                    }}
                  />
                </div>

                {/* Filtros em Pílula */}
                <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
                  {["Todas", "Aguardando", "Em análise", "Aguardando reposição", "Em separação", "Pronto p/ entrega", "Entregue"].map((f) => {
                    const isSel = orderFilter === f;
                    return (
                      <button
                        key={f}
                        onClick={() => setOrderFilter(f)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "9999px",
                          fontSize: "0.78rem",
                          fontWeight: isSel ? 600 : 500,
                          background: isSel ? "#e11d48" : "transparent",
                          color: isSel ? "#fff" : "#a1a1aa",
                          border: "none",
                          cursor: "pointer",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {f}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid de Cards de Pedidos */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                {filteredOrders.map((ord) => {
                  const prio = getPriorityBadge(ord.priority);
                  const stat = getStatusBadge(ord.status);
                  return (
                    <div
                      key={ord.id}
                      style={{
                        background: "#15111c",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "20px",
                        padding: "22px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "180px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
                      }}
                    >
                      {/* Topo do Card */}
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "10px",
                                background: "rgba(225, 29, 72, 0.15)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fb7185"
                              }}
                            >
                              <ShoppingBag size={18} />
                            </div>
                            <div>
                              <span style={{ fontSize: "0.75rem", color: "#71717a", fontWeight: 600, display: "block" }}>
                                {ord.id}
                              </span>
                              <strong style={{ fontSize: "0.95rem", color: "#fff" }}>{ord.mainProduct}</strong>
                            </div>
                          </div>

                          <span
                            style={{
                              fontSize: "0.72rem",
                              padding: "2px 8px",
                              borderRadius: "6px",
                              background: prio.bg,
                              color: prio.color,
                              border: `1px solid ${prio.border}`,
                              fontWeight: 600
                            }}
                          >
                            {ord.priority}
                          </span>
                        </div>

                        <p style={{ color: "#a1a1aa", fontSize: "0.82rem", lineHeight: 1.4, margin: "0 0 16px" }}>
                          {ord.description}
                        </p>
                      </div>

                      {/* Rodapé do Card */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          paddingTop: "12px",
                          borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                        }}
                      >
                        <div>
                          <span style={{ color: "#71717a", fontSize: "0.75rem", display: "block" }}>{ord.customerName}</span>
                          <strong style={{ fontSize: "1.05rem", color: "#fff" }}>
                            {formatCurrency(ord.total)}
                          </strong>
                        </div>

                        <span
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 12px",
                            borderRadius: "9999px",
                            background: stat.bg,
                            color: stat.color,
                            fontWeight: 600
                          }}
                        >
                          {stat.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================
              VIEW 3: CLIENTES CRM (SCREENSHOT 2)
              ======================================================== */}
          {currentView === "clientes" && (
            <div>
              {/* Topo: Título + Botão Novo Cliente */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
                <div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    Clientes
                  </h1>
                  <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                    {clients.length} clientes cadastrados na boutique
                  </p>
                </div>

                <button
                  onClick={() => setIsNewClientOpen(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                  }}
                >
                  <Plus size={16} />
                  <span>Novo cliente</span>
                </button>
              </div>

              {/* Barra de Busca em Pílula (Screenshot 2) */}
              <div
                style={{
                  background: "#15111c",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "9999px",
                  padding: "10px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "26px"
                }}
              >
                <Search size={15} color="#71717a" />
                <input
                  type="text"
                  placeholder="Buscar cliente por nome, telefone ou e-mail..."
                  value={clientSearch}
                  onChange={(e) => setClientSearch(e.target.value)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "0.88rem",
                    outline: "none"
                  }}
                />
              </div>

              {/* Grid 2x3 de Cards de Clientes (Screenshot 2) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                {filteredClients.map((cli) => (
                  <div
                    key={cli.id}
                    style={{
                      background: "#15111c",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "20px",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "220px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
                    }}
                  >
                    <div>
                      {/* Avatar com Iniciais + Nome + Data */}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            color: "#fff",
                            fontSize: "0.95rem",
                            flexShrink: 0
                          }}
                        >
                          {cli.initials}
                        </div>
                        <div>
                          <strong style={{ fontSize: "1rem", color: "#fff", display: "block" }}>{cli.name}</strong>
                          <span style={{ fontSize: "0.75rem", color: "#71717a" }}>Cliente desde {cli.since}</span>
                        </div>
                      </div>

                      {/* Dados de Contato com Ícones */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.82rem", color: "#a1a1aa", marginBottom: "18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <Phone size={13} style={{ color: "#71717a" }} />
                          <span>{cli.phone}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <Mail size={13} style={{ color: "#71717a" }} />
                          <span>{cli.email}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <MapPin size={13} style={{ color: "#71717a" }} />
                          <span>{cli.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rodapé: Total de Pedidos e Total Gasto R$ */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "14px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#a1a1aa", fontSize: "0.82rem" }}>
                        <ShoppingBag size={14} style={{ color: "#e11d48" }} />
                        <span>{cli.ordersCount} pedido(s)</span>
                      </div>

                      <strong style={{ fontSize: "1.05rem", color: "#fff" }}>
                        {formatCurrency(cli.totalSpent)}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              VIEW 4: ESTOQUE DE PRODUTOS
              ======================================================== */}
          {currentView === "estoque" && (
            <div>
              {/* Topo: Título + Botão Novo Produto */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
                <div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    Estoque de Produtos
                  </h1>
                  <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                    Controle de produtos sensuais, categorias e reposição
                  </p>
                </div>

                <Link
                  href="/admin"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                  }}
                >
                  <Plus size={16} />
                  <span>Novo produto</span>
                </Link>
              </div>

              {/* 4 Cards de Métricas do Estoque */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "18px", marginBottom: "26px" }}>
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "20px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(59, 130, 246, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", marginBottom: "12px" }}>
                    <Package size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>44</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Itens em estoque</div>
                </div>

                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "20px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(34, 197, 94, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80", marginBottom: "12px" }}>
                    <DollarSign size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>R$ 5.880</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Valor em estoque</div>
                </div>

                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "20px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(245, 158, 11, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#facc15", marginBottom: "12px" }}>
                    <AlertTriangle size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>2</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Produtos em baixa</div>
                </div>

                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "20px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(225, 29, 72, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fb7185", marginBottom: "12px" }}>
                    <Sparkles size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>1</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Esgotadas</div>
                </div>
              </div>

              {/* Barra de Filtros em Pílula */}
              <div
                style={{
                  background: "#15111c",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "9999px",
                  padding: "6px 12px 6px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  marginBottom: "22px",
                  flexWrap: "wrap"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: "1 1 240px" }}>
                  <Search size={15} color="#71717a" />
                  <input
                    type="text"
                    placeholder="Buscar produto, código ou categoria..."
                    value={stockSearch}
                    onChange={(e) => setStockSearch(e.target.value)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      fontSize: "0.85rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
                  {["Todas", "Lubrificantes", "Perfumes íntimos", "Óleos para massagem", "Vibradores", "Cosméticos"].map((c) => {
                    const isSel = stockCategoryFilter === c;
                    return (
                      <button
                        key={c}
                        onClick={() => setStockCategoryFilter(c)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "9999px",
                          fontSize: "0.78rem",
                          fontWeight: isSel ? 600 : 500,
                          background: isSel ? "#e11d48" : "transparent",
                          color: isSel ? "#fff" : "#a1a1aa",
                          border: "none",
                          cursor: "pointer",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tabela de Estoque com Barra de Progresso */}
              <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
                    <thead>
                      <tr style={{ color: "#71717a", fontSize: "0.78rem", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                        <th style={{ padding: "14px 18px", fontWeight: 500 }}>Produto / Marca</th>
                        <th style={{ padding: "14px 18px", fontWeight: 500 }}>Código</th>
                        <th style={{ padding: "14px 18px", fontWeight: 500 }}>Categoria</th>
                        <th style={{ padding: "14px 18px", fontWeight: 500 }}>Preço</th>
                        <th style={{ padding: "14px 18px", fontWeight: 500, width: "220px" }}>Estoque</th>
                        <th style={{ padding: "14px 18px", fontWeight: 500, textAlign: "center" }}>Nível</th>
                        <th style={{ padding: "14px 18px", fontWeight: 500, textAlign: "right" }}>Ajuste</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStock.map((prod) => {
                        const isZero = prod.stock <= 0;
                        const isLow = prod.stock <= 5 && !isZero;
                        const min = 3;
                        const percent = Math.min(100, Math.round((prod.stock / 10) * 100));

                        return (
                          <tr key={prod.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
                            <td style={{ padding: "14px 18px" }}>
                              <strong style={{ color: "#fff", display: "block" }}>{prod.name}</strong>
                              <span style={{ color: "#71717a", fontSize: "0.75rem" }}>{prod.brand}</span>
                            </td>

                            <td style={{ padding: "14px 18px", color: "#a1a1aa", fontFamily: "monospace", fontSize: "0.78rem" }}>
                              REF-{prod.id.slice(0, 8).toUpperCase()}
                            </td>

                            <td style={{ padding: "14px 18px", color: "#d4d4d8" }}>
                              {prod.category}
                            </td>

                            <td style={{ padding: "14px 18px", color: "#fff", fontWeight: 600 }}>
                              {formatCurrency(prod.price)}
                            </td>

                            {/* Barra de Progresso do Estoque */}
                            <td style={{ padding: "14px 18px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{ flex: 1, height: "6px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "9999px", overflow: "hidden" }}>
                                  <div
                                    style={{
                                      height: "100%",
                                      width: `${percent}%`,
                                      background: isZero ? "#ef4444" : isLow ? "#f59e0b" : "#22c55e",
                                      borderRadius: "9999px"
                                    }}
                                  />
                                </div>
                                <span style={{ fontSize: "0.78rem", color: "#a1a1aa", whiteSpace: "nowrap" }}>
                                  <strong style={{ color: "#fff" }}>{prod.stock}</strong> / min {min}
                                </span>
                              </div>
                            </td>

                            {/* Nível Pill */}
                            <td style={{ padding: "14px 18px", textAlign: "center" }}>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  padding: "3px 10px",
                                  borderRadius: "9999px",
                                  fontWeight: 600,
                                  background: isZero ? "rgba(239, 68, 68, 0.15)" : isLow ? "rgba(245, 158, 11, 0.15)" : "rgba(34, 197, 94, 0.15)",
                                  color: isZero ? "#f87171" : isLow ? "#facc15" : "#4ade80"
                                }}
                              >
                                {isZero ? "Esgotado" : isLow ? "Baixo" : "Ok"}
                              </span>
                            </td>

                            {/* Ajuste Rápido */}
                            <td style={{ padding: "14px 18px", textAlign: "right" }}>
                              <div style={{ display: "inline-flex", gap: "4px" }}>
                                <button
                                  onClick={() => handleQuickStock(prod, -1)}
                                  style={{ width: "26px", height: "26px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", border: "none", color: "#fff", cursor: "pointer" }}
                                >
                                  -
                                </button>
                                <button
                                  onClick={() => handleQuickStock(prod, 1)}
                                  style={{ width: "26px", height: "26px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", border: "none", color: "#fff", cursor: "pointer" }}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              VIEW 5: RELATÓRIOS FINANCEIROS (SCREENSHOT 4)
              ======================================================== */}
          {currentView === "relatorios" && (
            <div>
              {/* Topo: Título + Botão Exportar PDF */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
                <div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    Relatórios de Faturamento
                  </h1>
                  <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                    Faturamento mensal automático, custos e margem
                  </p>
                </div>

                <button
                  onClick={handleExportPDF}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  <Download size={15} />
                  <span>Exportar PDF</span>
                </button>
              </div>

              {/* 4 Cards de Métricas de Faturamento (Screenshot 4) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "18px", marginBottom: "26px" }}>
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(59, 130, 246, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", marginBottom: "12px" }}>
                    <TrendingUp size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>R$ 100.250</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Faturamento (7 meses)</div>
                </div>

                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(34, 197, 94, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80", marginBottom: "12px" }}>
                    <DollarSign size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>R$ 66.750</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Lucro bruto</div>
                </div>

                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#38bdf8", marginBottom: "12px" }}>
                    <ShoppingBag size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>338</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Pedidos entregues</div>
                </div>

                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "22px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(168, 85, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c084fc", marginBottom: "12px" }}>
                    <Sparkles size={17} />
                  </div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>R$ 297</div>
                  <div style={{ fontSize: "0.82rem", color: "#71717a" }}>Ticket médio</div>
                </div>
              </div>

              {/* Linha do Meio: Gráfico de Barras Duplas (Faturamento x Custos) + Categorias Mais Rentáveis */}
              <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: "20px", marginBottom: "26px" }}>
                {/* Gráfico de Barras Comparativo */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>Faturamento x Custos</h3>
                      <span style={{ fontSize: "0.78rem", color: "#71717a" }}>Comparativo mensal</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.78rem" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#e11d48" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e11d48" }} />
                        Faturamento
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#38bdf8" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#38bdf8" }} />
                        Custos
                      </span>
                    </div>
                  </div>

                  {/* Barras em SVG */}
                  <div style={{ height: "200px", width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 10px 10px" }}>
                    {MONTHLY_REPORTS.map((m, idx) => {
                      const hRev = (m.revenue / 20000) * 160;
                      const hCost = (m.costs / 20000) * 160;

                      return (
                        <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                          <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                            {/* Barra Faturamento */}
                            <div
                              style={{
                                width: "18px",
                                height: `${hRev}px`,
                                background: "#e11d48",
                                borderRadius: "4px 4px 0 0"
                              }}
                              title={`Faturamento: ${formatCurrency(m.revenue)}`}
                            />
                            {/* Barra Custos */}
                            <div
                              style={{
                                width: "18px",
                                height: `${hCost}px`,
                                background: "#38bdf8",
                                borderRadius: "4px 4px 0 0"
                              }}
                              title={`Custos: ${formatCurrency(m.costs)}`}
                            />
                          </div>
                          <span style={{ fontSize: "0.75rem", color: "#71717a" }}>{m.month.slice(0, 3)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Categorias Mais Rentáveis (Screenshot 4) */}
                <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    Categorias mais rentáveis
                  </h3>
                  <span style={{ fontSize: "0.78rem", color: "#71717a", display: "block", marginBottom: "20px" }}>
                    Receita acumulada
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {CATEGORY_REVENUE.map((cat, i) => (
                      <div key={i}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", marginBottom: "6px" }}>
                          <span style={{ color: "#d4d4d8" }}>{cat.name}</span>
                          <span style={{ color: "#a1a1aa", fontWeight: 600 }}>{formatCurrency(cat.value)}</span>
                        </div>
                        <div style={{ height: "14px", background: "rgba(255, 255, 255, 0.06)", borderRadius: "6px", overflow: "hidden" }}>
                          <div
                            style={{
                              height: "100%",
                              width: `${cat.percent}%`,
                              background: cat.color,
                              borderRadius: "6px"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabela de Fechamento Mensal (Screenshot 4 - Inferior) */}
              <div style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
                  Fechamento mensal
                </h3>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
                    <thead>
                      <tr style={{ color: "#71717a", fontSize: "0.78rem", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Mês</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Pedidos</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Faturamento</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Custos</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500 }}>Lucro</th>
                        <th style={{ padding: "12px 14px", fontWeight: 500, textAlign: "right" }}>Margem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MONTHLY_REPORTS.map((m, idx) => (
                        <tr key={idx} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
                          <td style={{ padding: "14px", fontWeight: 700, color: "#fff" }}>{m.month}</td>
                          <td style={{ padding: "14px", color: "#a1a1aa" }}>{m.orders}</td>
                          <td style={{ padding: "14px", color: "#fff", fontWeight: 600 }}>{formatCurrency(m.revenue)}</td>
                          <td style={{ padding: "14px", color: "#38bdf8" }}>{formatCurrency(m.costs)}</td>
                          <td style={{ padding: "14px", color: "#4ade80", fontWeight: 700 }}>{formatCurrency(m.profit)}</td>
                          <td style={{ padding: "14px", textAlign: "right" }}>
                            <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "6px", background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", fontWeight: 700 }}>
                              {m.margin}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              VIEW 6: MODELOS WHATSAPP
              ======================================================== */}
          {currentView === "mensagens" && (
            <div>
              <div style={{ marginBottom: "26px" }}>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                  Modelos de Mensagem WhatsApp
                </h1>
                <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                  Textos prontos e elegantes para atendimento e pós-venda
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                {QUICK_MESSAGE_TEMPLATES.map((t) => (
                  <div key={t.id} style={{ background: "#15111c", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <strong style={{ color: "#fff", fontSize: "0.95rem" }}>{t.title}</strong>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(t.text);
                          showToast("Texto copiado!");
                        }}
                        style={{
                          background: "#e11d48",
                          border: "none",
                          color: "#fff",
                          padding: "6px 14px",
                          borderRadius: "9999px",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        <Copy size={12} />
                        <span>Copiar</span>
                      </button>
                    </div>

                    <pre
                      style={{
                        background: "#0c0a10",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        padding: "16px",
                        borderRadius: "12px",
                        fontSize: "0.82rem",
                        color: "#d4d4d8",
                        whiteSpace: "pre-wrap",
                        fontFamily: "inherit",
                        lineHeight: 1.6,
                        margin: 0
                      }}
                    >
                      {t.text}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          MODAL: NOVO PEDIDO
          ======================================================== */}
      {isNewOrderOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999, padding: "20px" }}>
          <div style={{ background: "#15111c", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", width: "100%", maxWidth: "480px", padding: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Novo Pedido / Ordem de Entrega</h3>
              <button onClick={() => setIsNewOrderOpen(false)} style={{ background: "none", border: "none", color: "#a1a1aa", fontSize: "1.2rem", cursor: "pointer" }}>✕</button>
            </div>

            <form onSubmit={handleSaveOrder} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Cliente *</label>
                <input
                  type="text"
                  required
                  placeholder="Nome do cliente"
                  value={newOrder.customerName}
                  onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>WhatsApp</label>
                  <input
                    type="text"
                    placeholder="11999999999"
                    value={newOrder.customerPhone}
                    onChange={(e) => setNewOrder({ ...newOrder, customerPhone: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Valor Total (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    value={newOrder.total}
                    onChange={(e) => setNewOrder({ ...newOrder, total: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Produtos / Itens do Pedido *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sedenta Molhada 50g + Óleo Tântrico"
                  value={newOrder.mainProduct}
                  onChange={(e) => setNewOrder({ ...newOrder, mainProduct: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Observações / Embalagem / Entrega</label>
                <input
                  type="text"
                  placeholder="Ex: Embalagem 100% neutra, entregar discretamente via motoboy"
                  value={newOrder.description}
                  onChange={(e) => setNewOrder({ ...newOrder, description: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Prioridade</label>
                  <select
                    value={newOrder.priority}
                    onChange={(e) => setNewOrder({ ...newOrder, priority: e.target.value })}
                    style={{ width: "100%", padding: "10px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Alta">Alta</option>
                    <option value="Baixa">Baixa</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Status Inicial</label>
                  <select
                    value={newOrder.status}
                    onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
                    style={{ width: "100%", padding: "10px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                  >
                    <option value="Aguardando">Aguardando</option>
                    <option value="Em análise">Em análise</option>
                    <option value="Aguardando reposição">Aguardando reposição</option>
                    <option value="Em separação">Em separação</option>
                    <option value="Pronto p/ entrega">Pronto p/ entrega</option>
                    <option value="Entregue">Entregue</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  Salvar Pedido
                </button>
                <button
                  type="button"
                  onClick={() => setIsNewOrderOpen(false)}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.06)",
                    color: "#a1a1aa",
                    border: "none",
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: NOVO CLIENTE
          ======================================================== */}
      {isNewClientOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999, padding: "20px" }}>
          <div style={{ background: "#15111c", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", width: "100%", maxWidth: "440px", padding: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Cadastrar Novo Cliente</h3>
              <button onClick={() => setIsNewClientOpen(false)} style={{ background: "none", border: "none", color: "#a1a1aa", fontSize: "1.2rem", cursor: "pointer" }}>✕</button>
            </div>

            <form onSubmit={handleSaveClient} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Vanessa Guimarães"
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>WhatsApp / Telefone *</label>
                <input
                  type="text"
                  required
                  placeholder="(11) 98888-7777"
                  value={newClient.phone}
                  onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>E-mail</label>
                <input
                  type="email"
                  placeholder="vanessa@email.com"
                  value={newClient.email}
                  onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#a1a1aa", display: "block", marginBottom: "4px" }}>Endereço / Bairro</label>
                <input
                  type="text"
                  placeholder="Moema, São Paulo/SP"
                  value={newClient.address}
                  onChange={(e) => setNewClient({ ...newClient, address: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#0c0a10", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "0.85rem" }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  Salvar Cliente
                </button>
                <button
                  type="button"
                  onClick={() => setIsNewClientOpen(false)}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.06)",
                    color: "#a1a1aa",
                    border: "none",
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
