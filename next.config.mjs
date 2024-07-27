// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




// next.config.js

// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/socket.io/:path*',
          destination: '/api/livechat/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  
  