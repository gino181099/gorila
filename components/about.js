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
            <p>Quienes Somos</p>
          </li>
          <li className="two">
            <div className="line"></div>
            <p>Que hacemos</p>
          </li>
          <li className="three">
            <div className="line"></div>
            <p>Que hacemos</p>
          </li>
          <li className="four">
            <div className="line"></div>
            <p>Que hacemos</p>
          </li>
        </ul>
      </div>
      <div className="mobile">
        <div className="mobile__block" id="one">
          <div className="image__block">
            <Image
              src="/1.webp"
              alt="Picture of the author"
              width={700}
              height={500}
            />
          </div>
          <p>
            Trabajamos duro para poder ofrecerte la mejor estadía y ayudarte
            para que dediques tu tiempo a disfrutar de Mendoza, sus hermosos
            paisajes, gastronomía y su gente.
          </p>
        </div>
        <div className="mobile__block" id="two">
          <div className="image__block">
            <Image
              src="/2.webp"
              alt="Picture of the author"
              width={700}
              height={500}
            />
          </div>
          <p>
            Trabajamos duro para poder ofrecerte la mejor estadía y ayudarte
            para que dediques tu tiempo a disfrutar de Mendoza, sus hermosos
            paisajes, gastronomía y su gente.
          </p>
        </div>
        <div className="mobile__block" id="three">
          <div className="image__block">
            <Image
              src="/3.webp"
              alt="Picture of the author"
              width={700}
              height={500}
            />
          </div>
          <p>
            Trabajamos duro para poder ofrecerte la mejor estadía y ayudarte
            para que dediques tu tiempo a disfrutar de Mendoza, sus hermosos
            paisajes, gastronomía y su gente.
          </p>
        </div>
        <div className="mobile__block" id="four">
          <div className="image__block">
            <Image
              src="/1.webp"
              alt="Picture of the author"
              width={700}
              height={500}
            />
          </div>
          <p>
            Trabajamos duro para poder ofrecerte la mejor estadía y ayudarte
            para que dediques tu tiempo a disfrutar de Mendoza, sus hermosos
            paisajes, gastronomía y su gente.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about {
          display: flex;
          color: white;
          background: #0c2028;
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
          font-size: 28px;
          font-weight: 400;
          max-width: 650px;
          width: 650px;
          line-height: 120%;
          padding: 50px;
          background-color: #0007;
          right: 100px;
        }
      `}</style>
    </section>
  );
};

export default About;
