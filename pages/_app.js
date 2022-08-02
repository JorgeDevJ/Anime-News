import { GlobalStyle } from "../styles/Globals";
import "../styles/typografy.css";
import Script from "next/script";
import { UserProvider } from "@auth0/nextjs-auth0";
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></Script>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
