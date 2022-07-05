import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = () => {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    window.scrollY > 0 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);
  const togglebutton = () => {
    document.querySelector(".elements").classList.toggle("show");
  };
  return (
    <div className={`menu__container ${show ? "sticky" : ""}`}>
      <div className="menu">
        <div className="logo">
          <Image
            src="/gorila.webp"
            alt="Picture of the author"
            width={48}
            height={48}
            className="logo__img"
          />
        </div>
        <div className="toggle">
          <button onClick={togglebutton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="elements">
          <li>
            <a className="reserve">Reservar</a>
          </li>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/activities">
              <a>Actividades</a>
            </Link>
          </li>
          <li>
            <a>Habitaciones</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .menu__container {
          position: fixed;
          width: 100%;
          /* left: 50%; */
          top: 0;
          /* transform: translateX(-50%); */
          z-index: 999;
          transition: 0.5s;
        }
        .menu__container.sticky {
          background: #15151566;
          box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.11);
          -webkit-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.11);
          -moz-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.11);
        }
        .menu {
          display: flex;
          justify-content: space-between;
          padding: 10px 25px;
          max-width: 1440px;
          margin: 0 auto;
          align-items: center;
        }
        .menu .elements {
          display: flex;
          list-style: none;
          color: white;
          column-gap: 25px;
          align-items: center;
        }
        .reserve {
          background: #40b9ed;
          padding: 5px 10px;
          border-radius: 5px;
        }
        .toggle {
          display: none;
        }
        .toggle button {
          border: none;
          outline: none;
          background: none;
          cursor: pointer;
        }
        .toggle svg {
          transform: translateY(3px);
        }
        @media (max-width: 780px) {
          .toggle {
            display: unset;
          }
          .elements {
            position: fixed;
            top: 74px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            background: #151515;
            /* backdrop-filter: blur(20px); */
            left: 0;
            padding-top: 50px;
            transform: translateX(100%);
            transition: 0.75s;
          }
          .elements.show {
            transform: translateX(0);
          }
          .elements li {
            padding: 15px;
            font-size: 1.25em;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
