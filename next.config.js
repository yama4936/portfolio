/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // 静的サイトとしてエクスポート
  basePath: "/portfolio", // ← GitHubのリポジトリ名に変更
  assetPrefix: "/portfolio/", // ← これも変更
};

module.exports = nextConfig;
