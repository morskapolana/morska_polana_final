// --- KOMPONENT KLIENTOWY ---
'use client';

// --- IMPORTY ---
import Link from "next/link";
import { useState } from "react";

// --- KOMPONENT STRONY KONTAKTU ---
export default function KontaktPage() {
  // --- STAN: KWOTA I ZADATEK ---
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState(0);

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPrice(val);
    if (val) setDeposit((parseFloat(val) * 0.3).toFixed(2));
    else setDeposit(0);
  };

  const copyToClipboard = () => {
    const text = `Odbiorca: Jacek Nyczka, Morska Polana, ul. Wisławy Szymborskiej 5, 76-032 Mielno
Bank: BOŚ BANK
Nr konta: 76 1540 1043 2104 4273 5877 0001
SWIFT: EBOSPLPW
Tytuł: Zadatek za pobyt w Morskiej Polanie
Kwota zadatku (30%): ${deposit} PLN`;
    navigator.clipboard.writeText(text);
    alert("Skopiowano dane do przelewu wraz z kwotą zadatku (30%).");
  };

  // --- RENDER ---
  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- POWRÓT --- */}
        <Link
          href="/"
          className="text-yellow-500 font-bold mb-8 inline-block hover:underline"
        >
          ← Powrót na stronę główną
        </Link>

        {/* --- NAGŁÓWEK STRONY --- */}
        <h1 className="text-4xl font-black text-white mb-12 text-center">
          Kontakt i <span className="text-yellow-500">Płatność</span>
        </h1>

        {/* --- DWIE KOLUMNY --- */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* --- LEWA KOLUMNA: KALKULATOR + DANE DO PRZELEWU --- */}
          <div className="space-y-8">
            {/* --- KALKULATOR ZADATKU --- */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-yellow-500 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Oblicz zadatek (30%)</h3>
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                placeholder="Kwota pobytu (PLN)"
                className="w-full p-4 rounded bg-slate-950 border border-slate-600 text-white text-xl"
              />
              {price > 0 && (
                <p className="text-4xl font-black text-yellow-500 mt-4">
                  {deposit} PLN
                </p>
              )}
              <p className="text-xs text-gray-400 mt-3">
                Zadatek wynosi <strong>30%</strong> wartości całego pobytu.
              </p>
            </div>

            {/* --- DANE DO PRZELEWU --- */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-xl mb-4">Dane do przelewu</h3>
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <p className="text-white font-bold">Jacek Nyczka</p>
                <p>Morska Polana</p>
                <p>ul. Wisławy Szymborskiej 5</p>
                <p>76-032 Mielno</p>
                <p className="bg-slate-950 p-3 rounded border border-slate-600 text-yellow-500 font-bold text-lg">
                  76 1540 1043 2104 4273 5877 0001
                </p>
                <p>BOŚ BANK &nbsp;|&nbsp; SWIFT: EBOSPLPW</p>
                <p className="text-xs text-gray-400">
                  Tytuł przelewu:{" "}
                  <span className="font-bold text-gray-200">
                    Zadatek za pobyt w Morskiej Polanie (imię i nazwisko, termin)
                  </span>
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="w-full mt-6 bg-yellow-500 text-slate-900 font-bold py-3 rounded hover:bg-yellow-400 transition"
              >
                Skopiuj dane do przelewu
              </button>
              <p className="text-center mt-4 text-xl font-bold">
                📞 607 607 058
              </p>
            </div>
          </div>

          {/* --- PRAWA KOLUMNA: KOSZTY I WARUNKI WYNAJMU --- */}
          <aside className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl text-sm text-gray-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6 uppercase border-b border-slate-700 pb-4">
              Koszty i warunki wynajmu domków
            </h3>

            <p className="mb-5">
              Ważne informacje dotyczące kosztów oraz warunków wynajmu domków
              wypoczynkowych w ośrodku <strong>Morska Polana</strong>:
            </p>

            <ul className="space-y-4">
              <li>
                <strong className="text-yellow-500">Sezon letni (lipiec i sierpień):</strong>{" "}
                oferujemy turnusy <strong>7 lub 14 dniowe</strong>, liczone od{" "}
                <strong>soboty do soboty</strong>.
              </li>

              <li>
                <strong className="text-yellow-500">Poza sezonem letnim:</strong>{" "}
                domki wynajmujemy na co najmniej{" "}
                <strong>3 doby</strong>.
              </li>

              <li>
                <strong className="text-yellow-500">Doba w Morskiej Polanie:</strong>{" "}
                rozpoczyna się o godzinie <strong>16:00</strong>, a kończy w dniu
                wyjazdu o godzinie <strong>10:00</strong>.
              </li>

              <li>
                <strong className="text-yellow-500">Parking:</strong>{" "}
                bezpłatny, niestrzeżony – na terenie ośrodka.
              </li>

              <li>
                <strong className="text-yellow-500">Media w sezonie letnim:</strong>{" "}
                w cenie wynajmu domku uwzględniono koszty za{" "}
                <strong>prąd oraz wodę</strong>.
              </li>

              <li>
                <strong className="text-yellow-500">Grill:</strong>{" "}
                udostępniamy na życzenie Gościa przy domkach.
              </li>

              <li>
                <strong className="text-yellow-500">
                  Poza sezonem (przed 01.07 oraz po 30.08):
                </strong>{" "}
                doliczana jest energia elektryczna –{" "}
                <strong>1,00 zł / kWh</strong>, rozliczana po pobycie według
                odczytu z licznika.
              </li>

              <li>
                <strong className="text-yellow-500">Kaucja zwrotna:</strong>{" "}
                po przybyciu do Morskiej Polany pobierana jest od Gości
                kaucja zwrotna w wysokości{" "}
                <strong>100 PLN od osoby</strong> na rzecz pokrycia
                ewentualnych zniszczeń. Jeżeli szkody przekraczają kwotę
                wpłaconej kaucji, Wynajmujący domek zobowiązani są do
                pokrycia ich całości. Szkody zostaną wycenione na miejscu.
              </li>

              <li>
                <strong className="text-yellow-500">Sprzątanie:</strong>{" "}
                jednorazowa opłata{" "}
                <strong>100 PLN za sprzątanie za pobyt</strong>.
              </li>

              <li>
                <strong className="text-yellow-500">Opłata klimatyczna:</strong>{" "}
                według obowiązujących stawek na terenie gminy. W roku{" "}
                <strong>2025</strong> kwota wynosi{" "}
                <strong>3,30 PLN za osobę</strong>.
              </li>

              <li className="text-red-400 font-bold">
                🚭 W domku obowiązuje absolutny zakaz{" "}
                <span className="underline">palenia tytoniu</span> oraz{" "}
                <span className="underline">smażenia ryb</span>.
              </li>

              <li>
                <strong className="text-yellow-500">
                  Potwierdzenie pełnej rezerwacji:
                </strong>{" "}
                wpłata na konto <strong>30% zadatku</strong> całej wartości
                Państwa pobytu w terminie do{" "}
                <strong>3 dni</strong> od momentu dokonania rezerwacji.{" "}
                Pozostałą kwotę za pobyt należy wpłacić{" "}
                <strong>w dniu przyjazdu</strong> przy wydaniu kluczy.
              </li>

              <li className="bg-slate-800/60 p-3 rounded border-l-4 border-yellow-500">
                <strong>Pełna rezerwacja</strong> następuje po dokonaniu
                przelewu i <strong>natychmiastowym powiadomieniu
                telefonicznym</strong>. Brak potwierdzenia telefonicznego
                po dokonaniu przelewu uznaje się za{" "}
                <strong>brak pełnej rezerwacji</strong>.
              </li>
            </ul>

            <p className="text-[11px] text-gray-500 mt-6 leading-relaxed">
              Przedstawiona oferta cenowa ma charakter informacyjny i{" "}
              <strong>nie stanowi oferty handlowej</strong> w rozumieniu
              art. 66 §1 Kodeksu Cywilnego.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
