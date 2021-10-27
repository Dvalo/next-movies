import React, { useEffect } from "react";
import Cookies from 'universal-cookie';

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const cookies = new Cookies();
  const defaultThemeColor = "mirage";
  const defaultTextColor = "red";
  useEffect(() => {
    const themeColor = cookies.get('theme-color');
    const textColor = cookies.get('text-color');

    // Theme Color
    if (themeColor) {
      document.documentElement.classList.add(`theme-${themeColor}`);
    } else {
      document.documentElement.classList.add(`theme-${defaultThemeColor}`);
      cookies.set(`theme-color`, defaultThemeColor, { path: '/' });
    }
    // Text Color
    if (textColor) {
      document.documentElement.classList.add(`text-${textColor}`);
    } else {
      document.documentElement.classList.add(`text-${defaultTextColor}`);
      cookies.set(`text-color`, defaultTextColor, { path: '/' });
    }
  }, [])
  return <Component {...pageProps} />;
}

export default MyApp;
