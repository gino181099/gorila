import Image from "next/image";
import Slider from "./slider";

export default function Heading() {
  return (
    <section>
      <Slider />
      <div className="content">
        <Image
          src="/gorila.webp"
          alt="Picture of the author"
          width={225}
          height={216}
        />
        <div className="title">
          <h2>
            gori<span>ll</span>a
          </h2>
          <p>HOSTEL</p>
        </div>
        <div className="about__button">
          <div className="background__about"></div>

          <a className="about__content" href="google.com">
            Quienes somos
          </a>
        </div>
        <div className="social__buttons">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail-forward"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
              <path d="M3 6l9 6l9 -6" />
              <path d="M15 18h6" />
              <path d="M18 15l3 3l-3 3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        section {
          height: 100vh;
          /* background: red; */
          text-align: center;
        }
        .content {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 20;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
        }
        .about__content {
          color: white;
          font-size: 32px;
          position: relative;
          mix-blend-mode: difference;
          line-height: 105%;
          transition: 0.25s;
          padding: 5px 10px 10px 10px;
        }
        .about__button {
          position: relative;
          border-bottom: 1px solid #fff;
        }
        .background__about {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: white;
          transition: 0.5s;
          clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        }
        .about__button:hover .background__about {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        .social__buttons {
          margin-top: 25px;
          display: flex;
          column-gap: 18px;
        }
        .social__buttons a {
          transition: 0.5s;
        }
        .social__buttons a:hover {
          transform: translateY(10%);
        }
        .title {
          color: white;
          font-size: 80px;
          line-height: 105%;
          padding-bottom: 25px;
          padding-top: 10px;
        }
        .title h2 {
          font-weight: 400;
        }
        .title p {
          font-weight: 200;
          text-align: end;
          font-size: 60px;
        }
        .title span {
          color: #45add9;
        }
      `}</style>
    </section>
  );
}
