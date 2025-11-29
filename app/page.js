// --- IMPORTY --- 
import Image from "next/image";
import Link from "next/link";
import { getActiveCampaign } from "../lib/seasonalCampaigns";

// --- SERVER ACTION DO NEWSLETTERA (PROSTA WERSJA) ---
async function subscribe(formData) {
  "use server";
  console.log("Zapisano email:", formData.get("email"));
}

// --- STRONA GŁÓWNA ---
export default function Home() {
  // --- SEZONOWA KAMPANIA DLA HERO ---
  const campaign = getActiveCampaign();

  const heroBadgeText = campaign?.badgeText || "★ Nr #1 w Mielnie";
  const heroTitle =
    campaign?.heroTitle || "Morska Polana";
  const heroSubtitle =
    campaign?.heroSubtitle ||
    "Doświadcz luksusu przestrzeni. Jedyny w Mielnie prywatny kurort na 2 hektarach terenu.";
  const heroImageSrc = campaign?.heroImage || "/baltyk.webp";
  const heroCtaLabel = campaign?.ctaLabel || "Zarezerwuj Twierdzę";
  const heroCtaHref = campaign?.ctaHref || "#oferta";

  // --- PODZIAŁ TYTUŁU NA CZĘŚĆ GŁÓWNĄ I PODKREŚLONĄ (DZIAŁA TEŻ DLA INNYCH H1) ---
  const [heroFirstWord, ...heroRestWords] = heroTitle.split(" ");
  const heroTitlePrimary = heroFirstWord;
  const heroTitleHighlight = heroRestWords.join(" ");

  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* --- 0. HERO SECTION (FULL WIDTH) --- */}
      <header
        className="relative h-[620px] md:h-[680px] lg:h-[720px] overflow-hidden flex flex-col items-center justify-center text-center px-4"
        aria-labelledby="hero-heading"
        aria-describedby="hero-subtitle"
      >
        {/* --- TŁO HERO (OBRAZ) --- */}
        <Image
          src={heroImageSrc}
          alt="Morze Bałtyckie w Mielnie"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-[#0f172a]/30" aria-hidden="true" />

        {/* --- TREŚĆ HERO --- */}
        <div className="relative z-10">
          <div className="bg-yellow-500 text-[#0f172a] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-lg inline-block animate-pulse">
            {heroBadgeText}
          </div>

          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl"
          >
            {heroTitlePrimary}{" "}
            {heroTitleHighlight ? (
              <span className="text-yellow-500">{heroTitleHighlight}</span>
            ) : (
              <span className="text-yellow-500">Polana</span>
            )}
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-2xl text-white max-w-5xl mt-2 font-bold leading-relaxed drop-shadow-lg text-shadow-md mx-auto"
          >
            {heroSubtitle}
            <br className="hidden md:block" />
            <strong>Odetchnij Lasem. Poczuj Bałtyk. Wybierz Wolność.</strong>
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href={heroCtaHref}
              className="bg-yellow-500 text-[#0f172a] px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider hover:bg-yellow-600 transition shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            >
              {heroCtaLabel}
            </Link>

            <Link
              href="#dojazd"
              className="bg-black/50 text-white border-2 border-white px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider hover:bg-white/10 transition backdrop-blur-sm"
            >
              Zobacz Mapę
            </Link>
          </div>
        </div>

        {/* --- STATYSTYKI (NA DOLE HERO) --- */}
        <div className="absolute bottom-0 w-full bg-emerald-900/95 border-t border-emerald-700 py-6 flex justify-around backdrop-blur-sm text-center z-10">
          <div>
            <p className="text-xl md:text-3xl font-black text-white">
              20,000m²
            </p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200">
              Terenu
            </p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black text-white">
              KOMFORT
            </p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200">
              Wypoczynku
            </p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black text-white">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200">
              Prywatności
            </p>
          </div>
        </div>
      </header>

      {/* --- GŁÓWNY BLOK STRONY --- */}
      <div className="max-w-7xl mx-auto px-6">
        {/* --- 1. OFERTA (DOMKI) --- */}
        <section id="oferta" className="py-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase text-yellow-500 mb-4">
                Wybierz Swój Fort
              </h2>
              <p className="text-gray-300 text-lg">
                Kliknij w domek, aby zobaczyć szczegóły.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* --- KAFEL: WILLE IMPERIUM --- */}
              <Link
                href="/willa"
                className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="relative h-64">
                  <Image
                    src="/willa-imperium.webp"
                    alt="Willa Imperium"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1280px) 50vw,
                            33vw"
                  />
                  <div className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">
                    ZOBACZ WNĘTRZE →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">
                    Wille IMPERIUM (100m²)
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Prawdziwy dom. 3 sypialnie, 2 łazienki, balkon. Luksus dla
                    dwóch rodzin.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-yellow-500">
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      👥 10 Osób
                    </span>
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      ❄️ Ogrzewanie
                    </span>
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      🧱 Murowane
                    </span>
                  </div>
                </div>
              </Link>

              {/* --- KAFEL: BASTION --- */}
              <Link
                href="/bastion"
                className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="relative h-64">
                  <Image
                    src="/bastion.webp"
                    alt="Domek Bastion"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1280px) 50vw,
                            33vw"
                  />
                  <div className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">
                    ZOBACZ WNĘTRZE →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">
                    Domki BASTION (40m²)
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Murowana twierdza. Salon + sypialnia + łazienka. Cisza i
                    izolacja.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-yellow-500">
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      👥 6 Osób
                    </span>
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      ❄️ Ogrzewanie
                    </span>
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      🧱 Murowane
                    </span>
                  </div>
                </div>
              </Link>

              {/* --- KAFEL: LETNIE --- */}
              <Link
                href="/letnie"
                className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="relative h-64">
                  <Image
                    src="/letnie.webp"
                    alt="Rezydencje Letnie"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1280px) 50vw,
                            33vw"
                  />
                  <div className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">
                    ZOBACZ WNĘTRZE →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">
                    Rezydencje LETNIE
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Parterowe (bezpieczne dla dzieci). 2 sypialnie + salon.
                    Blisko placu zabaw.
                  </p>
                  <div className="flex gap-2 text-xs font-bold text-yellow-500">
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      ☀️ Parterowe
                    </span>
                    <span className="bg-[#0f172a] px-2 py-1 rounded">
                      👨‍👩‍👧‍👦 Rodzinne
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* --- 2. KALENDARZ OKAZJI --- */}
        <section
          id="okazje"
          className="py-24 px-6 bg-[#141e33] border-b border-slate-800"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase text-yellow-500 mb-4">
                Kiedy nas odwiedzisz?
              </h2>
              <p className="text-gray-300 text-lg">U nas sezon trwa cały rok.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-yellow-500 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000"
                    alt="Sylwester"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">
                    Sylwester i Boże Narodzenie
                  </h3>
                  <span className="text-xs text-yellow-500 font-bold block bg-yellow-500/10 py-2 rounded">
                    Grudzień / Styczeń
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-blue-400 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800"
                    alt="Morsy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">Morsy</h3>
                  <span className="text-xs text-blue-400 font-bold block bg-blue-400/10 py-2 rounded">
                    Styczeń - Marzec
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-pink-500 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=800"
                    alt="Walentynki"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">
                    Walentynki
                  </h3>
                  <span className="text-xs text-pink-500 font-bold block bg-pink-500/10 py-2 rounded">
                    Luty
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-green-500 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800"
                    alt="Majówka"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">Majówka</h3>
                  <span className="text-xs text-green-500 font-bold block bg-green-500/10 py-2 rounded">
                    Maj
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-green-500 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=800"
                    alt="Boże Ciało"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">
                    Boże Ciało
                  </h3>
                  <span className="text-xs text-green-500 font-bold block bg-green-500/10 py-2 rounded">
                    Czerwiec
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-orange-500 relative group hover:scale-105 transition block"
              >
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 z-10">
                  HIT
                </div>
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
                    alt="WAKACJE"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">WAKACJE</h3>
                  <span className="text-xs text-orange-500 font-bold block bg-orange-500/10 py-2 rounded">
                    Lipiec / Sierpień
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-yellow-500 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=800"
                    alt="Jesień"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">
                    Złota Jesień
                  </h3>
                  <span className="text-xs text-yellow-500 font-bold block bg-yellow-500/10 py-2 rounded">
                    Wrzesień / Październik
                  </span>
                </div>
              </Link>

              <Link
                href="/okazje"
                className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-yellow-500 group h-full hover:scale-105 transition block"
              >
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800"
                    alt="Pupil"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-white text-xl mb-2">
                    Pobyt z Pupilem
                  </h3>
                  <span className="text-xs text-yellow-500 font-bold block bg-yellow-500/10 py-2 rounded">
                    Cały Rok
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* --- 3. ATRAKCJE --- */}
        <section id="atrakcje" className="py-24 border-b border-slate-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black uppercase text-yellow-500 mb-12 text-center">
              Teren i Okolica
            </h2>

            <div className="grid md:grid-cols-3 gap-12 justify-items-center">
              <div className="w-full max-w-xs">
                <h3 className="text-xl text-cyan-400 font-bold mb-6 border-b border-cyan-400 inline-block">
                  ✈️ Woda i Powietrze
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">
                    Loty widokowe nad Mielnem
                  </h4>
                  <p className="text-sm text-gray-400">
                    Zobacz wybrzeże z lotu ptaka.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">
                    Aquapark Koszalin
                  </h4>
                  <p className="text-sm text-gray-400">
                    15 min autem. Zjeżdżalnie i sauny.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-xs">
                <h3 className="text-xl text-cyan-400 font-bold mb-6 border-b border-cyan-400 inline-block">
                  🏐 Sport i Zabawa
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">
                    Boisko do Siatkówki
                  </h4>
                  <p className="text-sm text-gray-400">
                    Profesjonalne boisko na piasku.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">
                    Dmuchaniec Gigant
                  </h4>
                  <p className="text-sm text-gray-400">8x3 metry radości.</p>
                </div>
              </div>

              <div className="w-full max-w-xs">
                <h3 className="text-xl text-cyan-400 font-bold mb-6 border-b border-cyan-400 inline-block">
                  🌲 Las i Historia
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">Velo Baltica</h4>
                  <p className="text-sm text-gray-400">
                    Trasa R10 pod bramą.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-lg">Grodzisko</h4>
                  <p className="text-sm text-gray-400">
                    Idź przez las obok Grodziska.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. STREFA SMAKU --- */}
        <section
          id="smak"
          className="py-24 bg-[#141e33] border-b border-slate-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-yellow-500 text-4xl font-black uppercase mb-6">
              Strefa Smaku
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g635880-d8385202-Reviews-La_Palma_Mielno-Mielno_Western_Pomerania_Province_Western_Poland.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition border border-slate-700 cursor-pointer"
              >
                <div className="text-4xl">🍕</div>
                <div className="text-left">
                  <h3 className="font-bold text-yellow-500">La Palma</h3>
                  <p className="text-sm text-gray-400">Nasza rekomendacja.</p>
                </div>
              </a>
              <a
                href="https://www.tripadvisor.com/Restaurants-g635880-Mielno_Western_Pomerania_Province_Western_Poland.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition border border-slate-700 cursor-pointer"
              >
                <div className="text-4xl">🍽️</div>
                <div className="text-left">
                  <h3 className="font-bold text-yellow-500">Pozostałe</h3>
                  <p className="text-sm text-gray-400">
                    Ranking TripAdvisor.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* --- 5. ZWIERZĘTA --- */}
        <section id="zwierzeta" className="py-24 border-b border-slate-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800"
                alt="Pies na plaży"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="flex-1 text-left">
              <h2 className="mb-6 text-4xl font-black uppercase text-yellow-500">
                Noclegi z Psem i Kotem
              </h2>

              <p className="text-xl font-light mb-4 text-white">
                Większość hoteli toleruje psy. <strong>My je kochamy.</strong>
              </p>

              <p className="text-lg text-gray-300 leading-relaxed italic mb-4">
                „To nie jest literówka: masz{" "}
                <strong>20&nbsp;000&nbsp;m² wybiegu</strong>. Bliskość lasu i
                dzikich plaż to raj dla czworonoga. Akceptujemy każdego – od
                małego Yorka po dużego Labradora, a także{" "}
                <strong>koty</strong> chodzące własnymi ścieżkami.”
              </p>

              <p className="mb-3 text-gray-300">
                Teren jest ogrodzony, a alejki i łąki pozwalają wybiegać się
                pupilowi bez konieczności wychodzenia poza ośrodek.
              </p>

              <p className="text-yellow-500 font-bold text-sm">
                *Pamiętaj o kulturze i sprzątaniu po swoim pupilu.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/zwierzeta"
              className="inline-block bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded hover:bg-yellow-400 transition"
            >
              Więcej o wakacjach z pupilem
            </Link>
          </div>
        </section>

        {/* --- 6. DOJAZD --- */}
        <section id="dojazd" className="py-24 bg-[#141e33]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black uppercase text-yellow-500 mb-12 text-center">
              Dojazd i Mapa
            </h2>

            {/* --- GŁÓWNY GRID: LEWO + PRAWO --- */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              {/* --- LEWA KOLUMNA: CZASY DOJAZDU + TRANSPORT --- */}
              <div className="flex flex-col">
                <div className="flex-grow-0">
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Trasy dojazdu samochodem
                  </h3>

                  <ul
                    className="space-y-4 text-gray-300"
                    aria-label="Przybliżony czas dojazdu"
                  >
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Koszalin</strong>
                      <span className="text-yellow-500 font-bold">
                        ok. 15 min
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Szczecin (S6)</strong>
                      <span>ok. 1 h 45 min</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Gdańsk</strong>
                      <span>ok. 2 h 15 min</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Poznań (S11)</strong>
                      <span>ok. 3 h 30 min</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Wrocław (A4)</strong>
                      <span>ok. 4 h 15 min</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Śląsk (Katowice)</strong>
                      <span>ok. 5 h 30 min</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-700 pb-3">
                      <strong className="text-white">Warszawa</strong>
                      <span>ok. 6 h</span>
                    </li>
                  </ul>
                </div>

                {/* --- TRANSPORT PUBLICZNY --- */}
                <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-700 flex-grow flex flex-col">
                  <h4 className="font-bold text-yellow-500 mb-4">
                    🚆 Transport publiczny
                  </h4>

                  <div className="space-y-4 flex-grow">
                    <div className="pb-4 border-b border-slate-700">
                      <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                        🚂 Kolejka wąskotorowa
                      </h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Kursuje w sezonie letnim (czerwiec – sierpień) z
                        Koszalina do Mielna.
                      </p>
                      <a
                        href="https://koleo.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-bold transition"
                      >
                        Sprawdź rozkład na Koleo →
                      </a>
                    </div>

                    <div className="flex-grow">
                      <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                        🚌 Busy i autobusy
                      </h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Kursują cały rok z Koszalina do Mielna, co 30–60 minut.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://www.pks.koszalin.pl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-bold transition"
                        >
                          PKS Koszalin →
                        </a>
                        <a
                          href="https://arriva.pl/pomorze"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-bold transition"
                        >
                          Arriva Pomorze →
                        </a>
                        <a
                          href="https://zdiz.koszalin.pl/komunikacja-miejska/rozklady-jazdy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-bold transition"
                        >
                          ZDiZ Koszalin →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- PRAWA KOLUMNA: MAPA + QR --- */}
              <div className="flex flex-col gap-6 h-full">
                <div className="w-full h-[320px] md:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2971.428472227397!2d16.06177308520643!3d54.25293009659703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1764192910586!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa dojazdu do Morskiej Polany w Mielnie"
                    className="rounded-2xl"
                  />
                </div>

                <div className="p-6 bg-slate-800 rounded-lg border border-slate-700 flex flex-col justify-center h-full">
                  <h4 className="font-bold text-yellow-500 mb-3">
                    📍 Adres do nawigacji
                  </h4>
                  <p className="text-white mb-2 text-lg">
                    ul. Wisławy Szymborskiej 5
                  </p>
                  <p className="text-white mb-4 text-lg">76-032 Mielno</p>

                  <div className="flex justify-center mt-2">
                    <img
                      src="/api/qr"
                      alt="Kod QR z linkiem do nawigacji do Morskiej Polany"
                      width={140}
                      height={140}
                      className="inline-block"
                    />
                  </div>
                  <p className="text-xs font-bold mt-3 text-gray-400 text-center">
                    Zeskanuj, aby otworzyć trasę w mapach
                  </p>
                </div>
              </div>
            </div>

            {/* --- DODATKOWE KAFELKI INFO --- */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-2xl mb-3">🛣️</div>
                <h4 className="font-bold text-yellow-500 mb-2">Autostrady</h4>
                <p className="text-gray-300 text-sm">
                  S6, S11, A4 – wygodny dojazd z większości regionów Polski.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-2xl mb-3">🅿️</div>
                <h4 className="font-bold text-yellow-500 mb-2">
                  Bezpłatny parking
                </h4>
                <p className="text-gray-300 text-sm">
                  Duży, bezpłatny parking na terenie obiektu (niestrzeżony).
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-2xl mb-3">🚍</div>
                <h4 className="font-bold text-yellow-500 mb-2">
                  Transport publiczny
                </h4>
                <p className="text-gray-300 text-sm">
                  Busy i kolejka wąskotorowa z Koszalina w stronę Mielna.
                </p>
              </div>
            </div>

            {/* --- PORADY DOJAZDOWE --- */}
            <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h4 className="font-bold text-yellow-500 text-lg mb-3">
                💡 Porady dojazdowe
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <strong className="text-white">Ze Śląska:</strong> A4 → S3 →
                  S6 → zjazd Mielno
                </div>
                <div>
                  <strong className="text-white">Z Wrocławia:</strong> A4 → S3 →
                  S6 → zjazd Mielno
                </div>
                <div>
                  <strong className="text-white">Z Warszawy:</strong> S7 → S10 →
                  S6 → zjazd Mielno
                </div>
                <div>
                  <strong className="text-white">Z Poznania:</strong> S11 → S10
                  → S6 → zjazd Mielno
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-yellow-500/30">
                <h5 className="font-bold text-yellow-500 mb-2">
                  🚌 Z Koszalina do Mielna
                </h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <strong className="text-white">Busy:</strong> ok. 25 minut,
                    kursują co 30–60 min.
                  </div>
                  <div>
                    <strong className="text-white">
                      Kolejka wąskotorowa:
                    </strong>{" "}
                    ok. 45 minut, tylko w sezonie.
                  </div>
                </div>
              </div>
            </div>

            {/* --- INFO O PARKINGU --- */}
            <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h4 className="font-bold text-yellow-500 mb-3">
                ℹ️ Informacja o parkingu
              </h4>
              <p className="text-gray-300 text-sm">
                Parking na terenie Morskiej Polany jest{" "}
                <strong className="text-white">
                  bezpłatny i niestrzeżony
                </strong>
                . Prosimy o zachowanie ostrożności i niepozostawianie
                wartościowych przedmiotów w widocznym miejscu w samochodzie.
              </p>
            </div>
          </div>
        </section>

        {/* --- 7. OPINIE --- */}
        <section className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-black uppercase text-yellow-500 mb-4">
              Oni już wybrali wolność
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-700 relative shadow-xl">
                <div className="text-yellow-500 mb-4">★★★★★</div>
                <p className="text-gray-300 italic mb-6">
                  "W końcu miejsce w Mielnie, gdzie nie słychać imprez za
                  ścianą. Willa Imperium to sztos!"
                </p>
                <div className="font-bold text-white">— Tomasz z Poznania</div>
              </div>
              <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-700 relative shadow-xl">
                <div className="text-yellow-500 mb-4">★★★★★</div>
                <p className="text-gray-300 italic mb-6">
                  "Najlepsze miejsce dla psiarzy! Teren jest ogromny, pies był w
                  raju."
                </p>
                <div className="font-bold text-white">— Kasia i Marek</div>
              </div>
              <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-700 relative shadow-xl">
                <div className="text-yellow-500 mb-4">★★★★★</div>
                <p className="text-gray-300 italic mb-6">
                  "Super kontakt z właścicielem, wszystko jasne i konkretne."
                </p>
                <div className="font-bold text-white">
                  — Rodzina Kowalskich
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- 8. STOPKA Z NEWSLETTEREM --- */}
      <footer
        id="kontakt"
        className="bg-black py-16 text-center border-t border-slate-800"
      >
        {/* --- NEWSLETTER --- */}
        <div className="bg-yellow-500 text-slate-900 p-8 rounded-xl max-w-md mx-auto mb-16 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
          <h3 className="text-2xl font-black mb-2">NEWSLETTER</h3>
          <p className="mb-4 font-bold opacity-80">
            Zostaw maila, otrzymasz zniżkę.
          </p>

          <form action={subscribe} className="flex gap-2 justify-center mb-4">
            <label htmlFor="newsletter-email" className="sr-only">
              Adres e-mail do newslettera
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Twój email"
              required
              autoComplete="email"
              className="p-3 rounded w-full font-sans bg-white text-black border-0"
            />
            <button
              type="submit"
              className="bg-slate-900 text-white font-bold px-6 py-3 rounded hover:bg-slate-700 transition uppercase"
            >
              Zapisz
            </button>
          </form>

          <div className="text-xs flex items-center justify-center gap-2 font-bold opacity-70">
            <input
              id="newsletter-rodo"
              type="checkbox"
              required
              className="accent-slate-900 h-4 w-4"
            />
            <label htmlFor="newsletter-rodo">Akceptuję RODO</label>
          </div>
        </div>

        {/* --- LOGO SŁOWNE + ADRES --- */}
        <div className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
          Morska <span className="text-yellow-500">Polana</span>
        </div>

        <div className="text-lg mb-2 text-gray-400">
          ul. Wisławy Szymborskiej 5, 76-032 Mielno
        </div>

        {/* --- GŁÓWNY KONTAKT --- */}
        <div className="text-2xl font-bold text-yellow-500 mb-8 flex justify-center gap-4 items-center flex-wrap">
          <a href="tel:607607058" className="hover:text-white transition">
            📞 607 607 058
          </a>
          <span className="text-slate-700 hidden md:inline">|</span>
          <a
            href="mailto:morskapolana@wp.pl"
            className="hover:text-white transition"
          >
            ✉️ morskapolana@wp.pl
          </a>
        </div>

        {/* --- BOKSY INFO --- */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-8 text-left px-6 md:px-0">
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
            <h4 className="font-bold text-yellow-500 mb-3">
              Godziny kontaktu
            </h4>
            <p className="text-gray-300 text-sm">
              Poniedziałek – Piątek: 8:00 – 20:00
            </p>
            <p className="text-gray-300 text-sm">Weekend: 9:00 – 18:00</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
            <h4 className="font-bold text-yellow-500 mb-3">
              Szybki kontakt
            </h4>
            <p className="text-gray-300 text-sm">
              Odpowiadamy na wiadomości w ciągu ~2 godzin (w godzinach pracy).
            </p>
            <p className="text-gray-300 text-sm">
              Sprawy pilne: najlepiej dzwoń 📞 607 607 058.
            </p>
          </div>
        </div>

        {/* --- STOPKA PRAWNA --- */}
        <p className="text-gray-400 text-sm">
          &copy; 2025 Morska Polana. Realizacja: Next.js Architecture
        </p>
      </footer>
    </main>
  );
}
