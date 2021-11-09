import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Cookies from "universal-cookie";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const cookies = new Cookies();
  const defaultThemeColor = "mirage";
  const defaultTextColor = "red";

  useEffect(() => {
    const themeColor = cookies.get("theme-color");
    const textColor = cookies.get("text-color");

    // Theme Color
    if (themeColor) {
      document.documentElement.classList.add(`theme-${themeColor}`);
    } else {
      document.documentElement.classList.add(`theme-${defaultThemeColor}`);
      cookies.set(`theme-color`, defaultThemeColor, { path: "/" });
    }
    // Text Color
    if (textColor) {
      document.documentElement.classList.add(`text-${textColor}`);
    } else {
      document.documentElement.classList.add(`text-${defaultTextColor}`);
      cookies.set(`text-color`, defaultTextColor, { path: "/" });
    }
  }, []);

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
