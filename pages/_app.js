import Contacto from "../components/contact";
import Menu from "../components/menu";
import "../styles/globals.css";
import { useRouter } from "next/router";
import español from "../traducciones/español";
import ingles from "../traducciones/ingles";
import frances from "../traducciones/frances";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const t =
    locale === "en"
      ? ingles
      : locale === "es"
      ? español
      : locale === "fr"
      ? frances
      : ingles;
  return (
    <>
      <Menu t={t.menu} />
      <Component {...pageProps} />
      <Contacto t={t.contacto} />
    </>
  );
}

export default MyApp;
