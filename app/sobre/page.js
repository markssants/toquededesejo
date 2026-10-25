"use client";

import React from "react";
import Link from "next/link";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Heart, 
  CreditCard, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function SobrePage() {
  return (
    <div style={{ padding: "50px 0 90px" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Top Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="badge-tag badge-ruby" style={{ marginBottom: "12px" }}>
            Nossa Essência
          </span>
          <h1 className="title-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "14px" }}>
            Sobre a Toque de Desejo
          </h1>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "2rem",
              color: "var(--ruby-light)",
              margin: "0 auto 20px"
            }}
          >
            “Seu prazer, seu segredo, tudo discreto.”
          </p>
        </div>

        {/* Card Principal de Apresentação */}
        <div
          className="glass-panel-glow"
          style={{
            padding: "40px 36px",
            marginBottom: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                padding: "3px",
                background: "linear-gradient(135deg, #ff0055 0%, #e11d48 50%, #400918 100%)",
                boxShadow: "0 0 25px rgba(225, 29, 72, 0.4)",
                flexShrink: 0
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
                  alt="Toque de Desejo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.8rem",
                  color: "#fff",
                  fontWeight: 600
                }}
              >
                Sensualidade, Elegância e Conforto
              </h2>
              <p style={{ color: "var(--champagne)", fontSize: "0.95rem" }}>
                Uma boutique virtual desenvolvida para quem valoriza a arte do prazer com total privacidade.
              </p>
            </div>
          </div>

          <p>
            A <strong>Toque de Desejo</strong> nasceu da convicção de que o prazer, o autocuidado e o bem-estar íntimo 
            são dimensões fundamentais da vida, que merecem ser vivenciadas com sofisticação, liberdade e discrição absoluta.
          </p>

          <p>
            Nosso compromisso vai além de selecionar produtos: oferecemos uma experiência segura, sem tabus e sem constrangimentos. 
            Cuidamos de cada detalhe com rigor estético, desde as fragrâncias afrodisíacas com feromônios, os óleos de massagem 
            tântrica e lubrificantes sedosos, até os acessórios ergonômicos em silicone de grau médico.
          </p>

          <p>
            Seja para descobertas a dois ou momentos individuais de conexão com o próprio corpo, estamos aqui para 
            despertar os seus sentidos com atendimento humanizado, atencioso e confidencial.
          </p>
        </div>

        {/* Pilares da Marca */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "50px"
          }}
        >
          <div className="glass-panel" style={{ padding: "26px 20px" }}>
            <div style={{ color: "var(--ruby-light)", marginBottom: "12px" }}>
              <Lock size={26} />
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
              Sigilo Absoluto
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
              Embalagens 100% descaracterizadas, sem referências a sex shop ou produtos íntimos. Discrição do início ao fim.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "26px 20px" }}>
            <div style={{ color: "var(--ruby-light)", marginBottom: "12px" }}>
              <Sparkles size={26} />
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
              Qualidade Rigorosa
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
              Trabalhamos com marcas consagradas (como INTT Cosméticos e Sexy Fantasy), com fórmulas testadas e seguras.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "26px 20px" }}>
            <div style={{ color: "var(--ruby-light)", marginBottom: "12px" }}>
              <Heart size={26} />
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
              Atendimento Acolhedor
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
              Consultoria atenciosa e personalizada para tirar suas dúvidas com total respeito e empatia.
            </p>
          </div>
        </div>

        {/* CTA para a Vitrine e Instagram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            textAlign: "center"
          }}
        >
          <Link href="/#produtos" className="btn-primary" style={{ padding: "14px 30px" }}>
            <span>Explorar Vitrine de Produtos</span>
            <ArrowRight size={18} />
          </Link>

          <a
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: "14px 26px" }}
          >
            <InstagramIcon size={18} />
            <span>Siga no Instagram @{STORE_CONFIG.handle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
