// --- IMPORTS ---
import Link from "next/link";
import Image from "next/image";


// --- METADATA ---
export const metadata = {
  title: "Willa Imperium — 100 m² dla 10 osób | Morska Polana",
  description:
    "Willa Imperium: 3 sypialnie, 2 łazienki, ogrzewanie, balkon i prywatny taras. Idealna dla dwóch rodzin — 100 m² komfortu w Mielnie.",
  alternates: { canonical: "https://morskapolana.pl/willa" },
  openGraph: {
    title: "Willa Imperium — 100 m² dla 10 osób | Morska Polana",
    description:
      "Przestronna willa z trzema sypialniami, dwiema łazienkami i ogrzewaniem. Dwa tarasy, salon z kominkiem, kuchnia jak w domu.",
    url: "https://morskapolana.pl/willa",
    type: "website",
    images: ["/willa-imperium.webp"],
  },
};

// --- PAGE COMPONENT ---
export default function WillaPage() {
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

        {/* --- TYTUŁ I PODTYTUŁ --- */}
        <h1 className="text-5xl font-black uppercase text-white mb-2">
          Willa Imperium
        </h1>
        <p className="text-yellow-500 text-2xl mb-6">
          100 m² komfortu dla 10 osób
        </p>

        {/* --- GŁÓWNE ZDJĘCIE --- */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
          <Image
            src="/willa-imperium.webp"
            alt="Willa Imperium – przestronny salon"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            className="object-cover"
          />
        </div>

        {/* --- TREŚĆ / UKŁAD 2 KOLUMN --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* --- OPIS WILLI --- */}
          <section aria-labelledby="opis-willi">
            <h2
              id="opis-willi"
              className="text-2xl font-bold text-yellow-500 mb-4"
            >
              Opis domu
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dwie rodziny w jednym domu bez ścisku? 100 m² swobody, dwie
              łazienki i trzy zamykane sypialnie zapewniają komfort odpoczynku,
              nawet gdy dzieci wrócą z plaży pełne energii.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Poranna kawa: do wyboru balkon na piętrze albo prywatny taras na
              parterze. Wieczorem grill, a gdy pogoda się popsuje – salon
              przygotowany jak w domu: duży stół, wygodna kanapa i w pełni
              wyposażona kuchnia.
            </p>
          </section>

          {/* --- BOKS: WYPOSAŻENIE + CTA --- */}
          <aside className="bg-slate-800 p-8 rounded-xl border border-slate-700 h-fit">
            <h3 className="text-xl font-bold text-white mb-6">Wyposażenie</h3>
            <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">🍳 Kuchnia Full</li>
              <li className="flex items-center gap-2">🚿 2 łazienki</li>
              <li className="flex items-center gap-2">❄️ Lodówka XXL</li>
              <li className="flex items-center gap-2">🔥 Prywatny grill</li>
              <li className="flex items-center gap-2">📺 TV</li>
              <li className="flex items-center gap-2">🛌 3 sypialnie</li>
              <li className="flex items-center gap-2">🌡️ Ogrzewanie</li>
              <li className="flex items-center gap-2">🌳 Dwa tarasy</li>
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
