import Contacto from "../components/contact";
import Menu from "../components/menu";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Contacto />
    </>
  );
}

export default MyApp;
