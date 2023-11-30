/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["turaback.turacoz.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "turaback.turacoz.com",
    //     port: "",
    //     pathname: "/**", // You might want to adjust the path pattern accordingly
    //   },
    // ],
  },
//   output: "export",
};

module.exports = nextConfig;
