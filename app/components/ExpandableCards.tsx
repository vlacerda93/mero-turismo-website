"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCard {
  id: number;
  imageSrc: string; // Agora sabemos a imagem para o lightbox
  content: React.ReactNode;
}

interface ExpandableCardsProps {
  cards: ExpandableCard[];
  defaultExpanded?: number;
}

export function ExpandableCards({
  cards,
}: ExpandableCardsProps) {
  // Estado para controlar o lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Estado para carrossel
  const [startIndex, setStartIndex] = useState(0);

  const ITEMS_PER_VIEW = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, cards.length - ITEMS_PER_VIEW)
    );
  };

  const visibleCards = cards.slice(startIndex, startIndex + ITEMS_PER_VIEW);
  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + ITEMS_PER_VIEW >= cards.length;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Botão Esquerda */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          style={{
            background: isPrevDisabled ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: isPrevDisabled ? "default" : "pointer",
            color: isPrevDisabled ? "rgba(255,255,255,0.3)" : "white",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Container dos Cards */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flex: 1,
            height: "400px",
          }}
        >
          {visibleCards.map((card) => {
            return (
              <motion.div
                key={card.id}
                layout
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 16,
                  cursor: "zoom-in", // Indica que vai expandir
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#020617",
                  border: "1px solid rgba(148,163,184,0.5)",
                }}
                onClick={() => setSelectedImage(card.imageSrc)} // Abre o lightbox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, flex: 1 }} // Removemos o flex expansível em lista
                transition={{ duration: 0.4 }}
              >
                <div
                  style={{
                    position: "relative",
                    padding: 12,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {card.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botão Direita */}
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          style={{
            background: isNextDisabled ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: isNextDisabled ? "default" : "pointer",
            color: isNextDisabled ? "rgba(255,255,255,0.3)" : "white",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* LIGHTBOX (MODAL) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Clica fora fecha
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999, // Fica na frente de tudo
              background: "rgba(0,0,0,0.9)",
              display: "flex", // Centraliza
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backdropFilter: "blur(5px)",
            }}
          >
            <motion.img
              src={selectedImage}
              alt="Galeria ampliada"
              layoutId={selectedImage}
              style={{
                maxWidth: "95vw",
                maxHeight: "95vh",
                borderRadius: "12px",
                objectFit: "contain",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Clica na foto não faz nada (ou mantém aberto)
            />

            {/* Botão de fechar opcional (mas o clique fora já funciona) */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                lineHeight: 1,
              }}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
