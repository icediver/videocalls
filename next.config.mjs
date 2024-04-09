/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ID: process.env.APP_ID,
    SECRET_KEY: process.env.SECRET_KEY,
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
