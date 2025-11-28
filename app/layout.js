// --- IMPORTY GLOBALNE ---
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";

// --- FONT ---
const montserrat = Montserrat({
  subsets: ["latin"], // można dać ["latin", "latin-ext"], jeśli chcesz
  weight: ["400", "700"], // 900 wywal, jeśli nie potrzebujesz
  display: "swap", // ważne dla performance – nie blokuje renderu tekstu
});

// --- METADATA ---
export const metadata = {
  metadataBase: new URL("https://morskapolana.pl"),
  title: "Morska Polana — Prywatny kurort w Mielnie",
  description:
    "Domy całoroczne i letnie na 2 hektarach prywatnego terenu. Psy i koty mile widziane. Sprawdź wolne terminy.",
  openGraph: {
    title: "Morska Polana — 2 hektary spokoju",
    description:
      "Wille, Bastiony i Letnie. Blisko lasu i plaży. Idealne dla rodzin i pupili.",
    url: "https://morskapolana.pl",
    type: "website",
  },
  alternates: { canonical: "https://morskapolana.pl/" },
};

// --- ROOT LAYOUT ---
export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${montserrat.className} bg-[#0f172a] text-white antialiased`}
      >
        {/* --- SKIP LINK --- */}
        <a href="#main" className="sr-only">
          Przejdź do treści głównej
        </a>

        {/* --- NAWIGACJA --- */}
        <Navbar />

        {/* --- GŁÓWNA TREŚĆ (ODSUNIĘTA O WYSOKOŚĆ NAVBARA) --- */}
        <main id="main" className="pt-[90px]">
          {children}
        </main>
      </body>
    </html>
  );
}
