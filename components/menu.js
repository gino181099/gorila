import Image from "next/image";
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
        <ul className="elements">
          <li>
            <a className="reserve">Reservar</a>
          </li>
          <li>
            <a>Actividades</a>
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
      `}</style>
    </div>
  );
};

export default Menu;
