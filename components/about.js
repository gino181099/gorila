import Image from "next/image";
import { useEffect } from "react";
import useObserver from "./useObserver";

const About = ({ t }) => {
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
            <p>{t.quienesSomos}</p>
          </li>
          <li className="two">
            <div className="line"></div>
            <p>{t.porqueElegirnos}</p>
          </li>
          <li className="three">
            <div className="line"></div>
            <p>{t.diversionAsegurada}</p>
          </li>
          <li className="four">
            <div className="line"></div>
            <p>{t.desayuno}</p>
          </li>
        </ul>
      </div>
      <div className="mobile">
        <div className="mobile__block" id="one">
          <div className="image__block">
            <Image
              src="/frente.webp"
              alt="Frente de Gorilla Hostel"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>{t.textoImagen1}</p>
        </div>
        <div className="mobile__block" id="two">
          <div className="image__block">
            <Image
              src="/coworking.webp"
              alt="Coworking"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>{t.textoImagen2}</p>
        </div>
        <div className="mobile__block" id="three">
          <div className="image__block">
            <Image
              src="/bar.webp"
              alt="Bar de Gorilla Hostel"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>{t.textoImagen3}</p>
        </div>
        <div className="mobile__block" id="four">
          <div className="image__block">
            <Image
              src="/desayuno.webp"
              alt="Desayuno de Gorilla Hostel"
              width={700}
              height={500}
              objectFit="cover"
            />
          </div>
          <p>{t.textoImagen4}</p>
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
        .mobile {
          padding: 100px 0;
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
        @media (max-width: 1250px) {
          .fixed {
            display: none;
          }
          .mobile__block {
            margin: auto;
            padding: 0;
            height: 70vh;
          }
          .mobile {
            padding: 100px 0;
          }
          .about {
            justify-content: center;
          }
        }
        @media (max-width: 900px) {
          #two .image__block,
          #four .image__block {
            margin-right: 0px;
          }
          .mobile__block p {
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            padding: 50px;
            background-color: #000a;
            left: 0%;
            right: 0%;
            width: 100%;
            max-width: 100%;
          }
          .mobile__block {
            margin-bottom: 0px !important;
          }
        }
        @media (max-width: 400px) {
          .mobile__block p {
            padding: 25px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
