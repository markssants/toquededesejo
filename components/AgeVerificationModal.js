"use client";

import React, { useState, useEffect } from "react";
import { Lock, ShieldCheck, Heart } from "lucide-react";

export default function AgeVerificationModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const verified = localStorage.getItem("toque_de_desejo_age_verified");
      if (!verified) {
        setShowModal(true);
      }
    } catch (e) {
      console.warn("Storage check failed", e);
    }
  }, []);

  const handleConfirm = () => {
    try {
      localStorage.setItem("toque_de_desejo_age_verified", "true");
    } catch (e) {
      console.warn(e);
    }
    setShowModal(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  if (!showModal) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "rgba(3, 2, 4, 0.94)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
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
          maxWidth: "460px",
          padding: "36px 30px",
          textAlign: "center",
          position: "relative",
          animation: "fadeScale 0.35s ease-out"
        }}
      >
        {/* Logo Circular */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            margin: "0 auto 20px",
            padding: "3px",
            background: "linear-gradient(135deg, #ff0055 0%, #e11d48 50%, #400918 100%)",
            boxShadow: "0 0 30px rgba(225, 29, 72, 0.5)"
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

        <span
          className="badge-tag badge-ruby"
          style={{ marginBottom: "14px", display: "inline-flex" }}
        >
          <Lock size={12} />
          Conteúdo Adulto (+18)
        </span>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#fff",
            marginBottom: "10px",
            lineHeight: 1.2
          }}
        >
          Você tem mais de 18 anos?
        </h2>

        <p
          style={{
            fontSize: "0.92rem",
            color: "var(--text-secondary)",
            lineHeight: 1.55,
            marginBottom: "26px"
          }}
        >
          A <strong style={{ color: "var(--champagne)" }}>Toque de Desejo</strong> é uma boutique 
          dedicada à sensualidade, bem-estar íntimo e privacidade. Nosso catálogo contém produtos e 
          conteúdos destinados exclusivamente a maiores de idade.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={handleConfirm}
            className="btn-primary"
            style={{ width: "100%", fontSize: "0.98rem", padding: "14px" }}
          >
            <span>Sim, sou maior de 18 anos</span>
            <ShieldCheck size={18} />
          </button>

          <button
            onClick={handleExit}
            className="btn-secondary"
            style={{ width: "100%", fontSize: "0.9rem", padding: "12px" }}
          >
            <span>Não tenho 18 anos (Sair)</span>
          </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: "0.76rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px"
          }}
        >
          <Heart size={12} style={{ color: "var(--ruby-light)" }} />
          <span>Navegação segura com total sigilo e discrição</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
