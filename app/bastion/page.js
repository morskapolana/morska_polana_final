// --- IMPORTY ---
import Link from "next/link";
import Image from "next/image";

// --- METADATA ---
export const metadata = {
  title: "Domki BASTION — 40 m² murowanej solidności | Morska Polana",
  description:
    "Bastion: murowany domek 40 m² z sypialnią, salonem z aneksem i łazienką. Cicho, ciepło i solidnie — idealny dla rodziny 2+2 lub 4 dorosłych.",
  alternates: { canonical: "https://morskapolana.pl/bastion" },
  openGraph: {
    title: "Domki BASTION — 40 m² murowanej solidności | Morska Polana",
    description:
      "Pełna izolacja, komfort cały rok: sypialnia + salon z aneksem, łazienka, taras z meblami i własny grill.",
    url: "https://morskapolana.pl/bastion",
    type: "website",
    images: ["/bastion.webp"], // upewnij się, że plik jest w /public
  },
};

// --- PAGE COMPONENT ---
export default function BastionPage() {
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
          Domki BASTION
        </h1>
        <p className="text-yellow-500 text-2xl mb-6">
          40&nbsp;m² murowanej solidności
        </p>

        {/* --- GŁÓWNE ZDJĘCIE --- */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
          <Image
            src="/bastion.webp" // plik w /public
            alt="Domek BASTION — murowany, komfortowy, z tarasem"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            className="object-cover"
          />
        </div>

        {/* --- UKŁAD 2 KOLUMN --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* --- OPIS DOMKU --- */}
          <section aria-labelledby="opis-bastionu">
            <h2
              id="opis-bastionu"
              className="text-2xl font-bold text-yellow-500 mb-4"
            >
              Opis domu
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Bastion to Twój prywatny azyl. Murowana konstrukcja zapewnia
              przyjemny chłód latem i komfortowe ciepło w chłodniejsze dni.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pełna izolacja akustyczna. Układ: sypialnia, salon z aneksem,
              łazienka. Idealny wybór, jeśli szukasz spokoju i solidnych ścian,
              a nie cienkich domków &quot;na sezon&quot;.
            </p>
          </section>

          {/* --- BOKS: WYPOSAŻENIE + CTA --- */}
          <aside
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 h-fit"
            aria-label="Wyposażenie domku Bastion"
          >
            <h3 className="text-xl font-bold text-white mb-6">Wyposażenie</h3>
            <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span aria-hidden="true">🍳</span> Aneks kuchenny
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">🚿</span> Łazienka
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">❄️</span> Lodówka
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">🔥</span> Własny grill
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📺</span> TV LED
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">🛏️</span> Sypialnia + salon
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">🌡️</span> Grzejniki
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">🌳</span> Taras z meblami
              </li>
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
