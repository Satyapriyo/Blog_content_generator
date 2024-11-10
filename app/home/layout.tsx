import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
