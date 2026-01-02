/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*", // Match all paths
        has: [
          {
            type: "host",
            value: "www.dostudio.ae", // Match www domain
          },
        ],
        destination: "https://dostudio.ae/:path*", // Redirect to non-www domain
        permanent: true, // 308 permanent redirect
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",     // Leaving blank means any port
        pathname: "/**", // Match all paths on the host
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",     // Leaving blank means any port
        pathname: "/**", // Match all paths on the host
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",     // Leaving blank means any port
        pathname: "/**", // Match all paths on the host
      },
    ],
  },
};

export default nextConfig;
