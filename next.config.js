/** @type {import('next').NextConfig} */

import NextI18Next from "next-i18next";
import i18nextHttpBackend from "i18next-http-backend";

const NextI18NextInstance = new NextI18Next({
  otherLanguages: ["de"],
  localeSubpaths: {
    de: "de",
  },
});

NextI18NextInstance.i18n.use(i18nextHttpBackend).init({
  backend: {
    loadPath: "http://localhost:3333/{{lng}}/{{ns}}.json",
  },
});

export default NextI18NextInstance;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
