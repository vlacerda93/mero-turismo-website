"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCard {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

interface ExpandableCardsProps {
  cards: ExpandableCard[];
}

export function ExpandableCards({ cards }: ExpandableCardsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      <div className="flex items-center gap-4 w-full relative groupSelect-none">
        {/* Botão Esquerda */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/10 border border-white/20 text-white shrink-0 hover:bg-white/20
            ${isPrevDisabled ? "opacity-30 cursor-default hover:bg-white/10" : "cursor-pointer"}
          `}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Container dos Cards */}
        <div className="flex gap-4 flex-1 h-[400px]">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((card) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(card.imageSrc)}
                className="relative overflow-hidden rounded-2xl cursor-zoom-in flex-1 border border-slate-700/50 group bg-slate-900"
              >
                {/* Imagem de Fundo (Cover) */}
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80" />

                {/* Conteúdo de Texto */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1 leading-tight drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-slate-200 text-xs opacity-90 line-clamp-3 leading-relaxed drop-shadow-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Botão Direita */}
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/10 border border-white/20 text-white shrink-0 hover:bg-white/20
            ${isNextDisabled ? "opacity-30 cursor-default hover:bg-white/10" : "cursor-pointer"}
          `}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.img
              src={selectedImage}
              alt="Galeria ampliada"
              layoutId={selectedImage}
              className="max-w-[95vw] max-h-[95vh] rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 border-none text-white text-3xl cursor-pointer p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
