// --- IMPORTY GLOBALNE ---
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";

// --- FONT ---
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// --- METADATA ---
export const metadata = {
    icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // --- BAZOWY ADRES DLA KANONICALNYCH / OG / TWITTER ---
  metadataBase: new URL("https://beta.morskapolana.pl"),

  title: "Morska Polana — Prywatny kurort w Mielnie",
  description:
    "Domy całoroczne i letnie na 2 hektarach prywatnego terenu. Psy i koty mile widziane. Sprawdź wolne terminy.",

  // --- OPEN GRAPH (FACEBOOK / MESSENGER / WHATSAPP itd.) ---
  openGraph: {
    title: "Morska Polana — 2 hektary spokoju",
    description:
      "Wille, Bastiony i Letnie. Blisko lasu i plaży. Idealne dla rodzin i pupili.",
    url: "https://beta.morskapolana.pl/",
    type: "website",
  },

  // --- KANONICZNY ADRES STRONY GŁÓWNEJ ---
  alternates: {
    canonical: "https://beta.morskapolana.pl/",
  },

  // --- ROBOTS: POZWALAMY NA INDEX + FOLLOW ---
  robots: {
    index: true,
    follow: true,
  },

  // --- FAVICON / APPLE TOUCH ICON (DLA SEOBILITY) ---
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // --- TWITTER CARDS (JAK KTOŚ WKLEI LINK NA X/TWITTERZE) ---
  twitter: {
    card: "summary_large_image",
    title: "Morska Polana — Prywatny kurort w Mielnie",
    description:
      "Domy całoroczne i letnie na 2 hektarach prywatnego terenu. Psy i koty mile widziane. Sprawdź wolne terminy.",
  },
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
