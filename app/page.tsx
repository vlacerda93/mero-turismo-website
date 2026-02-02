"use client";

import React, { useEffect, useState } from "react";
import { ExpandableCards } from "./components/ExpandableCards";
import { translations, Language } from "./translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("pt");

  const t = translations[lang];

  const heroImages = [
    "/merofotos/agua-cristalina.jpg",
    "/merofotos/praia-paradisiaca.jpg",
    "/merofotos/snorkel-peixes.jpg",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const cards = [
    {
      id: 1,
      imageSrc: "/merofotos/barco-mero-1.jpg",
      title: t.gallery_1_title,
      description: t.gallery_1_desc,
    },
    {
      id: 2,
      imageSrc: "/merofotos/merofora2.jpg",
      title: t.gallery_2_title,
      description: t.gallery_2_desc,
    },
    {
      id: 3,
      imageSrc: "/merofotos/merofora21.png",
      title: t.gallery_3_title,
      description: t.gallery_3_desc,
    },
    {
      id: 4,
      imageSrc: "/merofotos/familia1.jpg",
      title: t.gallery_4_title,
      description: t.gallery_4_desc,
    },
    {
      id: 5,
      imageSrc: "/merofotos/ancorado.jpg",
      title: t.gallery_5_title,
      description: t.gallery_5_desc,
    },
    {
      id: 6,
      imageSrc: "/merofotos/agua-cristalina.jpg",
      title: t.gallery_6_title,
      description: t.gallery_6_desc,
    },
    {
      id: 7,
      imageSrc: "/merofotos/angra15.jpg",
      title: t.gallery_7_title,
      description: t.gallery_7_desc,
    },
    {
      id: 8,
      imageSrc: "/merofotos/merovistadrone.png",
      title: t.gallery_8_title,
      description: t.gallery_8_desc,
    },
    {
      id: 9,
      imageSrc: "/merofotos/angra14.jpg",
      title: t.gallery_9_title,
      description: t.gallery_9_desc,
    },
    {
      id: 10,
      imageSrc: "/merofotos/mero12.jpeg",
      title: t.gallery_10_title,
      description: t.gallery_10_desc,
    },
    {
      id: 11,
      imageSrc: "/merofotos/foraedit.png",
      title: t.gallery_11_title,
      description: t.gallery_11_desc,
    },
    {
      id: 12,
      imageSrc: "/merofotos/equipe.jpg",
      title: t.gallery_12_title,
      description: t.gallery_12_desc,
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* TOPO */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid rgba(15,23,42,0.9)",
          background: "linear-gradient(to right, #0f172a, #0b1120)",
        }}
      >
        <div className="max-w-[1120px] mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/merofotos/logoMeroveto.png"
              alt="Agência de Turismo MERO"
              style={{
                height: 180,
                width: "auto",
                filter: "drop-shadow(0 0 6px rgba(0,0,0,0.45))",
              }}
            />
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-5"
          >
            <nav className="flex flex-wrap items-center justify-center gap-4 text-[0.9rem] opacity-90">
              <a href="#sobre" style={{ textDecoration: "none", color: "white" }}>
                {t.nav_about}
              </a>
              <a
                href="#passeio"
                style={{ textDecoration: "none", color: "white" }}
              >
                {t.nav_tours}
              </a>
              <a
                href="#galeria"
                style={{ textDecoration: "none", color: "white" }}
              >
                {t.nav_gallery}
              </a>
              <a
                href="#contato"
                style={{ textDecoration: "none", color: "white" }}
              >
                {t.nav_contact}
              </a>
            </nav>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.8rem",
              }}
            >
              <button
                type="button"
                onClick={() => setLang("pt")}
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: lang === "pt" ? "1px solid rgba(148,163,184,0.8)" : "1px solid rgba(148,163,184,0.5)",
                  backgroundColor: lang === "pt" ? "white" : "transparent",
                  color: lang === "pt" ? "#0f172a" : "white",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: lang === "en" ? "1px solid rgba(148,163,184,0.8)" : "1px solid rgba(148,163,184,0.5)",
                  backgroundColor: lang === "en" ? "white" : "transparent",
                  color: lang === "en" ? "#0f172a" : "white",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="sobre"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(56,189,248,0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(30,64,175,0.5), #020617 65%)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center max-w-[1120px] mx-auto px-4 pt-10 pb-14"
        >
          <div>
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#38bdf8",
                marginBottom: "10px",
              }}
            >
              {t.hero_pretitle}
            </p>

            <h1
              style={{
                fontSize: "2.6rem", // Poderíamos reduzir em mobile, mas vamos focar no layout primeiro
                lineHeight: 1.1,
                marginBottom: "14px",
              }}
            >
              {t.hero_title}
            </h1>

            <p
              style={{
                fontSize: "0.98rem",
                opacity: 0.9,
                maxWidth: "620px",
                marginBottom: "14px",
              }}
            >
              {t.hero_desc1}
            </p>
            <p
              style={{
                fontSize: "0.96rem",
                opacity: 0.88,
                maxWidth: "620px",
                marginBottom: "22px",
              }}
            >
              {t.hero_desc2}
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#passeio"
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, rgb(56,189,248), rgb(129,140,248))",
                  color: "#0f172a",
                  cursor: "pointer",
                  boxShadow: "0 8px 18px rgba(56,189,248,0.35)",
                  textDecoration: "none",
                }}
              >
                {t.hero_cta_primary}
              </a>

              <a
                href="#contato"
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  border: "1px solid rgba(148,163,184,0.7)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background: "rgba(15,23,42,0.9)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {t.hero_cta_secondary}
              </a>
            </div>
          </div>

          {/* imagem com slide */}
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              backgroundColor: "black",
            }}
          >
            <img
              src={heroImages[heroIndex]}
              alt="Praias e ilhas de Angra dos Reis vistas do passeio"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                display: "block",
                transition: "opacity 0.8s ease-in-out",
              }}
            />
          </div>
        </div>
      </section>

      {/* CARD ÚNICO DO PASSEIO */}
      <section
        id="passeio"
        style={{
          background: "#020617",
          borderTop: "1px solid rgba(15,23,42,0.9)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "32px 16px 40px",
          }}
        >
          <div className="card-boia">
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">
              <div>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "6px",
                  }}
                >
                  {t.tour_title}
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    opacity: 0.9,
                    maxWidth: "520px",
                    marginBottom: "12px",
                  }}
                >
                  {t.tour_desc}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "10px 18px",
                    fontSize: "0.85rem",
                    marginTop: "8px",
                  }}
                >
                  <div>
                    <div style={{ opacity: 0.7 }}>{t.tour_duration_label}</div>
                    <div>{t.tour_duration_value}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>{t.tour_departure_label}</div>
                    <div>{t.tour_departure_value}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>{t.tour_type_label}</div>
                    <div>{t.tour_type_value}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>{t.tour_places_label}</div>
                    <div>{t.tour_places_value}</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "16px",
                  fontSize: "0.9rem",
                }}
              >
                <div>
                  <h3 style={{ marginBottom: "8px" }}>{t.included_title}</h3>
                  <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                    {t.included_list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <h3 style={{ marginTop: "14px", marginBottom: "8px" }}>
                    {t.not_included_title}
                  </h3>
                  <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                    {t.not_included_list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>{t.info_title}</h3>
                    <p style={{ marginBottom: "8px", fontSize: "0.86rem" }}>
                      {t.info_text}
                    </p>
                  </div>

                  <div>
                    <a
                      href="https://wa.me/552493256372?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Passeio%20Panor%C3%A2mico%20pela%20Costa."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "9px 18px",
                        borderRadius: "999px",
                        border: "none",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        background:
                          "linear-gradient(135deg, rgb(56,189,248), rgb(129,140,248))",
                        color: "#0f172a",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                      }}
                    >
                      {t.whatsapp_button}
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  gridColumn: "1 / -1",
                  marginTop: "14px",
                  paddingTop: "10px",
                  borderTop: "1px solid rgba(148,163,184,0.3)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  fontSize: "0.82rem",
                  opacity: 0.9,
                }}
              >
                <p style={{ maxWidth: "520px" }}>
                  {t.groups_info}
                </p>


              </div>
            </div>
          </div>
        </div>
      </section>



      {/* GALERIA */}
      <section
        id="galeria"
        style={{ background: "#020617", padding: "40px 16px 48px" }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 8 }}>
            {t.gallery_title}
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.85,
              marginBottom: 20,
              maxWidth: 520,
            }}
          >
            {t.gallery_subtitle}
          </p>

          <ExpandableCards cards={cards} />
        </div>
      </section>

      {/* SOBRE AGÊNCIA EM BOIA */}
      <section
        id="sobre-agencia"
        style={{
          background: "#020617",
          borderTop: "1px solid rgba(15,23,42,0.9)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "40px 16px 40px",
          }}
        >
          <div className="card-boia">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                gap: 24,
                fontSize: "0.9rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: 12,
                  }}
                >
                  Sobre a Agência de Turismo MERO
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.9,
                    marginBottom: 14,
                    lineHeight: 1.6,
                  }}
                >
                  A Agência de Turismo MERO é especializada em passeios náuticos e
                  experiências inesquecíveis no mar, com foco no Passeio
                  Panorâmico pela Costa em Angra dos Reis.
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.9,
                    marginBottom: 14,
                    lineHeight: 1.6,
                  }}
                >
                  Nosso objetivo é oferecer conforto, segurança e atendimento
                  personalizado, para que cada grupo aproveite o dia no mar com
                  tranquilidade, boas fotos e lembranças marcantes.
                </p>
              </div>

              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <h4 style={{ fontWeight: 600, color: "#38bdf8" }}>
                    Segurança em primeiro lugar
                  </h4>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                    Embarcação com equipamentos de segurança e tripulação preparada
                    para conduzir o passeio com responsabilidade.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: "#38bdf8" }}>
                    Tripulação experiente
                  </h4>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                    Profissionais que conhecem bem a região, as melhores paradas e
                    os pontos mais indicados para fotos e banho.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: "#38bdf8" }}>
                    Experiência personalizada
                  </h4>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                    Possibilidade de ajustar detalhes do passeio conforme a
                    necessidade do grupo, de acordo com a disponibilidade do dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        style={{
          background: "#020617",
          borderTop: "1px solid rgba(15,23,42,0.9)",
          padding: "40px 16px 56px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div
            style={{
              padding: "32px",
              borderRadius: 24,
              border: "1px solid rgba(148,163,184,0.15)",
              background: "linear-gradient(to bottom right, #0f172a, #020617)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", marginBottom: 12 }}>
              {t.nav_contact}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                opacity: 0.9,
                maxWidth: 600,
                margin: "0 auto 24px",
              }}
            >
              Fale com a equipe da Agência de Turismo MERO para tirar dúvidas,
              consultar datas disponíveis e receber uma proposta para o seu grupo.
            </p>

            <a
              href="https://wa.me/552493256372?text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Mero!"
              target="_blank"
              rel="noopener noreferrer"
              className="blink-btn"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 600,
                background: "#22c55e",
                color: "white",
                textDecoration: "none",
                boxShadow: "0 0 16px rgba(34,197,94,0.4)",
              }}
            >
              {t.whatsapp_button}
            </a>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                justifyContent: "center",
                gap: 32,
                flexWrap: "wrap",
                opacity: 0.8,
                fontSize: "0.9rem",
              }}
            >
              <a
                href="https://github.com/vlacerda93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                title="Desenvolvido por Vinicius Lacerda"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 3.5 5 3.5c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 10.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>vlacerda93</span>
              </a>

              <a
                href="https://www.instagram.com/mero_turismo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E1306C] transition-colors"
                title="Siga a MERO no Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@mero_turismo</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
