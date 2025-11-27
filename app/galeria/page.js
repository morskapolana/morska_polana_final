// app/galeria/page.js

import Image from "next/image";

// --- METADATA ---
export const metadata = {
  title: "Galeria — Morska Polana",
  description: "Zdjęcia domków i terenu Morskiej Polany.",
};

// --- STRONA GALERII ---
export default function GaleriaPage() {
  return (
    <div className="min-h-screen pt-28 px-6 bg-[#0f172a] text-white">
      {/* --- HEADER --- */}
      <h1 className="text-4xl font-black text-yellow-500 mb-8">
        Galeria Morskiej Polany
      </h1>

      {/* --- SIATKA ZDJĘĆ (WRZUĆ SWOJE) --- */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700">
          <Image
            src="/willa-imperium.webp"
            alt="Willa Imperium"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700">
          <Image
            src="/bastion.webp"
            alt="Domek Bastion"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700">
          <Image
            src="/letnie.webp"
            alt="Rezydencje Letnie"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
