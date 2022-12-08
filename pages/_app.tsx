import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../next-i18next.config";

import "../styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, NextI18nextConfig);
