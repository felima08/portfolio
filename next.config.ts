import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Esconde o indicador flutuante do Next.js durante `npm run dev`
  // (nunca aparece em produção de qualquer forma)
  devIndicators: false,
};

export default nextConfig;
