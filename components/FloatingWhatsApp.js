"use client";

import React, { useState } from "react";
import { STORE_CONFIG } from "@/lib/storeConfig";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = "Olá, Toque de Desejo! Gostaria de tirar dúvidas com discrição sobre os produtos da boutique.";
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "26px",
        right: "26px",
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}
    >
      {/* Tooltip / Balão de ajuda */}
      <div
        style={{
          background: "rgba(18, 14, 23, 0.95)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--border-ruby)",
          borderRadius: "var(--radius-md)",
          padding: "8px 14px",
          color: "#fff",
          fontSize: "0.82rem",
          fontWeight: 500,
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          maxWidth: "200px",
          animation: "fadeIn 0.3s ease"
        }}
        className="wa-tooltip"
      >
        <span>Atendimento discreto e dúvidas no WhatsApp</span>
      </div>

      {/* Botão Flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp com sigilo"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.45)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          transition: "all 0.25s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(37, 211, 102, 0.65)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.45)";
        }}
      >
        <MessageCircle size={28} />

        {/* Efeito de Ondulação / Pulse */}
        <span
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "2px solid #25d366",
            opacity: 0.6,
            animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite"
          }}
        />
      </a>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (max-width: 640px) {
          :global(.wa-tooltip) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
