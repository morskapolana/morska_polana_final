// --- IMPORTY ---
import Link from "next/link";
import Image from "next/image";

// --- METADATA ---
export const metadata = {
  title: "Rezydencje LETNIE — parterowe, 2 sypialnie | Morska Polana",
  description:
    "Domki letnie parterowe — bez schodów, idealne dla rodzin z dziećmi. Dwie sypialnie, zadaszony taras, pełna kuchnia, ogród. Mielno • Morska Polana.",
  alternates: { canonical: "https://morskapolana.pl/letnie" },
  openGraph: {
    title: "Rezydencje LETNIE — parterowe, 2 sypialnie | Morska Polana",
    description:
      "Bezpieczne dla dzieci (parter), dwie niezależne sypialnie i zadaszony taras. Komfortowy wypoczynek nad Bałtykiem.",
    url: "https://morskapolana.pl/letnie",
    type: "website",
    images: ["/letnie.webp"], // dopasowane do nazwy z landing page
  },
};

// --- PAGE COMPONENT ---
export default function LetniePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans pt-32 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* --- POWRÓT DO OFERTY --- */}
        <Link
          href="/#oferta"
          className="text-yellow-500 font-bold mb-8 inline-block hover:underline"
          aria-label="Wróć do wyboru domków"
        >
          ← Wróć do wyboru domków
        </Link>

        {/* --- NAGŁÓWEK --- */}
        <h1 className="text-5xl font-black uppercase text-white mb-2">
          Rezydencje LETNIE
        </h1>
        <p className="text-yellow-500 text-2xl mb-6">
          Parterowe =&nbsp;bezpieczne dla dzieci
        </p>

        {/* --- GŁÓWNE ZDJĘCIE --- */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
          <Image
            src="/letnie.webp" // plik w /public
            alt="Rezydencja letnia w Morskiej Polanie"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            className="object-cover"
          />
        </div>

        {/* --- UKŁAD 2 KOLUMN --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* --- OPIS DOMKU --- */}
          <section aria-labelledby="opis-letnie">
            <h2
              id="opis-letnie"
              className="text-2xl font-bold text-yellow-500 mb-4"
            >
              Opis domu
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Najlepszy wybór dla rodzin z małymi dziećmi —{" "}
              <strong>bez schodów</strong>. Wszystko na jednym poziomie, bez
              noszenia wózków i bezpilnowania małych odkrywców na piętrze.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Dwie niezależne sypialnie</strong> i{" "}
              <strong>zadaszony taras</strong> sprawiają, że odpoczniesz nawet
              podczas letniego deszczu. Wieczorem można spokojnie usiąść z
              herbatą, gdy dzieci już śpią.
            </p>
          </section>

          {/* --- BOKS: WYPOSAŻENIE + CTA --- */}
          <aside
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 h-fit"
            aria-label="Wyposażenie domków letnich"
          >
            <h3 className="text-xl font-bold text-white mb-6">Wyposażenie</h3>
            <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">🍳 Pełna kuchnia</li>
              <li className="flex items-center gap-2">🚿 Łazienka</li>
              <li className="flex items-center gap-2">❄️ Lodówka</li>
              <li className="flex items-center gap-2">🔥 Grill</li>
              <li className="flex items-center gap-2">📺 TV</li>
              <li className="flex items-center gap-2">🛏️ 2 sypialnie</li>
              <li className="flex items-center gap-2">
                👶 Parter (bez schodów)
              </li>
              <li className="flex items-center gap-2">☂️ Zadaszony taras</li>
            </ul>

            <Link
              href="/kontakt"
              className="block w-full mt-8 bg-yellow-500 text-slate-900 font-bold py-3 rounded hover:bg-yellow-400 transition text-center uppercase"
            >
              Zarezerwuj termin
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
