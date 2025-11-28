// --- KOMPONENT KLIENTOWY ---
"use client";

// --- IMPORTY ---
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- KOMPONENT NAVBAR ---
export default function Navbar() {
  // --- ROUTING / STAN ---
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // --- HASH PRZY ZMIANIE ŚCIEŻKI ---
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash || "");
    }
  }, [pathname]);

  // --- KLASY LINKÓW STANDARDOWYCH (bez "Kontakt") ---
  const getLinkClass = (path, hash = "") => {
    const base =
      "py-2 text-white hover:text-yellow-500 transition border-b-2 border-transparent cursor-pointer";
    const active =
      "py-2 text-white border-b-2 border-yellow-500 font-bold transition cursor-pointer";

    // Podstrona (np. /galeria, /okazje)
    if (hash === "" && pathname === path) return active;

    // Sekcja na stronie głównej (np. /#atrakcje)
    if (pathname === "/" && hash !== "" && activeHash === hash) return active;

    return base;
  };

  // --- AKTYWNY "KONTAKT" ---
  const isKontaktActive = pathname === "/kontakt";

  // --- OBSŁUGA KLIKNIĘCIA ---
  const handleClick = (hash = "") => {
    setActiveHash(hash);
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-[#0f172a]/98 backdrop-blur-md border-b border-slate-800 shadow-xl h-[90px]"
      aria-label="Główna nawigacja"
    >
      {/* --- KONTENER WEWNĘTRZNY (TERAZ NA CAŁĄ SZEROKOŚĆ, LOGO PRZY LEWYM ROGU) --- */}
      <div className="w-full h-full px-0 flex items-center">
        {/* --- LOGO + NAZWA (PARASOLKA WYŻEJ, PRZECHYLONA, KIJ W LEWO) --- */}
        <Link
          href="/"
          onClick={() => handleClick("")}
          className="flex items-center gap-4 cursor-pointer select-none group h-full mr-6"
          aria-label="Przejdź na stronę główną"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-105 transition duration-300 drop-shadow-lg"
            aria-hidden="true"
          >
            {/* --- SŁOŃCE --- */}
            <circle
              cx="160"
              cy="35"
              r="18"
              stroke="#eab308"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M160 7V0 M160 65V72 M188 35H195 M125 35H118 M181 56L187 62 M139 14L133 8 M181 14L187 8 M139 56L133 62"
              stroke="#eab308"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* --- PARASOL (czasza) --- */}
            <path
              d="M40 80 Q 80 20 120 80 Z"
              fill="white"
              stroke="black"
              strokeWidth="4"
            />
            <path d="M40 80 Q 60 40 70 80" fill="#ef4444" />
            <path d="M70 80 Q 80 20 90 80" fill="#ef4444" />
            <path d="M90 80 Q 100 40 110 80" fill="#ef4444" />
            <path d="M110 80 Q 120 40 120 80" fill="#ef4444" />
            <path
              d="M70 80 Q 80 20 90 80"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />

            {/* --- KIJ PARASOLKI (w lewo, lekko przekrzywiony) --- */}
            <line
              x1="80"
              y1="80"
              x2="68"
              y2="135"
              stroke="#eab308"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* --- FALE I PLAŻA --- */}
            <path
              d="M40 115 Q 60 135 80 115 T 120 115 T 160 115"
              stroke="#3b82f6"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M30 135 Q 100 115 170 135"
              stroke="#10b981"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M30 142 Q 100 122 170 142"
              stroke="#eab308"
              strokeWidth="4"
              fill="none"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="flex flex-col justify-center h-full pt-1">
            <span
              className="block font-black text-2xl text-white tracking-tight leading-none uppercase group-hover:text-yellow-500 transition"
              style={{ fontFamily: "serif" }}
            >
              Morska Polana
            </span>
            <span className="block font-medium text-yellow-500 text-[10px] tracking-[0.4em] uppercase leading-none mt-1 text-center group-hover:text-white transition">
              W A K A C J E
            </span>
          </div>
        </Link>

        {/* --- ŚRODKOWA CZĘŚĆ: MENU WYŚRODKOWANE --- */}
        <div className="flex-1 flex items-center justify-center">
          <ul className="hidden lg:flex gap-7 list-none text-xs font-bold uppercase tracking-wide items-center">
            <li>
              <Link
                href="/#oferta"
                onClick={() => handleClick("#oferta")}
                className={getLinkClass("/", "#oferta")}
              >
                Wybierz domek
              </Link>
            </li>

            <li>
              <Link
                href="/galeria"
                onClick={() => handleClick("")}
                className={getLinkClass("/galeria")}
              >
                Galeria
              </Link>
            </li>

            <li>
              <Link
                href="/okazje"
                onClick={() => handleClick("")}
                className={getLinkClass("/okazje")}
              >
                Okazje
              </Link>
            </li>

            {/* --- ATRAKCJE NA GŁÓWNEJ --- */}
            <li>
              <Link
                href="/#atrakcje"
                onClick={() => handleClick("#atrakcje")}
                className={getLinkClass("/", "#atrakcje")}
              >
                Atrakcje
              </Link>
            </li>

            <li>
              <Link
                href="/#smak"
                onClick={() => handleClick("#smak")}
                className={getLinkClass("/", "#smak")}
              >
                Strefa Smaku
              </Link>
            </li>

            <li>
              <Link
                href="/#zwierzeta"
                onClick={() => handleClick("#zwierzeta")}
                className={getLinkClass("/", "#zwierzeta")}
              >
                Zwierzęta
              </Link>
            </li>

            <li>
              <Link
                href="/#dojazd"
                onClick={() => handleClick("#dojazd")}
                className={getLinkClass("/", "#dojazd")}
              >
                Dojazd
              </Link>
            </li>

            {/* --- GUZIK KONTAKT --- */}
            <li>
              <Link
                href="/kontakt"
                onClick={() => handleClick("")}
                className={`
      px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wide shadow-md transition
      bg-yellow-500 text-slate-9
     00 hover:bg-yellow-400
      relative
      ${
        pathname === "/kontakt"
          ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-6 after:h-[3px] after:bg-green-500 after:rounded-full"
          : ""
      }
    `}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* --- JĘZYKI – PRAWA KRAWĘDŹ (DESKTOP) --- */}
        <div className="hidden lg:flex gap-3 text-xs font-bold text-gray-400 ml-6">
          <span className="text-white cursor-pointer border-b border-yellow-500">
            PL
          </span>
          <span className="hover:text-white cursor-pointer transition">DE</span>
          <span className="hover:text-white cursor-pointer transition">EN</span>
        </div>

        {/* --- BURGER (MOBILE) --- */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center px-3 py-2 border border-slate-700 rounded text-white text-xs font-bold uppercase tracking-wide ml-auto"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Przełącz menu"
          aria-expanded={mobileOpen ? "true" : "false"}
        >
          {mobileOpen ? "Zamknij" : "Menu"}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f172a]/98 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2 text-xs font-bold uppercase tracking-wide">
            <Link
              href="/#oferta"
              onClick={() => handleClick("#oferta")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Wybierz domek
            </Link>
            <Link
              href="/galeria"
              onClick={() => handleClick("")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Galeria
            </Link>
            <Link
              href="/okazje"
              onClick={() => handleClick("")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Okazje
            </Link>
            <Link
              href="/#atrakcje"
              onClick={() => handleClick("#atrakcje")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Atrakcje
            </Link>
            <Link
              href="/#smak"
              onClick={() => handleClick("#smak")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Strefa Smaku
            </Link>
            <Link
              href="/#zwierzeta"
              onClick={() => handleClick("#zwierzeta")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Zwierzęta
            </Link>
            <Link
              href="/#dojazd"
              onClick={() => handleClick("#dojazd")}
              className="block py-2 text-gray-200 hover:text-yellow-500"
            >
              Dojazd
            </Link>
            <Link
              href="/kontakt"
              onClick={() => handleClick("")}
              className="block py-2 text-yellow-500"
            >
              Kontakt
            </Link>

            <div className="pt-3 mt-2 border-t border-slate-800 flex gap-4 text-gray-400">
              <span className="text-white cursor-pointer border-b border-yellow-500">
                PL
              </span>
              <span className="hover:text-white cursor-pointer transition">
                DE
              </span>
              <span className="hover:text-white cursor-pointer transition">
                EN
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
