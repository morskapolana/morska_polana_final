// --- SEZONOWE KAMPANIE DLA HERO NA STRONIE GŁÓWNEJ ---

// Każda kampania odpowiada jednej kafelce z sekcji "Kiedy nas odwiedzisz?"
// + dodatkowa kampania na Black Friday.
// Kolejność w tablicy = priorytet, gdy daty się nachodzą.

// --- SEZONOWE KAMPANIE DLA HERO NA STRONIE GŁÓWNEJ ---

const campaigns = [
  // --- ŚWIĘTA + SYLWESTER ---
  {
    id: "swieta-sylwester",
    name: "Święta + Sylwester",
    badgeText: "🎄 Świąteczno-sylwestrowy pakiet",
    heroTitle: "Święta i Sylwester nad Bałtykiem",
    heroSubtitle:
      "Jeden dłuższy pobyt zamiast dwóch wyjazdów. Przyjeżdżasz na Święta, zostajesz na Sylwestra – las, morze, cisza i własny domek.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz pakiet Święta + Sylwester",
    ctaHref: "/okazje/sylwester",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return (m === 12 && d >= 20) || (m === 1 && d <= 2);
    },
  },

  // --- BLACK FRIDAY ---
  {
    id: "black-friday",
    name: "Black Friday",
    badgeText: "🖤 Black Friday nad morzem",
    heroTitle: "Black Friday w Morskiej Polanie",
    heroSubtitle:
      "Zarezerwuj wakacje lub Majówkę z wyprzedzeniem i zyskaj specjalny rabat Black Friday. Idealne dla tych, którzy planują wcześniej.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Sprawdź promocyjne terminy",
    ctaHref: "/okazje",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return m === 11 && d >= 18 && d <= 30;
    },
  },

  // --- MAJÓWKA ---
  {
    id: "majowka",
    name: "Majówka",
    badgeText: "🌸 Majówka nad Bałtykiem",
    heroTitle: "Majówka w Morskiej Polanie",
    heroSubtitle:
      "Pierwszy wiosenny wypad nad morze. Grill, ognisko, rowery i jeszcze w miarę puste plaże.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz ofertę Majówki",
    ctaHref: "/okazje/majowka",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return (m === 4 && d >= 20) || (m === 5 && d <= 6);
    },
  },

  // --- BOŻE CIAŁO ---
  {
    id: "boze-cialo",
    name: "Boże Ciało",
    badgeText: "🌿 Weekend Boże Ciało",
    heroTitle: "Boże Ciało nad morzem",
    heroSubtitle:
      "Długi czerwcowy weekend w ośrodku z dużym terenem, lasem i bliskością morza.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Sprawdź ofertę Bożego Ciała",
    ctaHref: "/okazje/boze-cialo",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return m === 6 && d >= 1 && d <= 15;
    },
  },

  // --- WAKACJE ---
  {
    id: "wakacje",
    name: "Wakacje",
    badgeText: "☀️ Wakacje — hit sezonu",
    heroTitle: "Wakacje w Morskiej Polanie",
    heroSubtitle:
      "2 hektary terenu, boisko, dmuchaniec, domki dla rodzin i pełen komfort w szczycie sezonu.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz ofertę wakacyjną",
    ctaHref: "/okazje/wakacje",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      if (m === 6 && d >= 20) return true;
      if (m === 7 || m === 8) return true;
      return false;
    },
  },

  // --- ZŁOTA JESIEŃ ---
  {
    id: "zlota-jesien",
    name: "Złota Jesień",
    badgeText: "🍂 Złota Jesień nad morzem",
    heroTitle: "Jesienny wypoczynek nad Bałtykiem",
    heroSubtitle:
      "Ciche plaże, kolorowe lasy i niższe ceny niż w szczycie sezonu. Idealnie na reset po lecie.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz ofertę jesienną",
    ctaHref: "/okazje/zlota-jesien",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      return m === 9 || m === 10;
    },
  },

  // --- WALENTYNKI ---
  {
    id: "walentynki",
    name: "Walentynki",
    badgeText: "❤️ Walentynki nad morzem",
    heroTitle: "Romantyczny weekend w Mielnie",
    heroSubtitle:
      "Domek w lesie, blisko morza, bez sąsiadów za ścianą. Idealny weekend tylko we dwoje.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz ofertę Walentynkową",
    ctaHref: "/okazje/walentynki",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return m === 2 && d >= 1 && d <= 21;
    },
  },

  // --- MORSOWANIE ---
  {
    id: "morsowanie",
    name: "Morsowanie",
    badgeText: "❄️ Pakiet dla Morsów",
    heroTitle: "Morsowanie nad Bałtykiem",
    heroSubtitle:
      "Ogrzewane domki po zimnej kąpieli. Świetna baza wypadowa na poranne morsowanie.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz ofertę dla Morsów",
    ctaHref: "/okazje/morsowanie",
    isActive: (date) => {
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return (
        (m === 1 && d >= 3) ||
        m === 2 ||
        (m === 3 && d <= 10)
      );
    },
  },

  // --- POBYT Z PUPILEM (DOMYŚLNA) ---
  {
    id: "pobyt-z-pupilem",
    name: "Pobyt z pupilem",
    badgeText: "🐾 Tu psy są mile widziane",
    heroTitle: "Wakacje z psem i kotem",
    heroSubtitle:
      "Większość hoteli tylko toleruje psy. My je po prostu lubimy. 2 hektary terenu i las tuż za bramą.",
    heroImage: "/baltyk.webp",
    ctaLabel: "Zobacz pobyt z pupilem",
    ctaHref: "/okazje/pobyt-z-pupilem",
    isActive: () => true,
  },
];

// --- FUNKCJA: ZWRACA AKTYWNĄ KAMPANIĘ ALBO NULL ---
export function getActiveCampaign(date = new Date()) {
  return campaigns.find((c) => c.isActive(date)) || null;
}
