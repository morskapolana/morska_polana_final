{/* --- KOMPONENT STRONY: ZWIERZĘTA --- */}
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Wakacje z psem i kotem | Morska Polana",
  description:
    "Morska Polana w Mielnie — 2 hektary terenu, las, dzikie plaże. Idealne miejsce na wakacje z psem lub kotem.",
  alternates: { canonical: "https://morskapolana.pl/zwierzeta" },
  openGraph: {
    title: "Wakacje z pupilem nad morzem | Morska Polana",
    description:
      "Akceptujemy psy i koty. Dużo przestrzeni, las i mniej zaludnione odcinki plaży. Twój pupil będzie zachwycony.",
    url: "https://morskapolana.pl/zwierzeta",
    type: "website",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200",
    ],
  },
};

{/* --- STRONA ZWIERZĘTA --- */}
export default function ZwierzetaPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans pt-32 pb-16 px-6 selection:bg-yellow-500 selection:text-black">
      <div className="max-w-5xl mx-auto">
        {/* --- LINK POWROTNY --- */}
        <Link
          href="/#zwierzeta"
          className="text-yellow-500 font-bold mb-8 inline-block hover:underline"
        >
          ← Wróć na stronę główną
        </Link>

        {/* --- NAGŁÓWEK STRONY --- */}
        <h1 className="text-4xl md:text-6xl font-black uppercase text-center mb-6">
          Wakacje z <span className="text-yellow-500">pupilem</span>
        </h1>

        {/* --- BLOK INTRO --- */}
        <div className="text-center mb-12 max-w-3xl mx-auto bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
          <p className="text-xl font-light mb-4 text-white">
            Większość hoteli toleruje psy. <strong>My je kochamy.</strong>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed italic">
            „To nie jest literówka: masz{" "}
            <strong>20&nbsp;000&nbsp;m² wybiegu</strong>. Bliskość lasu i dzikich
            plaż to raj dla czworonoga. Akceptujemy każdego – od małego Yorka
            po dużego Labradora, a także <strong>koty</strong> chodzące własnymi
            ścieżkami.”
          </p>
        </div>

        {/* --- ZDJĘCIE HERO --- */}
        <div className="relative h-80 md:h-96 w-full mb-12 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200"
            alt="Szczęśliwy pies na plaży nad Bałtykiem"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4 md:p-6">
            <p className="text-sm md:text-base text-white font-bold">
              🐶 Twój przyjaciel też zasługuje na wakacje nad morzem.
            </p>
          </div>
        </div>

        {/* --- DWIE KOLUMNY: DLACZEGO / ZASADY --- */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* --- LEWA: DLACZEGO PIES POKOCHA TO MIEJSCE --- */}
          <section
            aria-labelledby="dlaczego-pies"
            className="bg-slate-800 p-8 rounded-2xl border-t-4 border-yellow-500 h-full"
          >
            <h2
              id="dlaczego-pies"
              className="text-2xl font-bold text-white mb-4"
            >
              Dlaczego pies pokocha Morską Polanę?
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <span className="text-2xl" aria-hidden="true">
                  🌳
                </span>
                <span>
                  <strong>Przestrzeń:</strong> 2 hektary łąki i zieleni. Twój
                  pies ma gdzie węszyć, a Ty nie musisz wychodzić „za płot” na
                  szybki spacer.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-2xl" aria-hidden="true">
                  🌲
                </span>
                <span>
                  <strong>Las i cień:</strong> Sąsiadujemy z lasem, gdzie panuje
                  chłód i cisza – idealne miejsce dla zwierząt, które nie lubią
                  zgiełku.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-2xl" aria-hidden="true">
                  🌊
                </span>
                <span>
                  <strong>Dzikie plaże:</strong> Spacerem przez las dojdziesz do
                  mniej zaludnionych odcinków plaży, gdzie pies może swobodniej
                  pobiegać.
                </span>
              </li>
            </ul>
          </section>

          {/* --- PRAWA: ZASADY + CTA --- */}
          <section className="space-y-8 h-full">
            <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-lg font-bold text-yellow-500 mb-2 uppercase">
                Zasady pobytu ze zwierzętami
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Prosimy o sprzątanie po swoich pupilach.</li>
                <li>
                  Na terenie wspólnym (plac zabaw, strefa dzieci) prosimy mieć
                  psa pod kontrolą.
                </li>
                <li>
                  Akceptujemy wszystkie rasy – psy o charakterze obronnym /
                  stróżującym powinny mieć kaganiec i smycz w przestrzeni
                  wspólnej.
                </li>
                <li>Koty są jak najbardziej mile widziane.</li>
              </ul>
            </div>

            <p className="text-sm text-gray-400">
              Jeśli Twój pupil ma szczególne potrzeby (np. lęk przed
              burzami/hałasem), daj nam znać – doradzimy, które domki są
              najspokojniejsze.
            </p>

            <Link
              href="/kontakt"
              className="block bg-yellow-500 text-slate-900 font-black text-center py-4 rounded-xl hover:bg-white transition uppercase tracking-widest shadow-lg"
            >
              Zarezerwuj pobyt z pupilem
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
