"use client";

import React from "react";
import Link from "next/link";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { 
  MessageCircle, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Heart,
  Sparkles,
  Settings
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #09070c 0%, #040306 100%)",
        borderTop: "1px solid rgba(225, 29, 72, 0.2)",
        position: "relative",
        marginTop: "80px",
        overflow: "hidden"
      }}
    >
      {/* Luz ambiente de fundo no rodapé */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(circle, rgba(225, 29, 72, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      {/* Faixa de Garantia de Sigilo */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "26px 0",
          background: "rgba(18, 14, 23, 0.4)"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(225, 29, 72, 0.15)",
                border: "1px solid rgba(225, 29, 72, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ruby-light)"
              }}
            >
              <Lock size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>
                Embalagem 100% Discreta & Sem Identificação
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                Pacotes neutros sem logotipo, sem menção a produtos íntimos ou sex shop.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              className="badge-tag badge-wine"
              style={{ fontSize: "0.78rem" }}
            >
              <CreditCard size={13} />
              Sigilo na fatura do cartão
            </span>
            <span
              className="badge-tag badge-ruby"
              style={{ fontSize: "0.78rem" }}
            >
              <ShieldCheck size={13} />
              Privacidade 100% garantida
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Rodapé */}
      <div className="container" style={{ padding: "60px 20px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px 30px",
            marginBottom: "50px"
          }}
        >
          {/* Coluna 1: Marca & Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--ruby-primary)",
                  boxShadow: "0 0 15px rgba(225, 29, 72, 0.4)"
                }}
              >
                <img
                  src="/img/logo.jpg"
                  alt="Toque de Desejo Logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#fff"
                }}
              >
                Toque de Desejo
              </span>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6"
              }}
            >
              Boutique virtual refinada dedicada ao autocuidado, ao prazer e à conexão íntima. 
              Descubra sensações únicas com total conforto, confiança e privacidade.
            </p>

            <div
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "1.6rem",
                color: "var(--ruby-light)",
                marginTop: "4px"
              }}
            >
              “Seu prazer, seu segredo, tudo discreto.”
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "10px" }}>
              <a
                href={STORE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-subtle)",
                  color: "#fff",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ruby-primary)";
                  e.currentTarget.style.background = "rgba(225, 29, 72, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              >
                <InstagramIcon size={15} style={{ color: "var(--ruby-light)" }} />
                <span>@{STORE_CONFIG.handle}</span>
              </a>

              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(37, 211, 102, 0.1)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  color: "#4ade80",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(37, 211, 102, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
                }}
              >
                <MessageCircle size={15} />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Categorias */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Sparkles size={16} style={{ color: "var(--ruby-primary)" }} />
              Categorias
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {STORE_CONFIG.categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/?categoria=${encodeURIComponent(cat.name)}#produtos`}
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                      transition: "color 0.2s ease",
                      display: "inline-block"
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Institucional & Políticas */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "18px"
              }}
            >
              Institucional
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link
                  href="/sobre"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                >
                  Sobre a Toque de Desejo
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                >
                  Política de Privacidade & Sigilo
                </Link>
              </li>
              <li>
                <Link
                  href="/trocas-e-devolucoes"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                >
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--ruby-light)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/gestao"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "8px"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ruby-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <ShieldCheck size={13} style={{ color: "var(--ruby-primary)" }} />
                  <span>Painel de Gestão & CRM</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <Settings size={13} />
                  <span>Catálogo de Produtos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Atendimento */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "18px"
              }}
            >
              Atendimento Discreto
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Tire suas dúvidas, solicite recomendações de produtos ou finalize seu pedido com total acolhimento e privacidade.
              </p>
              <div style={{ fontSize: "0.85rem", color: "var(--champagne)" }}>
                <strong>Horário:</strong> {STORE_CONFIG.openingHours}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--champagne)" }}>
                <strong>WhatsApp:</strong> {STORE_CONFIG.whatsappDisplay}
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(225, 29, 72, 0.08)",
                  border: "1px solid rgba(225, 29, 72, 0.2)",
                  fontSize: "0.78rem",
                  color: "var(--text-secondary)"
                }}
              >
                💸 Formas de pagamento: Pix, Cartão de Crédito (até 12x) e Débito.
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Avisos Legais */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.8rem",
            color: "var(--text-muted)"
          }}
        >
          <div>
            © 2026 Toque de Desejo. Todos os direitos reservados.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Feito com paixão e sensualidade</span>
            <Heart size={14} style={{ color: "var(--ruby-primary)", fill: "var(--ruby-primary)" }} />
            <span>• Proibido para menores de 18 anos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
