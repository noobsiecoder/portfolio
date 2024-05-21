/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/v1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
