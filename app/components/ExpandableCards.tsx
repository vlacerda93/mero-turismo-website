"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ExpandableCard {
  id: number;
  content: React.ReactNode;
}

interface ExpandableCardsProps {
  cards: ExpandableCard[];
  defaultExpanded?: number;
}

export function ExpandableCards({
  cards,
  defaultExpanded = 1,
}: ExpandableCardsProps) {
  const [expandedId, setExpandedId] = useState<number>(defaultExpanded);

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        width: "100%",
      }}
    >
      {cards.map((card) => {
        const isExpanded = expandedId === card.id;

        return (
          <motion.div
            key={card.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 16,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#020617",
              border: "1px solid rgba(148,163,184,0.5)",
            }}
            onMouseEnter={() => setExpandedId(card.id)}
            animate={{ flex: isExpanded ? 3 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top, rgba(15,23,42,0.3), transparent 55%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
            />
            <div style={{ position: "relative", padding: 12 }}>
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>  
  );
}
