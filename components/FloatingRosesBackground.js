"use client";

import React, { useMemo } from "react";

// ========================================================
// PÉTALAS DE ROSA REALISTAS EM 3D PARA AS LATERAIS
// ========================================================

// 1. Pétala Curvada Tridimensional (Visão Frontal com Dobra)
function RealisticPetalCup({ size = 42 }) {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 60 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`cupBase-${id}`} cx="45%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ff4d79" />
          <stop offset="35%" stopColor="#e11d48" />
          <stop offset="75%" stopColor="#9f1239" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <linearGradient id={`cupRim-${id}`} x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#ffe4e6" />
          <stop offset="50%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
      </defs>
      <path
        d="M30 4 C14 18 4 36 6 52 C8 66 20 72 30 72 C40 72 52 66 54 52 C56 36 46 18 30 4 Z"
        fill={`url(#cupBase-${id})`}
      />
      <path
        d="M14 46 C18 60 26 66 32 66 C38 66 46 58 48 46 C44 58 36 62 30 62 C24 62 18 56 14 46 Z"
        fill="#3d0314"
        opacity="0.6"
      />
      <path
        d="M30 5 C18 19 8 35 10 50 C11 58 17 65 25 68 C18 62 14 54 13 46 C12 34 20 20 30 5 Z"
        fill={`url(#cupRim-${id})`}
        opacity="0.85"
      />
      <path
        d="M26 6 C30 4 34 4 38 7 C34 9 30 9 26 6 Z"
        fill="#fff"
        opacity="0.75"
      />
    </svg>
  );
}

// 2. Pétala Torcida em Espiral (Em voo livre)
function RealisticPetalTwist({ size = 46 }) {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 55 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id={`twistGrad1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fecdd3" />
          <stop offset="25%" stopColor="#f43f5e" />
          <stop offset="65%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#4c0519" />
        </linearGradient>
        <linearGradient id={`twistGrad2-${id}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#881337" />
          <stop offset="55%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
      </defs>
      <path
        d="M12 28 C16 12 36 6 46 16 C52 24 48 38 38 46 C28 54 14 44 12 28 Z"
        fill={`url(#twistGrad2-${id})`}
      />
      <path
        d="M8 32 C12 18 28 22 36 34 C44 46 40 64 26 68 C14 70 6 50 8 32 Z"
        fill={`url(#twistGrad1-${id})`}
      />
      <path
        d="M14 26 C22 22 32 28 36 38 C34 32 26 26 18 28 C14 28 12 30 14 26 Z"
        fill="#fff"
        opacity="0.55"
      />
    </svg>
  );
}

// 3. Pétala em Perfil / Queda Flutuante
function RealisticPetalSide({ size = 38 }) {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`sideGrad-${id}`} cx="28%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="35%" stopColor="#e11d48" />
          <stop offset="80%" stopColor="#881337" />
          <stop offset="100%" stopColor="#3d0314" />
        </radialGradient>
      </defs>
      <path
        d="M38 4 C24 8 10 20 6 36 C2 50 12 58 24 56 C36 54 44 42 46 28 C48 16 44 8 38 4 Z"
        fill={`url(#sideGrad-${id})`}
      />
      <path
        d="M36 6 C24 12 14 22 10 36 C16 26 26 16 36 10 C38 8 38 7 36 6 Z"
        fill="#fff"
        opacity="0.7"
      />
    </svg>
  );
}

export default function FloatingRosesBackground() {
  // ========================================================
  // 1. FUNDO DO SITE (z-index: 0, atrás do conteúdo): PÉTALAS
  // ========================================================
  const bgPetals = useMemo(() => {
    return [
      { id: "bg-1", type: "cup", left: 12, size: 34, duration: 32, delay: -6, opacity: 0.18, swayDuration: 7.5 },
      { id: "bg-2", type: "twist", left: 30, size: 38, duration: 29, delay: -16, opacity: 0.20, swayDuration: 7 },
      { id: "bg-3", type: "side", left: 50, size: 30, duration: 35, delay: -10, opacity: 0.19, swayDuration: 8 },
      { id: "bg-4", type: "cup", left: 70, size: 36, duration: 31, delay: -22, opacity: 0.18, swayDuration: 8.5 },
      { id: "bg-5", type: "twist", left: 88, size: 38, duration: 34, delay: -4, opacity: 0.19, swayDuration: 7 }
    ];
  }, []);

  // ========================================================
  // 2. EM CIMA / PRIMEIRO PLANO (z-index: 60, sobreposto nas laterais): ROSAS DO PINTEREST
  // Exatamente 1 rosa na esquerda e 1 rosa na direita em fase alternada (180°):
  // Impossível colidir ou passar uma por cima da outra, garantindo leveza absoluta e zero poluição.
  // ========================================================
  const lateralRoses = useMemo(() => {
    return [
      // 1 única rosa na lateral esquerda (desce suavemente em 28s)
      { id: "rose-left", side: "left", offset: 22, size: 54, duration: 28, delay: -4, opacity: 0.88, swayDuration: 7.5 },

      // 1 única rosa na lateral direita (desce em 28s, defasada em 14s para alternância perfeita)
      { id: "rose-right", side: "right", offset: 24, size: 54, duration: 28, delay: -18, opacity: 0.88, swayDuration: 7.5 }
    ];
  }, []);

  return (
    <>
      {/* CAMADA 1: FUNDO DO SITE COM PÉTALAS SUAVES (z-index: 0, atrás do conteúdo) */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        {bgPetals.map((p) => (
          <div
            key={p.id}
            className="bg-petal-fall"
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: "-80px",
              opacity: p.opacity,
              animation: `bgFall ${p.duration}s linear ${p.delay}s infinite`,
              willChange: "transform"
            }}
          >
            <div
              className="bg-petal-sway"
              style={{
                animation: `bgPetalSway ${p.swayDuration}s ease-in-out ${p.delay * 0.4}s infinite alternate`
              }}
            >
              {p.type === "cup" && <RealisticPetalCup size={p.size} />}
              {p.type === "twist" && <RealisticPetalTwist size={p.size} />}
              {p.type === "side" && <RealisticPetalSide size={p.size} />}
            </div>
          </div>
        ))}
      </div>

      {/* CAMADA 2: EM CIMA / PRIMEIRO PLANO (z-index: 60, sobreposto nas laterais) - ROSAS DO PINTEREST */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 60,
          overflow: "hidden"
        }}
      >
        {lateralRoses.map((p) => (
          <div
            key={p.id}
            className="lateral-rose-fall"
            style={{
              position: "absolute",
              [p.side]: `${p.offset}px`,
              top: "-110px",
              opacity: p.opacity,
              animation: `roseFall ${p.duration}s linear ${p.delay}s infinite`,
              willChange: "transform",
              filter: "drop-shadow(0 6px 14px rgba(0, 0, 0, 0.75))"
            }}
          >
            <div
              className="lateral-rose-sway"
              style={{
                animation: `roseSway ${p.swayDuration}s ease-in-out ${p.delay * 0.3}s infinite alternate`
              }}
            >
              <img
                src="/img/rose-pinterest.png"
                alt=""
                width={p.size}
                height={p.size}
                style={{
                  width: `${p.size}px`,
                  height: "auto",
                  display: "block",
                  userSelect: "none"
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        /* Animações da Camada de Fundo (Pétalas) */
        @keyframes bgFall {
          0% {
            transform: translateY(-80px);
          }
          100% {
            transform: translateY(115vh);
          }
        }

        @keyframes bgPetalSway {
          0% {
            transform: translateX(-20px) rotate(-22deg) scale(0.95);
          }
          100% {
            transform: translateX(20px) rotate(22deg) scale(1.05);
          }
        }

        /* Animações das Rosas em Cima (Laterais, Primeiro Plano) */
        @keyframes roseFall {
          0% {
            transform: translateY(-110px);
          }
          100% {
            transform: translateY(115vh);
          }
        }

        @keyframes roseSway {
          0% {
            transform: translateX(-16px) rotate(-18deg) scale(0.94) rotateY(-15deg);
          }
          50% {
            transform: translateX(6px) rotate(5deg) scale(1.02) rotateY(10deg);
          }
          100% {
            transform: translateX(18px) rotate(22deg) scale(1.06) rotateY(25deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lateral-rose-fall,
          .bg-petal-fall {
            animation: none !important;
            display: none !important;
          }
        }

        @media (max-width: 600px) {
          .lateral-rose-fall {
            transform: scale(0.72);
          }
        }
      `}</style>
    </>
  );
}
