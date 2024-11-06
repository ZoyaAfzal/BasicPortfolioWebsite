import "../styles/header.css";
import "../styles/intro.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../pages/api/Homepage/main.css";
import type { AppProps } from "next/app";
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
