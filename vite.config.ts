import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  includeAssets: ["favicon.ico"],
  manifest: {
    name: "CyberDude Updates",
    short_name: "CDUpdates",
    description: "Track CyberDude Updates.",
    theme_color: "#ffffff",
    icons: [
      {
        src: "pwa-192x192.png", // <== don't add slash, for testing
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-512x512.png", // <== don't remove slash, for testing
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png", // <== don't add slash, for testing
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaOptions),
    AutoImport({
      /* options */
      dts: "./src/types/auto-imports.d.ts", // or a custom path
    }),
    Icons({
      /* options */
      compiler: "jsx", // or 'solid'
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
      types: path.resolve(__dirname, "./src/types"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
    },
  },
  server: {
    host: true,
  },
});
