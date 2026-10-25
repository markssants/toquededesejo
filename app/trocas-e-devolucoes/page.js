"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, ShieldAlert } from "lucide-react";

export default function TrocasDevolucoesPage() {
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
          <span className="badge-tag badge-wine" style={{ display: "inline-flex", marginBottom: "8px" }}>
            <RefreshCw size={12} />
            Normas de Atendimento
          </span>
          <h1 className="title-section" style={{ fontSize: "2.2rem" }}>
            Política de Trocas e Devoluções
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
              1. Natureza Íntima dos Produtos & Saúde Sanitária
            </h2>
            <p>
              Por se tratar de cosméticos sensuais, perfumes íntimos, óleos corporais e produtos de uso íntimo pessoal, 
              seguimos com rigor as determinações da Agência Nacional de Vigilância Sanitária (ANVISA) e do Código de Defesa do Consumidor.
            </p>
            <p style={{ marginTop: "8px" }}>
              <strong>Por motivos de higiene e biossegurança de nossos clientes:</strong> não aceitamos a devolução ou troca 
              de produtos íntimos, cosméticos ou lubrificantes cujas embalagens ou lacres tenham sido violados ou abertos após a entrega.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              2. Defeito de Fabricação
            </h2>
            <p>
              Caso algum produto eletrônico (como vibradores ou massageadores) apresente defeito de fabricação comprovado, o cliente 
              poderá solicitar a troca ou reparo no prazo de até 90 (noventa) dias corridos a partir do recebimento, desde que o produto 
              não tenha sofrido mau uso, imersão indevida em água ou utilização de carregadores incompatíveis.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
              3. Como Solicitar Atendimento
            </h2>
            <p>
              Para solicitar suporte sobre qualquer item recebido, entre em contato diretamente com nossa equipe de atendimento 
              pelo WhatsApp oficial. Nossa consultora prestará todas as orientações com respeito e agilidade.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
