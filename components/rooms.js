import Image from "next/image";
import { useState } from "react";

const Rooms = () => {
  const [privateRoom, setPrivateRoom] = useState(1);
  const [mixedRoom, setMixedRoom] = useState(1);
  const nextPrivate = () => {
    privateRoom == 3 ? setPrivateRoom(1) : setPrivateRoom(privateRoom + 1);
  };
  const prevPrivate = () => {
    privateRoom == 1 ? setPrivateRoom(3) : setPrivateRoom(privateRoom - 1);
  };
  const nextMixed = () => {
    mixedRoom == 5 ? setMixedRoom(1) : setMixedRoom(mixedRoom + 1);
  };
  const prevMixed = () => {
    mixedRoom == 1 ? setMixedRoom(5) : setMixedRoom(mixedRoom - 1);
  };
  let privateText = {
    1: "Disponible desde octubre 2022. Cama doble y 1 cucheta con calefacción central, aire acondicionado, toallas incluidas, secador de pelo, placard y desayuno incluido",
    2: "Cama doble y 1 cucheta con calefacción central, aire acondicionado, toallas incluidas, secador de pelo, placard y desayuno incluido",
    3: "Cuenta con 3 Cuchetas (litera, camarote), 2 camas individuales, Baño privado (separado ducha y baño), Aire Acondicionado frio/calor, Desayuno incluído, Secador de pelo, Vestidor y Lockers individuales",
  };
  let privateTitle = {
    1: "Para 4 personas Máximo C/baño privado",
    2: "Para 4 personas Máximo C/baño compartido",
    3: "Habitación FEMENINA para 6 C/baño privado",
  };
  let mixedText = {
    1: "Camas cuchetas, Baño compartido, Calefacción central, Aire Acondicionado, Lockers individuales y Desayuno incluído.",
    2: "Camas cuchetas, Baño compartido, Calefacción central, Aire Acondicionado, Lockers individuales y Desayuno incluído.",
    3: "Camas cuchetas, Baño privado, Balcon, Calefacción central, Aire Acondicionado, Lockers individuales y Desayuno incluído.",
    4: "2 cuchetas, Baño compartido, Calefacción central, Aire Acondicionado, Lockers individuales y Desayuno incluído.",
    5: "2 cuchetas, Baño compartido, Calefacción central, Aire Acondicionado, Lockers individuales y Desayuno incluído.",
  };
  let mixedTitle = {
    1: "Para 8 personas Máximo C/baño compartido",
    2: "Para 6 personas Máximo C/baño compartido",
    3: "Para 8 personas Máximo C/baño privado",
    4: "Para 4 personas Máximo C/baño compartido",
    5: "Para 4 personas Máximo C/baño compartido",
  };
  return (
    <section className="rooms">
      <div className="room">
        <div className="left__room">
          <h2>
            <span>HABITACIONES</span>
            <br />
            PRIVADAS
          </h2>
          <div className="image__carousel__room">
            <Image
              src="/private1.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${privateRoom == 1 ? 1 : 0}`,
              }}
            />
            <Image
              src="/private2.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${privateRoom == 2 ? 1 : 0}`,
              }}
            />
            <Image
              src="/private3.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${privateRoom == 3 ? 1 : 0}`,
              }}
            />
          </div>
          <div className="arrows">
            <button onClick={prevPrivate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="9" y2="16" />
                <line x1="5" y1="12" x2="9" y2="8" />
              </svg>
            </button>
            <p>{privateRoom} / 3</p>
            <button onClick={nextPrivate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="right__room">
          <div className="image__description__room">
            <Image
              src="/private1.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${privateRoom == 1 ? 1 : 0}`,
              }}
            />
            <Image
              src="/private2.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${privateRoom == 2 ? 1 : 0}`,
              }}
            />
            <Image
              src="/private3.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${privateRoom == 3 ? 1 : 0}`,
              }}
            />
          </div>
          <p>
            <span className="description__span">
              {privateTitle[privateRoom]}
            </span>
            <br />
            {privateText[privateRoom]}
          </p>
        </div>
      </div>
      <div className="room">
        <div className="right__room">
          <div className="image__description__room">
            <Image
              src="/mixed1.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 1 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed2.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 2 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed3.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 3 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed4.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 4 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed5.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 5 ? 1 : 0}`,
              }}
            />
          </div>
          <p>
            <span className="description__span">{mixedTitle[mixedRoom]}</span>
            <br />
            {mixedText[mixedRoom]}
          </p>
        </div>
        <div className="left__room">
          <h2>
            <span>HABITACIONES</span>
            <br />
            MIXTAS
          </h2>
          <div className="image__carousel__room">
            <Image
              src="/mixed1.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 1 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed2.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 2 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed3.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 3 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed4.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 4 ? 1 : 0}`,
              }}
            />
            <Image
              src="/mixed5.webp"
              alt="Picture of the author"
              layout="fill"
              // height={500}
              // width={500}
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: `${mixedRoom == 5 ? 1 : 0}`,
              }}
            />
          </div>
          <div className="arrows">
            <button onClick={prevMixed}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="9" y2="16" />
                <line x1="5" y1="12" x2="9" y2="8" />
              </svg>
            </button>
            <p>{mixedRoom} / 5</p>
            <button onClick={nextMixed}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .rooms {
          padding: 50px 100px 0 100px;
        }
        .room {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 100px;
        }
        .room div {
          max-width: 500px;
          width: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .right__room {
          padding-top: 50px;
        }
        h2 {
          font-size: 64px;
          font-weight: 300;
          text-align: center;
          padding-bottom: 50px;
          line-height: 100%;
        }
        span {
          font-size: 20px;
          color: #858f93;
          font-weight: 600;
          line-height: 100%;
          padding-bottom: 10px;
        }
        .description__span {
          margin-bottom: 50px;
          /* display: block; */
          line-height: 100%;
        }
        p {
          font-size: 18px;
          line-height: 150%;
          padding: 0;
          padding-top: 50px;
          font-weight: 300;
        }
        .room div.arrows {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding-top: 25px;
          padding-bottom: 25px;
        }

        .arrows button {
          width: 50px;
          height: 50px;
          background: transparent;
          border: none;
          outline: none;
          display: block;
          cursor: pointer;
        }
        .arrows button svg {
          width: 100%;
          height: 100%;
          transform: translateY(-25%);
        }
        .arrows p {
          padding: 0 10px;
        }
        .image__description__room,
        .image__carousel__room {
          height: 500px;
          max-width: 500px;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default Rooms;
