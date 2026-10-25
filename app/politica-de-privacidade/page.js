"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft } from "lucide-react";

export default function PoliticaPrivacidadePage() {
  return (
    <div style={{ padding: "50px 0 90px" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <div style={{ marginBottom: "30px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--ruby-light)",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "16px"
            }}
          >
            <ArrowLeft size={16} />
            <span>Voltar para o Início</span>
          </Link>
          <span className="badge-tag badge-ruby" style={{ display: "inline-flex", marginBottom: "8px" }}>
            <Lock size={12} />
            Privacidade & Segurança
          </span>
          <h1 className="title-section" style={{ fontSize: "2.2rem" }}>
            Política de Privacidade e Sigilo Absoluto
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "6px" }}>
            Última atualização: 2026
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            color: "var(--text-secondary)",
            fontSize: "0.95rem",
            lineHeight: 1.75
          }}
        >
          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              1. Nosso Compromisso com a sua Privacidade
            </h2>
            <p>
              Na <strong>Toque de Desejo</strong>, compreendemos que a privacidade é a base fundamental da confiança. 
              Tratamos todos os dados, consultas, pedidos e preferências com o mais estrito sigilo e conformidade com a 
              Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              2. Embalagem 100% Descaracterizada e Discreta
            </h2>
            <p>
              Garantimos que todas as nossas encomendas são expedidas em caixas ou envelopes neutros, lacrados e sem qualquer tipo de 
              identificação visual, logotipo ou menção aos termos &quot;sex shop&quot;, &quot;erótico&quot;, &quot;sensual&quot; ou ao nome fantasia da loja.
              O remetente é discreto, assegurando que nem porteiros, vizinhos ou familiares saibam o conteúdo da encomenda.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              3. Sigilo na Fatura do Cartão de Crédito
            </h2>
            <p>
              Ao realizar pagamentos via cartão de crédito ou débito, a identificação na sua fatura bancária aparecerá de forma neutra, 
              sem menção a artigos íntimos, protegendo inteiramente sua discrição financeira.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              4. Atendimento Humanizado e Proteção de Dados
            </h2>
            <p>
              As conversas mantidas por meio do WhatsApp para dúvidas ou finalização de pedidos são estritamente confidenciais. 
              Não compartilhamos, vendemos ou alugamos números de telefone, e-mails ou dados cadastrais para terceiros ou para listas de spam.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              5. Navegação e Cookies
            </h2>
            <p>
              Utilizamos armazenamento local seguro (cookies e local storage) exclusivamente para salvar suas preferências de carrinho, 
              verificação de maioridade legal (+18) e funcionamento otimizado do catálogo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
