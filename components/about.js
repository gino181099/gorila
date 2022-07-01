import Image from "next/image";
import { useEffect } from "react";
import useObserver from "./useObserver";

const About = () => {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.5,
    root: null,
  });
  function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".fixed ul li.active");
    const shouldBeActive = document.querySelector(`.fixed ul .${id}`);

    if (currentlyActive) {
      currentlyActive.classList.remove("active");
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add("active");
    }
  }
  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.classList.add("show");
        intersectionHandler(entry);
        //  observer.unobserve(lazyImage);
      }
      //   if (!entry.isIntersecting) {
      //     const lazyImage = entry.target;
      //     lazyImage.classList.remove("show");
      //   }
    });
  }, [entries, observer]);
  useEffect(() => {
    const images = document.querySelectorAll(".mobile__block");
    setElements(images);
  }, [setElements]);
  return (
    <section className="about">
      <div className="fixed">
        <ul>
          <li className="one active">
            <div className="line"></div>
            <p>¿Quiénes Somos?</p>
          </li>
          <li className="two">
            <div className="line"></div>
            <p>¿Por qué elegirnos?</p>
          </li>
          <li className="three">
            <div className="line"></div>
            <p>Diversión asegurada</p>
          </li>
          <li className="four">
            <div className="line"></div>
            <p>Desayuno continental incluido</p>
          </li>
        </ul>
      </div>
      <div className="mobile">
        <div className="mobile__block" id="one">
          <div className="image__block">
            <Image
              src="/frente.webp"
              alt="Picture of the author"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>
            Gorilla Hostel fue creado por hermanos en el 2015 con el deseo de
            ofrecer algo único:{" "}
            <b>
              Un hostel de diseño, excelente calidad y divertido para jóvenes
              viajeros en la mejor zona de la Ciudad de Mendoza.
            </b>
          </p>
        </div>
        <div className="mobile__block" id="two">
          <div className="image__block">
            <Image
              src="/coworking.webp"
              alt="Picture of the author"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>
            Estamos en una increible ubicación cerca de todo lo lindo de
            Mendoza! Además somos el único hostel de Mendoza ideal para nómades
            digitales.
          </p>
        </div>
        <div className="mobile__block" id="three">
          <div className="image__block">
            <Image
              src="/bar.webp"
              alt="Picture of the author"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>
            Tenemos un BAR exclusivo para nuestros pasajeros que garantiza
            diversión todas las noches. Además, te ayudamos a reservar las
            mejores excursiones, salidas, eventos, fiestas.
          </p>
        </div>
        <div className="mobile__block" id="four">
          <div className="image__block">
            <Image
              src="/desayuno.webp"
              alt="Picture of the author"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>
            Nuestra tarifa incluye desayuno! El mismo cuenta de medialunas
            caseras recién horneadas, pan lactal, manteca, dulce de leche,
            mermeladas, frutas de estación, leche, cereales, cafe, te, jugos.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about {
          display: flex;
          color: white;
          background: #151515;
          justify-content: space-between;
        }
        .fixed {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-left: 100px;
          font-size: 24px;
          color: #999;
          position: sticky;
          top: 0;
        }
        ul {
          list-style: none;
        }
        li {
          display: flex;
          align-items: center;
          transition: 0.25s;
        }

        li .line {
          /* display: none; */
          width: 0px;
          height: 1px;
          background-color: white;
          transition: 0.25s;
        }
        li.active .line {
          width: 25px;
          margin-right: 10px;
        }
        .active {
          color: white;
        }
        .mobile__block {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 100px;
          position: relative;
          opacity: 0;
          transform: translateY(-10%);
          transition: 0.5s;
        }
        #one,
        #two,
        #three {
          margin-bottom: 250px;
        }
        .mobile__block.show {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile__block p {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-size: 18px;
          font-weight: 400;
          max-width: 650px;
          width: 650px;
          line-height: 150%;
          padding: 50px;
          background-color: #000a;
          left: -50px;
          opacity: 0;
          transform: translateY(-20%);
          transition: 1s;
        }
        #two p,
        #four p {
          right: 0;
          left: unset;
        }
        #two .image__block,
        #four .image__block {
          margin-right: 50px;
        }
        .mobile__block.show p {
          opacity: 1;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
};

export default About;
