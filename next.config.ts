import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Gera arquivos HTML/CSS/JS estáticos na pasta 'out'
  images: {
    unoptimized: true, // Necessário para exportação estática se usar next/image (mesmo que use img tag, é bom prevenir)
  },
};

export default nextConfig;
