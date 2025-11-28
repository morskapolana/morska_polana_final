/** @type {import('next').NextConfig} */
// --- NEXT CONFIG: OBRAZY I OPTIMALIZACJA ---
const nextConfig = {
  images: {
    // --- FORMATY ---
    formats: ['image/avif', 'image/webp'],

    // --- NOWY SPOSÓB: REMOTE PATTERNS ZAMIAST "domains" ---
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/v1/create-qr-code/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],

    // --- ROZMIARY ---
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // --- CACHE ---
    minimumCacheTTL: 60,
  },

  // --- KOMPRESJA HTML/JS ---
  compress: true,
};

module.exports = nextConfig;
