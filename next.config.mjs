const legacyPages = ['about', 'academics', 'achievements', 'contact', 'events', 'faculty', 'gallery', 'placements-alumni', 'research'];

const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...legacyPages.map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
