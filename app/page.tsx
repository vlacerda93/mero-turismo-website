"use client";

import React, { useEffect, useState } from "react";
import { ExpandableCards } from "./components/ExpandableCards";

export default function Home() {
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
      content: (
        <div>
          <img
            src="/merofotos/barco-mero-1.jpg"
            alt="Barco Mero navegando"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Barco Mero em navegação
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Navegação tranquila pela costa de Angra dos Reis.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <img
            src="/merofotos/merofora2.jpg"
            alt="Barco Mero ancorado no píer"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Embarque no cais de Angra dos Reis
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Ponto de partida do passeio panorâmico.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <img
            src="/merofotos/merofora21.png"
            alt="Grupo de pessoas a bordo"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Atracando curtindo o passeio
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Momentos descontraídos durante as paradas.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div>
          <img
            src="/merofotos/familia1.jpg"
            alt="Grupo de pessoas a bordo"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Grupos e famílias a bordo
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Passeio ideal para famílias e grupos de amigos.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div>
          <img
            src="/merofotos/ancorado.jpg"
            alt="Barco Mero ancorado no píer de Angra dos Reis"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Parada para almoço
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Intervalo em pontos parceiros na região.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div>
          <img
            src="/merofotos/agua-cristalina.jpg"
            alt="Água cristalina com peixes"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Água cristalina
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Pontos perfeitos para banho e snorkel.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      content: (
        <div>
          <img
            src="/merofotos/angra15.jpg"
            alt="Vista aérea de enseada em Angra dos Reis"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Enseadas e ilhas do roteiro
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Paisagens típicas da Costa Verde.
          </p>
        </div>
      ),
    },
    {
      id: 8,
      content: (
        <div>
          <img
            src="/merofotos/merovistadrone.png"
            alt="Praia vista a partir do barco"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Chegada às praias pelo Barco Mero
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Acesso às praias por mar, com vista privilegiada.
          </p>
        </div>
      ),
    },
    {
      id: 9,
      content: (
        <div>
          <img
            src="/merofotos/angra14.jpg"
            alt="Praia com quiosques e barcos ancorados"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Paisagens da região
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Cenários clássicos de Angra dos Reis.
          </p>
        </div>
      ),
    },
    {
      id: 10,
      content: (
        <div>
          <img
            src="/merofotos/mero12.jpeg"
            alt="Barco Mero em águas verdes de Angra dos Reis"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Barco Mero em águas verdes
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Navegação em mar calmo e transparente.
          </p>
        </div>
      ),
    },
    {
      id: 11,
      content: (
        <div>
          <img
            src="/merofotos/foraedit.png"
            alt="Barco Mero com peixes ao fundo"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Visual panorâmico
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Registro do barco com o mar cristalino ao redor.
          </p>
        </div>
      ),
    },
    {
      id: 12,
      content: (
        <div>
          <img
            src="/merofotos/equipe.jpg"
            alt="Equipe a bordo do Barco Mero"
            style={{ width: "100%", borderRadius: 12, marginBottom: 8 }}
          />
          <h3 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
            Profissionais do barco
          </h3>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Tripulação preparada para receber o seu grupo.
          </p>
        </div>
      ),
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
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
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
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: "0.9rem",
                opacity: 0.9,
              }}
            >
              <a href="#sobre" style={{ textDecoration: "none", color: "white" }}>
                Sobre
              </a>
              <a
                href="#passeio"
                style={{ textDecoration: "none", color: "white" }}
              >
                Passeio
              </a>
              <a
                href="#galeria"
                style={{ textDecoration: "none", color: "white" }}
              >
                Galeria
              </a>
              <a
                href="#contato"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contato
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
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.8)",
                  backgroundColor: "white",
                  color: "#0f172a",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                PT
              </button>
              <button
                type="button"
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.5)",
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: 500,
                  cursor: "pointer",
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
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "40px 16px 56px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
            gap: "32px",
            alignItems: "center",
          }}
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
              Passeio panorâmico em Angra dos Reis
            </p>

            <h1
              style={{
                fontSize: "2.6rem",
                lineHeight: 1.1,
                marginBottom: "14px",
              }}
            >
              Explore as ilhas de Angra
              <br /> com conforto e segurança.
            </h1>

            <p
              style={{
                fontSize: "0.98rem",
                opacity: 0.9,
                maxWidth: "620px",
                marginBottom: "14px",
              }}
            >
              Angra dos Reis é um paraíso da Costa Verde do Rio de Janeiro, com
              mais de 360 ilhas e centenas de praias de águas verdes e
              cristalinas, muitas acessíveis apenas de barco.
            </p>
            <p
              style={{
                fontSize: "0.96rem",
                opacity: 0.88,
                maxWidth: "620px",
                marginBottom: "22px",
              }}
            >
              No passeio panorâmico da Escuna Mero você navega por enseadas
              protegidas, faz paradas estratégicas para banho de mar e mergulho
              com peixes e aproveita paisagens que lembram as melhores regiões
              do Caribe brasileiro, sempre com uma equipe preparada a bordo.
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
                Conheça o passeio panorâmico
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
                Falar com a equipe MERO
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                gap: "24px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "6px",
                  }}
                >
                  Passeio panorâmico em Angra dos Reis
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    opacity: 0.9,
                    maxWidth: "520px",
                    marginBottom: "12px",
                  }}
                >
                  Saída do Rio de Janeiro com transporte rodoviário, embarcação
                  autorizada, paradas para banho em ilhas de água cristalina e
                  tempo livre para aproveitar as paisagens de Angra dos Reis.
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
                    <div style={{ opacity: 0.7 }}>Duração</div>
                    <div>1 dia inteiro</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>Saída</div>
                    <div>Rio de Janeiro – madrugada</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>Tipo de passeio</div>
                    <div>Panorâmico, com paradas para banho</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.7 }}>Locais visitados</div>
                    <div>Ilhas e enseadas da baía de Angra</div>
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
                  <h3 style={{ marginBottom: "8px" }}>Incluído no passeio</h3>
                  <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                    <li>Embarcação com tripulação experiente.</li>
                    <li>Combustível para todo o trajeto.</li>
                    <li>Equipamentos de segurança a bordo.</li>
                  </ul>

                  <h3 style={{ marginTop: "14px", marginBottom: "8px" }}>
                    Não incluído
                  </h3>
                  <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                    <li>Alimentação.</li>
                    <li>Bebidas alcoólicas.</li>
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
                    <h3 style={{ marginBottom: "8px" }}>Informações e reservas</h3>
                    <p style={{ marginBottom: "8px", fontSize: "0.86rem" }}>
                      Valores, datas e condições podem variar conforme a época do
                      ano e a disponibilidade da embarcação. Fale com a equipe
                      MERO para receber uma proposta para o seu grupo.
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
                      Falar no WhatsApp
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
                  Para grupos grandes ou eventos especiais, consulte condições
                  diferenciadas e opções de personalização do roteiro.
                </p>

                <a
                  href="#contato"
                  style={{
                    padding: "9px 18px",
                    borderRadius: "999px",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    background:
                      "linear-gradient(135deg, rgb(56,189,248), rgb(129,140,248))",
                    color: "#0f172a",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Tenho interesse nesse passeio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETALHES */}
      <section
        id="detalhes-passeio"
        style={{
          background: "#020617",
          borderTop: "1px solid rgba(15,23,42,0.9)",
          padding: "0 16px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >
          <div className="card-boia">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "24px",
                fontSize: "0.9rem",
              }}
            >
              <div>
                <h3 style={{ marginBottom: "8px" }}>Incluído no passeio</h3>
                <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                  <li>Embarcação com tripulação experiente.</li>
                  <li>Combustível para todo o trajeto.</li>
                  <li>Equipamentos de segurança a bordo.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ marginBottom: "8px" }}>Não incluído</h3>
                <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                  <li>Alimentação.</li>
                  <li>Bebidas alcoólicas.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ marginBottom: "8px" }}>Informações e reservas</h3>
                <p style={{ marginBottom: "12px" }}>
                  Valores sob consulta. Fale com a equipe MERO para receber uma
                  proposta para o seu grupo.
                </p>
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
                  Falar no WhatsApp
                </a>
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
            Galeria de Momentos MERO
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.85,
              marginBottom: 20,
              maxWidth: 520,
            }}
          >
            Veja alguns registros dos passeios panorâmicos em Angra dos Reis.
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
                  A Agência de Turismo MERO oferece passeios panorâmicos pela
                  costa de Angra dos Reis, com foco em segurança, conforto e uma
                  experiência inesquecível para grupos.
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Nossa equipe atua com embarcações autorizadas e tripulação
                  experiente, garantindo que cada saída aconteça dentro das
                  normas e com todo o suporte necessário a bordo.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                  fontSize: "0.9rem",
                  opacity: 0.95,
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>
                    Segurança em primeiro lugar
                  </h3>
                  <p>
                    Embarcações equipadas com coletes, itens de segurança e
                    documentação em dia para navegação.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>
                    Tripulação experiente
                  </h3>
                  <p>
                    Profissionais que conhecem bem a região e auxiliam o grupo
                    durante todo o passeio.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>
                    Experiência personalizada
                  </h3>
                  <p>
                    Roteiros ajustados conforme as condições de mar e o perfil
                    do grupo, sempre priorizando a segurança.
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
                gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
                gap: 24,
                fontSize: "0.9rem",
                opacity: 0.95,
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: 10,
                  }}
                >
                  Entre em contato com a MERO
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.9,
                    marginBottom: 18,
                    maxWidth: 640,
                  }}
                >
                  Fale com a nossa equipe para tirar dúvidas, verificar datas
                  disponíveis e solicitar uma proposta para o seu grupo.
                </p>

                <h3 style={{ fontSize: "1rem", marginBottom: 6 }}>
                  Canais de atendimento
                </h3>
                <p style={{ marginBottom: 6 }}>
                  Instagram:&nbsp;
                  <a
                    href="https://www.instagram.com/mero_turismo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#38bdf8", textDecoration: "none" }}
                  >
                    @mero_turismo
                  </a>
                </p>
                <p style={{ marginBottom: 6 }}>
                  Horário de atendimento: 09h às 18h (horário de Brasília), em
                  dias úteis.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1rem", marginBottom: 6 }}>
                  Reserve seu passeio
                </h3>
                <p style={{ marginBottom: 10 }}>
                  Envie uma mensagem no WhatsApp informando o tamanho do grupo e
                  a data desejada para receber um retorno da equipe MERO.
                </p>
                <a
                  href="https://wa.me/552493256372?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Passeio%20Panor%C3%A2mico%20pela%20Costa."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "9px 18px",
                    borderRadius: 999,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    background:
                      "linear-gradient(135deg, rgb(56,189,248), rgb(129,140,248))",
                    color: "#0f172a",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Falar com a equipe MERO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#020617",
          borderTop: "1px solid rgba(15,23,42,0.9)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "16px",
            fontSize: "0.8rem",
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          © 2026 Agência de Turismo MERO. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
