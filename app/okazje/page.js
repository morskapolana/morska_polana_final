// --- IMPORTY ---
import Image from "next/image";
import Link from "next/link";

// --- METADATA ---
export const metadata = {
  title: "Specjalne okazje i pakiety — Morska Polana",
  description:
    "Sylwester, morsowanie, Walentynki, Boże Narodzenie, Majówka i Wakacje nad Bałtykiem. Zobacz specjalne pakiety w Morskiej Polanie w Mielnie.",
  alternates: { canonical: "https://morskapolana.pl/okazje" },
  openGraph: {
    title: "Specjalne okazje — Morska Polana",
    description:
      "Wyjątkowe pakiety: Sylwester, morsowanie, Walentynki, Boże Narodzenie, Majówka i Wakacje. Rezerwuj z wyprzedzeniem i zyskaj najlepsze ceny.",
    url: "https://morskapolana.pl/okazje",
    type: "website",
  },
};

// --- DANE OKAZJI ---
const promotions = [
  {
    id: 1,
    title: "Sylwester nad Bałtykiem",
    period: "Grudzień / Styczeń",
    price: "od 1.200 zł/noc",
    description:
      "Zakończ stary rok i rozpocznij nowy w magicznej atmosferze nad morzem. Ognisko, szampan i niezapomniana zabawa.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000",
    features: [
      "Ognisko sylwestrowe",
      "Szampan dla gości",
      "Animacje dla dzieci",
      "Pokaz fajerwerków",
    ],
    borderColor: "border-yellow-500",
  },
  {
    id: 2,
    title: "Morsowanie Zimą",
    period: "Styczeń - Marzec",
    price: "od 800 zł/noc",
    description:
      "Dla miłośników zimnych kąpieli. Specjalne warunki dla morsów - sauna i gorąca czekolada w pakiecie.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000",
    features: [
      "Dostęp do sauny",
      "Gorąca czekolada",
      "Ręczniki termiczne",
      "Instruktor morsowania",
    ],
    borderColor: "border-blue-400",
  },
  {
    id: 3,
    title: "Romantyczne Walentynki",
    period: "Luty",
    price: "od 950 zł/noc",
    description:
      "Weekend we dwoje z romantyczną kolacją przy kominku i masażami dla par.",
    image:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1000",
    features: [
      "Romantyczna kolacja",
      "Masaż dla par",
      "Kominek",
      "Czekoladki i wino",
    ],
    borderColor: "border-pink-500",
  },
  {
    id: 4,
    title: "Boże Narodzenie nad Morzem",
    period: "Grudzień",
    price: "od 1.400 zł/noc",
    description:
      "Magiczne Święta w nadmorskiej scenerii. Przytulna atmosfera, choinka i świąteczne dekoracje.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000",
    features: [
      "Przystrojony domek",
      "Świąteczna kolacja",
      "Kominek",
      "Prezenty pod choinką",
    ],
    borderColor: "border-red-500",
  },
  {
    id: 5,
    title: "Majówka nad Morzem",
    period: "Maj",
    price: "od 1.100 zł/noc",
    description:
      "Długi weekend majowy to idealny czas na pierwszy wiosenny wypad nad Bałtyk.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
    features: [
      "Grill ogrodowy",
      "Rowery do wypożyczenia",
      "Ognisko",
      "Kosz śniadaniowy",
    ],
    borderColor: "border-green-500",
  },
  {
    id: 6,
    title: "Wakacje - Lato 2025",
    period: "Lipiec / Sierpień",
    price: "od 1.500 zł/noc",
    description:
      "Letni hit! Pełen komfort w szczycie sezonu. Basen, leżaki i codzienne atrakcje dla dzieci.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
    features: [
      "Dostęp do basenu",
      "Animacje dla dzieci",
      "Leżaki i parasole",
      "Bezpłatny parking",
    ],
    borderColor: "border-orange-500",
    popular: true,
  },
];

// --- PAGE COMPONENT ---
export default function OkazjePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-32">
      {/* --- NAGŁÓWEK --- */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 to-[#0f172a] border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">
            <span className="text-white">Specjalne</span>{" "}
            <span className="text-yellow-500">Okazje</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Odkryj nasze wyjątkowe pakiety i promocje sezonowe.
            <span className="block mt-2 text-yellow-500 font-bold">
              Rezerwuj z wyprzedzeniem i zyskaj najlepsze ceny!
            </span>
          </p>
        </div>
      </section>

      {/* --- GŁÓWNA ZAWARTOŚĆ --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* --- FILTRY (NA RAZIE STATYCZNE) --- */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="bg-yellow-500 text-[#0f172a] px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
              Wszystkie
            </button>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition border border-slate-700">
              Zima
            </button>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition border border-slate-700">
              Wiosna
            </button>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition border border-slate-700">
              Lato
            </button>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition border border-slate-700">
              Jesień
            </button>
          </div>

          {/* --- KARTY OKAZJI --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className={`bg-slate-800 rounded-2xl overflow-hidden border-t-4 ${
                  promo.borderColor
                } hover:scale-105 transition duration-300 group relative`}
              >
                {promo.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    HIT
                  </div>
                )}

                {/* --- ZDJĘCIE --- */}
                <div className="relative h-48">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>

                {/* --- TREŚĆ KARTY --- */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition">
                      {promo.title}
                    </h3>
                    <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                      {promo.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {promo.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-2xl font-black text-yellow-500">
                      {promo.price}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {promo.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      href="/#oferta"
                      className="flex-1 bg-yellow-500 text-[#0f172a] text-center py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
                    >
                      Rezerwuj
                    </Link>
                    <button className="flex-1 bg-slate-700 text-white py-3 rounded-lg font-bold hover:bg-slate-600 transition border border-slate-600">
                      Szczegóły
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEKCJA CTA --- */}
      <section className="py-16 px-6 bg-[#141e33] border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-yellow-500 mb-6">
            Masz Pytania?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych
            terminach i szczegółach ofert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:607607058"
              className="bg-yellow-500 text-[#0f172a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
            >
              📞 Zadzwoń: 607 607 058
            </a>
            <a
              href="mailto:morskapolana@wp.pl"
              className="bg-slate-800 text-white border-2 border-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition"
            >
              ✉️ Napisz Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
