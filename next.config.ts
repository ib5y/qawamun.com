import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,        // stänger av bygg-indikatorn
    appIsrStatus: false,         // stänger av ISR-statusindikator
  },
};

export default nextConfig;
