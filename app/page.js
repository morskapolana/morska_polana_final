import Image from "next/image";
import Link from "next/link";

// Server Action do newslettera (prosta wersja)
async function subscribe(formData) {
  'use server';
  console.log('Zapisano email:', formData.get('email'));
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-yellow-500 selection:text-black">

      {/* --- HERO SECTION --- */}
      <header className="relative h-[620px] md:h-[680px] lg:h-[720px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* TŁO: Upewnij się, że masz plik baltyk.webp w folderze public */}
        <Image
          src="/baltyk.webp"
          alt="Morze Bałtyckie w Mielnie"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-[#0f172a]/30" aria-hidden="true" />
        
        <div className="relative z-10">
          <div className="bg-yellow-500 text-[#0f172a] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-lg inline-block animate-pulse">
            ★ Nr #1 w Mielnie
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
            Morska <span className="text-yellow-500">Polana</span>
          </h1>

          <p className="text-lg md:text-2xl text-white max-w-5xl mt-2 font-bold leading-relaxed drop-shadow-lg text-shadow-md mx-auto">
            Doświadcz luksusu przestrzeni. Jedyny w Mielnie prywatny kurort na 2 hektarach terenu.<br className="hidden md:block"/>
            <strong>Odetchnij Lasem. Poczuj Bałtyk. Wybierz Wolność.</strong>
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="#oferta" 
              className="bg-yellow-500 text-[#0f172a] px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider hover:bg-yellow-600 transition shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            >
              Zarezerwuj Twierdzę
            </Link>

            <Link 
              href="#dojazd" 
              className="bg-black/50 text-white border-2 border-white px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider hover:bg-white/10 transition backdrop-blur-sm"
            >
              Zobacz Mapę
            </Link>
          </div>
        </div>

        {/* STATYSTYKI - ZIELONE */}
        <div className="absolute bottom-0 w-full bg-emerald-900/95 border-t border-emerald-700 py-6 flex justify-around backdrop-blur-sm text-center z-10">
          <div>
            <p className="text-xl md:text-3xl font-black text-white">20,000m²</p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200">Terenu</p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black text-white">KOMFORT</p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200">Wypoczynku</p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black text-white">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200">Prywatności</p>
          </div>
        </div>
      </header>

      {/* --- 1. OFERTA (DOMKI) --- */}
      <section id="oferta" className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-yellow-500 mb-4">Wybierz Swój Fort</h2>
            <p className="text-gray-300 text-lg">Kliknij w domek, aby zobaczyć szczegóły.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/willa" className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="relative h-64">
                {/* Pamiętaj o pliku willa.webp w folderze public */}
                <Image
                  src="/willa-imperium.webp" 
                  alt="Willa Imperium"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">ZOBACZ WNĘTRZE →</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">Wille IMPERIUM (100m²)</h3>
                <p className="text-gray-400 text-sm mb-4">Prawdziwy dom. 3 sypialnie, 2 łazienki, balkon. Luksus dla dwóch rodzin.</p>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-yellow-500">
                  <span className="bg-[#0f172a] px-2 py-1 rounded">👥 10 Osób</span>
                  <span className="bg-[#0f172a] px-2 py-1 rounded">❄️ Ogrzewanie</span>
                  <span className="bg-[#0f172a] px-2 py-1 rounded">🧱 Murowane</span>
                </div>
              </div>
            </Link>

            <Link href="/bastion" className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="/bastion.webp"
                  alt="Domek Bastion"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">ZOBACZ WNĘTRZE →</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">Domki BASTION (40m²)</h3>
                <p className="text-gray-400 text-sm mb-4">Murowana twierdza. Salon + sypialnia + łazienka. Cisza i izolacja.</p>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-yellow-500">
                  <span className="bg-[#0f172a] px-2 py-1 rounded">👥 6 Osób</span>
                  <span className="bg-[#0f172a] px-2 py-1 rounded">❄️ Ogrzewanie</span>
                  <span className="bg-[#0f172a] px-2 py-1 rounded">🧱 Murowane</span>
                </div>
              </div>
            </Link>

            <Link href="/letnie" className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="/letnie.webp"
                  alt="Rezydencje Letnie"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">ZOBACZ WNĘTRZE →</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-500 transition">Rezydencje LETNIE</h3>
                <p className="text-gray-400 text-sm mb-4">Parterowe (bezpieczne dla dzieci). 2 sypialnie + salon. Blisko placu zabaw.</p>
                <div className="flex gap-2 text-xs font-bold text-yellow-500">
                  <span className="bg-[#0f172a] px-2 py-1 rounded">☀️ Parterowe</span>
                  <span className="bg-[#0f172a] px-2 py-1 rounded">👨‍👩‍👧‍👦 Rodzinne</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. KALENDARZ OKAZJI --- */}
      <section id="okazje" className="py-24 px-6 bg-[#141e33] border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-yellow-500 mb-4">Kiedy nas odwiedzisz?</h2>
            <p className="text-gray-300 text-lg">U nas sezon trwa cały rok.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-yellow-500 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000" alt="Sylwester" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Sylwester i Boże Narodzenie</h3>
                <span className="text-xs text-yellow-500 font-bold block bg-yellow-500/10 py-2 rounded">Grudzień / Styczeń</span>
              </div>
            </Link>

            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-blue-400 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800" alt="Morsy" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Morsy</h3>
                <span className="text-xs text-blue-400 font-bold block bg-blue-400/10 py-2 rounded">Styczeń - Marzec</span>
              </div>
            </Link>

            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-pink-500 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                 <Image src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=800" alt="Walentynki" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Walentynki</h3>
                <span className="text-xs text-pink-500 font-bold block bg-pink-500/10 py-2 rounded">Luty</span>
              </div>
            </Link>

            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-green-500 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800" alt="Majówka" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Majówka</h3>
                <span className="text-xs text-green-500 font-bold block bg-green-500/10 py-2 rounded">Maj</span>
              </div>
            </Link>

            {/* Kolejne okazje... (Boże Ciało, Lato, Jesień, Pupil) */}
            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-green-500 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800" alt="Boże Ciało" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Boże Ciało</h3>
                <span className="text-xs text-green-500 font-bold block bg-green-500/10 py-2 rounded">Czerwiec</span>
              </div>
            </Link>

            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-orange-500 relative group hover:scale-105 transition block">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 z-10">HIT</div>
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" alt="WAKACJE" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">WAKACJE</h3>
                <span className="text-xs text-orange-500 font-bold block bg-orange-500/10 py-2 rounded">Lipiec / Sierpień</span>
              </div>
            </Link>

            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-yellow-500 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=800" alt="Jesień" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Złota Jesień</h3>
                <span className="text-xs text-yellow-500 font-bold block bg-yellow-500/10 py-2 rounded">Wrzesień / Październik</span>
              </div>
            </Link>

            <Link href="/okazje" className="bg-slate-800 rounded-lg overflow-hidden border-t-4 border-yellow-500 group h-full hover:scale-105 transition block">
              <div className="relative h-48">
                <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800" alt="Pupil" fill className="object-cover"/>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-white text-xl mb-2">Pobyt z Pupilem</h3>
                <span className="text-xs text-yellow-500 font-bold block bg-yellow-500/10 py-2 rounded">Cały Rok</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 3. ATRAKCJE --- */}
      <section id="atrakcje" className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-yellow-500 mb-12 text-center">Teren i Okolica</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
               <h3 className="text-xl text-cyan-400 font-bold mb-6 border-b border-cyan-400 inline-block">✈️ Woda i Powietrze</h3>
               <div className="mb-6">
                 <h4 className="font-bold text-white text-lg">Loty widokowe nad Mielnem</h4>
                 <p className="text-sm text-gray-400">Zobacz wybrzeże z lotu ptaka.</p>
               </div>
               <div className="mb-6">
                 <h4 className="font-bold text-white text-lg">Aquapark Koszalin</h4>
                 <p className="text-sm text-gray-400">15 min autem. Zjeżdżalnie i sauny.</p>
               </div>
            </div>
            <div>
               <h3 className="text-xl text-cyan-400 font-bold mb-6 border-b border-cyan-400 inline-block">🏐 Sport i Zabawa</h3>
               <div className="mb-6">
                 <h4 className="font-bold text-white text-lg">Boisko do Siatkówki</h4>
                 <p className="text-sm text-gray-400">Profesjonalne boisko na piasku.</p>
               </div>
               <div className="mb-6">
                 <h4 className="font-bold text-white text-lg">Dmuchaniec Gigant</h4>
                 <p className="text-sm text-gray-400">8x3 metry radości.</p>
               </div>
            </div>
            <div>
               <h3 className="text-xl text-cyan-400 font-bold mb-6 border-b border-cyan-400 inline-block">🌲 Las i Historia</h3>
               <div className="mb-6">
                 <h4 className="font-bold text-white text-lg">Velo Baltica</h4>
                 <p className="text-sm text-gray-400">Trasa R10 pod bramą.</p>
               </div>
               <div className="mb-6">
                 <h4 className="font-bold text-white text-lg">Grodzisko</h4>
                 <p className="text-sm text-gray-400">Idź przez las obok Grodziska.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. STREFA SMAKU --- */}
      <section id="smak" className="py-24 px-6 bg-[#141e33] border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-yellow-500 text-4xl font-black uppercase mb-6">Strefa Smaku</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://www.tripadvisor.com/Restaurant_Review-g635880-d8385202-Reviews-La_Palma_Mielno-Mielno_Western_Pomerania_Province_Western_Poland.html" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition border border-slate-700 cursor-pointer">
               <div className="text-4xl">🍕</div>
               <div className="text-left"><h3 className="font-bold text-yellow-500">La Palma</h3><p className="text-sm text-gray-400">Nasza rekomendacja.</p></div>
            </a>
            <a href="https://www.tripadvisor.com/Restaurants-g635880-Mielno_Western_Pomerania_Province_Western_Poland.html" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition border border-slate-700 cursor-pointer">
               <div className="text-4xl">🍽️</div>
               <div className="text-left"><h3 className="font-bold text-yellow-500">Pozostałe</h3><p className="text-sm text-gray-400">Ranking TripAdvisor.</p></div>
            </a>
          </div>
        </div>
      </section>

      {/* --- 5. ZWIERZĘTA --- */}
      <section id="zwierzeta" className="py-24 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800" alt="Pies" width={600} height={400} className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-left mb-6 text-4xl font-black uppercase text-yellow-500">Noclegi z Psem i Kotem</h2>
              <p className="text-xl font-light mb-6 text-white">Większość hoteli toleruje psy. <strong>My je kochamy.</strong></p>
              <p className="mb-6 text-gray-300">Masz 20,000 m² wybiegu. Akceptujemy każdego.</p>
              <p className="text-yellow-500 font-bold text-sm">*Pamiętaj o kulturze i sprzątaniu po pupilu!</p>
            </div>
        </div>
      </section>

      {/* --- 6. DOJAZD --- */}
      <section id="dojazd" className="py-24 px-6 bg-[#141e33]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-yellow-500 mb-12 text-center">Dojazd i Mapa</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
               <h3 className="text-2xl font-bold text-white mb-8">Trasy Dojazdu</h3>
               <ul className="space-y-6 text-gray-300">
                 <li className="flex justify-between border-b border-slate-700 pb-2"><strong className="text-white">Szczecin (S6)</strong> <span>1h 45min</span></li>
                 <li className="flex justify-between border-b border-slate-700 pb-2"><strong className="text-white">Poznań (S11)</strong> <span>3h 30min</span></li>
                 <li className="flex justify-between border-b border-slate-700 pb-2"><strong className="text-white">Warszawa</strong> <span>ok. 6h</span></li>
               </ul>
               <div className="mt-8 text-center">
                  <Image src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.google.com/maps/search/?api=1%26query=Morska+Polana+Mielno" alt="QR" width={120} height={120} className="inline-block"/>
                  <p className="text-xs font-bold mt-2 text-gray-400">Zeskanuj, by nawigować</p>
               </div>
            </div>
            {/* --- MAPA DOJAZDU (EMBED GOOGLE MAPS) --- */}
{/* --- MAPA DOJAZDU GOOGLE --- */}
<div className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2971.428472227397!2d16.06177308520643!3d54.25293009659703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1764192910586!5m2!1spl!2spl"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full border-0"
    allowFullScreen
  ></iframe>
</div>


          </div>
        </div>
      </section>

      {/* --- SEKCJA OPINII --- */}
      <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-black uppercase text-yellow-500 mb-4">Oni już wybrali wolność</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-700 relative shadow-xl">
                    <div className="text-yellow-500 mb-4">★★★★★</div>
                    <p className="text-gray-300 italic mb-6">"W końcu miejsce w Mielnie, gdzie nie słychać imprez za ścianą. Willa Imperium to sztos!"</p>
                    <div className="font-bold text-white">— Tomasz z Poznania</div>
                </div>
                <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-700 relative shadow-xl">
                    <div className="text-yellow-500 mb-4">★★★★★</div>
                    <p className="text-gray-300 italic mb-6">"Najlepsze miejsce dla psiarzy! Teren jest ogromny, pies był w raju."</p>
                    <div className="font-bold text-white">— Kasia i Marek</div>
                </div>
                <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-700 relative shadow-xl">
                    <div className="text-yellow-500 mb-4">★★★★★</div>
                    <p className="text-gray-300 italic mb-6">"Super kontakt z właścicielem, wszystko jasne i konkretne."</p>
                    <div className="font-bold text-white">— Rodzina Kowalskich</div>
                </div>
            </div>
        </div>
      </section>

      {/* --- STOPKA Z NEWSLETTEREM --- */}
      <footer id="kontakt" className="bg-black py-16 text-center border-t border-slate-800">
         <div className="bg-yellow-500 text-slate-900 p-8 rounded-xl max-w-md mx-auto mb-16 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
            <h3 className="text-2xl font-black mb-2">NEWSLETTER</h3>
            <p className="mb-4 font-bold opacity-80">Zostaw maila, otrzymasz zniżkę.</p>
            <form action={subscribe} className="flex gap-2 justify-center mb-4">
              <input name="email" type="email" placeholder="Twój email" required className="p-3 rounded w-full font-sans bg-white text-black border-0" />
              <button type="submit" className="bg-slate-900 text-white font-bold px-6 py-3 rounded hover:bg-slate-700 transition uppercase">Zapisz</button>
            </form>
            <div className="text-xs flex items-center justify-center gap-2 font-bold opacity-70">
              <input type="checkbox" required className="accent-slate-900 h-4 w-4" /> Akceptuję RODO
            </div>
         </div>

         <div className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
            Morska <span className="text-yellow-500">Polana</span>
         </div>
         
         <div className="text-lg mb-2 text-gray-400">ul. Wisławy Szymborskiej 5, 76-032 Mielno</div>
         <div className="text-2xl font-bold text-yellow-500 mb-8 flex justify-center gap-4 items-center flex-wrap">
           <a href="tel:607607058" className="hover:text-white transition">📞 607 607 058</a> 
           <span className="text-slate-700 hidden md:inline">|</span> 
           <a href="mailto:morskapolana@wp.pl" className="hover:text-white transition">✉️ morskapolana@wp.pl</a>
         </div>
         
         <p className="text-gray-700 text-sm">&copy; 2025 Morska Polana. Realizacja: Next.js Architecture</p>
      </footer>
    </main>
  );
}