"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export default function TermosDeUsoPage() {
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
            <FileText size={12} />
            Termos & Condições
          </span>
          <h1 className="title-section" style={{ fontSize: "2.2rem" }}>
            Termos de Uso
          </h1>
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
              1. Maioridade Legal (+18 Anos)
            </h2>
            <p>
              O acesso a este website e a aquisição de qualquer produto disponível na vitrine virtual da 
              <strong>Toque de Desejo</strong> são terminantemente restritos a indivíduos maiores de 18 (dezoito) anos 
              ou plenamente capazes segundo a legislação brasileira vigente. Ao navegar no site, o usuário declara 
              expressamente sua maioridade legal.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              2. Finalidade da Vitrine e Compra Assistida
            </h2>
            <p>
              Este site atua como vitrine virtual oficial e catálogo informativo dos produtos comercializados pela 
              <strong>Toque de Desejo</strong>. A formalização dos pedidos, confirmação de frete e envio de dados 
              de pagamento são realizados por meio de atendimento assistido via WhatsApp, garantindo personalização e sigilo.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              3. Propriedade Intelectual
            </h2>
            <p>
              O logotipo da Toque de Desejo, identidade visual, textos descritivos e diagramação são de propriedade da marca 
              ou utilizados com autorização das marcas parceiras (como INTT Cosméticos e Sexy Fantasy). É vedada a reprodução sem autorização prévia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
