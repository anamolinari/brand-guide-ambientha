"use client";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-slate-200/60 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 md:p-10">
        {/* Logo e título */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Ambientha"
              width={36}
              height={44}
              className="w-7 h-auto md:w-9"
            />
          </Link>

          <div>
            <h1 className="font-sans text-lg md:text-2xl font-semibold text-slate-800">
              Brand Guide
            </h1>
            <p className="text-xs md:text-sm text-slate-500">
              Ambientha · Fornecedores & Parceiros
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
