// --- IMPORTY ---
import QRCode from "qrcode";

// --- HANDLER GET DLA /api/qr ---
export async function GET() {
  // --- ADRES DO MAP GOOGLE ---
  const url =
    "https://maps.google.com/?q=Morska+Polana+Mielno+Wisławy+Szymborskiej+5";

  // --- GENEROWANIE PNG JAKO BUFFER ---
  const qrBuffer = await QRCode.toBuffer(url, {
    width: 300,
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  // --- ZWRACAMY OBRAZEK PNG ---
  return new Response(qrBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
