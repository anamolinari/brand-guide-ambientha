"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

type Color = "black" | "white";
type Format = "svg" | "png";

const logos = [
  {
    id: "vert",
    label: "Vertical",
    fileName: "vertical",
    black: { svg: "/black/full-vert-b.svg", png: "/black/full-vert-b.png" },
    white: { svg: "/white/full-vert-w.svg", png: "/white/full-vert-w.png" },
  },
  {
    id: "hor",
    label: "Horizontal",
    fileName: "horizontal",
    black: { svg: "/black/full-hor-b.svg", png: "/black/full-hor-b.png" },
    white: { svg: "/white/full-hor-w.svg", png: "/white/full-hor-w.png" },
  },
  {
    id: "ret",
    label: "Retração",
    fileName: "reduzido",
    black: { svg: "/black/logo-ret-b.svg", png: "/black/logo-ret-b.png" },
    white: { svg: "/white/logo-ret-w.svg", png: "/white/logo-ret-w.png" },
  },
  {
    id: "stamp",
    label: "Stamp",
    fileName: "selo",
    black: { svg: "/black/logo-stamp-b.svg", png: "/black/logo-stamp-b.png" },
    white: { svg: "/white/logo-stamp-w.svg", png: "/white/logo-stamp-w.png" },
  },
];

export default function Home() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [color, setColor] = useState<Color>("black");
  const [format, setFormat] = useState<Format>("svg");

  const brandColors = [
    { hex: "#3B3D37" },
    { hex: "#57554C" },
    { hex: "#BFB7A3" },
    { hex: "#D9D5C7" },
    { hex: "#DFDCD0" },
  ];

  const complementaryColors = [
    { hex: "#1D3C36" },
    { hex: "#946761" },
    { hex: "#4E648B" },
    { hex: "#BBCDB9" },
    { hex: "#EDCBB2" },
    { hex: "#C6AA73" },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const handleDownload = (src: string, fileName: string) => {
  const corPt = color === "black" ? "preto" : "branco";
  const link = document.createElement("a");
  link.href = src;
  link.download = `ambientha-logo-${fileName}-${corPt}.${format}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="mb-12 text-base md:text-lg text-slate-600">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
          Manual da Marca
        </h1>
        <p>
          Diretrizes visuais da Ambientha. Use este guia para garantir
          consistência em todas as peças e materiais produzidos.
        </p>
      </div>

      {/* Cores da Marca */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
          Cores da Marca
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-4">
          Estas são as cores primárias da Ambientha, presentes em todas as peças
          de comunicação.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {brandColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleCopyColor(color.hex)}
              className="text-left cursor-pointer group"
            >
              <div
                className="aspect-square rounded-lg mb-3 transition-transform group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-[10px] md:text-xs text-[#57554C] font-mono ml-1 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                {copiedHex === color.hex ? "Copiado!" : color.hex}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Cores Complementares */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
          Cores Complementares
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-4">
          As demais cores funcionam como complemento, aparecendo com menos
          frequência, mas sempre em harmonia com as principais.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
          {complementaryColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleCopyColor(color.hex)}
              className="text-left cursor-pointer group"
            >
              <div
                className="aspect-square rounded-lg mb-3 transition-transform group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-[10px] md:text-xs text-[#57554C] font-mono ml-1 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                {copiedHex === color.hex ? "Copiado!" : color.hex}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Uso do Logo */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
          Uso do Logo
        </h2>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">Cor</span>
            {(["black", "white"] as Color[]).map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all cursor-pointer ${
                  color === c
                    ? "bg-slate-800 text-white border-slate-800"
                    : "text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                {c === "black" ? "Preto" : "Branco"}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:ml-4">
            <span className="text-sm text-slate-500">Formato</span>
            {(["svg", "png"] as Format[]).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all cursor-pointer ${
                  format === f
                    ? "bg-slate-800 text-white border-slate-800"
                    : "text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logos.map((logo) => {
            const src =
              color === "black" ? logo.black[format] : logo.white[format];
            return (
              <button
                key={logo.id}
                onClick={() => handleDownload(src, logo.fileName)}
                className={`rounded-xl p-8 cursor-pointer transition-all hover:scale-[1.02] ${
                  color === "black"
                    ? "bg-white border border-slate-200"
                    : "bg-black"
                }`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "160px",
                }}
              >
                <Image
                  src={src}
                  alt={logo.label}
                  width={240}
                  height={0}
                  style={{
                    height: "80px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
          <p className="text-amber-800 text-sm font-medium">
            ⚠️ Nunca distorça, rotacione ou altere as cores do logo fora das
            variações aprovadas.
          </p>
        </div>
      </section>

      {/* Tipografia */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
          Tipografia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <p
              className="text-4xl text-slate-800 mb-2"
              style={{ fontFamily: geistSans.style.fontFamily }}
            >
              Geist Sans
            </p>
            <p className="text-slate-500 text-sm mb-6">Títulos e destaques</p>
            <div
              className="space-y-2 text-slate-700"
              style={{ fontFamily: geistSans.style.fontFamily }}
            >
              <p className="font-light">Light — Aa Bb Cc</p>
              <p className="font-normal">Regular — Aa Bb Cc</p>
              <p className="font-medium">Medium — Aa Bb Cc</p>
              <p className="font-semibold">SemiBold — Aa Bb Cc</p>
              <p className="font-bold">Bold — Aa Bb Cc</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <p
              className="text-4xl text-slate-800 mb-2"
              style={{ fontFamily: geistMono.style.fontFamily }}
            >
              Geist Mono
            </p>
            <p className="text-slate-500 text-sm mb-6">Corpo de texto e UI</p>
            <div
              className="space-y-2 text-slate-700"
              style={{ fontFamily: geistMono.style.fontFamily }}
            >
              <p className="font-light">Light — Aa Bb Cc</p>
              <p className="font-normal">Regular — Aa Bb Cc</p>
              <p className="font-medium">Medium — Aa Bb Cc</p>
              <p className="font-semibold">SemiBold — Aa Bb Cc</p>
              <p className="font-bold">Bold — Aa Bb Cc</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 pt-8 border-t border-slate-200">
  <p className="text-slate-600 text-sm leading-relaxed">
    Cuidar de cada detalhe faz parte de quem somos. Obrigada por levar isso adiante com a gente. Qualquer dúvida, estamos por aqui.
  </p>
  
</section>
    </main>
  );
}
