/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/DevanAbinaya/Ani-Moopa",
        permanent: false,
        basePath: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/v5fjSdKwr2",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
