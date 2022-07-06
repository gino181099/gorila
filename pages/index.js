// import Image from 'next/image'
import Head from "next/head";

import About from "../components/about";
import Activities from "../components/activities";
import Arrive from "../components/arrive";
import Heading from "../components/home/heading";
import Instagram from "../components/instagram";
import Reserve from "../components/reserve";
import Rooms from "../components/rooms";
import { useRouter } from "next/router";
import español from "../traducciones/español";
import ingles from "../traducciones/ingles";
import frances from "../traducciones/frances";

// import styles from "../styles/Home.module.css";

export default function Home() {
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
    <main>
      <Head>
        <title>
          Hostel en Mendoza-Para jovenes viajeros- Hostel Gorilla Mendoza
        </title>
        <link rel="shortcut icon" href="/icon.webp" />
        <meta
          name="description"
          content="Hostel Gorilla es ideal para jóvenes, ubicado en el corazón de la ciudad de Mendoza, a 2 cuadras de Arístides y 5 del Parque San Martin. 
Amplias áreas comunes, con jardín, piscina, metegol y ping pong. Bar ,Wifi gratuito. Mejor ubicación.
"
        ></meta>
        <meta
          property="og:title"
          content="Hostel en Mendoza-Para jovenes viajeros- Hostel Gorilla Mendoza"
        ></meta>
        <meta
          property="og:description"
          content="Hostel Gorilla es ideal para jóvenes, ubicado en el corazón de la ciudad de Mendoza, a 2 cuadras de Arístides y 5 del Parque San Martin. 
Amplias áreas comunes, con jardín, piscina, metegol y ping pong. Bar ,Wifi gratuito. Mejor ubicación.
"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading t={t} />
      <Reserve t={t.inicio} />
      <About t={t.inicio} />
      <Rooms t={t.inicio} />
      <Activities t={t.inicio} locale={locale} />
      <Instagram t={t.inicio} />
      <Arrive t={t.inicio} />
    </main>
  );
}
