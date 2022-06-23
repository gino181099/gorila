import Image from "next/image";
import { useState } from "react";

const Activities = () => {
  const [show, setShow] = useState(false);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <section className="activities">
      <div className="actitivities__title">
        <h2>
          <span>NUESTRAS</span>
          <br />
          ACTIVIDADES
        </h2>
      </div>
      <div className="activities__container">
        <div className="block">
          <Image
            src="/3.webp"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            style={{
              top: "0",
              left: "0",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: 1,
              filter: "brightness(0.5)",
            }}
          />
          <div className="title__block">TOURS DE VINO</div>
          <div className="cards__block">
            <div className="card">
              <Image
                src="/2.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                style={{
                  top: "0",
                  left: "0",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                }}
              />
            </div>
            <div className="card">
              <Image
                src="/1.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                style={{
                  top: "0",
                  left: "0",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
        {!show ? (
          ""
        ) : (
          <div className="block">
            <Image
              src="/1.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              style={{
                top: "0",
                left: "0",
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: 1,
                filter: "brightness(0.5)",
              }}
            />
            <div className="cards__block">
              <div className="card">
                <Image
                  src="/3.webp"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  style={{
                    top: "0",
                    left: "0",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                  }}
                />
              </div>
              <div className="card">
                <Image
                  src="/2.webp"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  style={{
                    top: "0",
                    left: "0",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                  }}
                />
              </div>
            </div>
            <div className="title__block">ACTIVIDADES</div>
          </div>
        )}

        <button className="more" onClick={showMore}>
          Ver {!show ? "más" : "menos"}
        </button>
      </div>
      <style jsx>{`
        .actitivities__title {
          padding: 10px 0;
          text-align: center;
          color: white;
          background-color: #151515;
        }
        .actitivities__title h2 {
          font-size: 64px;
          font-weight: 300;
          text-align: center;
          padding-bottom: 50px;
          line-height: 100%;
        }
        .actitivities__title span {
          font-size: 20px;
          color: #858f93;
          font-weight: 600;
          line-height: 100%;
          padding-bottom: 10px;
        }
        .activities__container {
          position: relative;
        }
        .block {
          padding: 100px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          background-color: black;
          color: white;
          justify-content: space-between;
          position: relative;
        }
        .cards__block {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }
        .cards__block .card {
          width: 400px;
          max-width: 400px;
          height: 500px;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;
        }
        .title__block {
          font-size: 48px;
          max-width: 300px;
          font-weight: 300;
          position: relative;
        }
        .more {
          color: white;
          border: none;
          outline: none;
          background: transparent;
          font-size: 24px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Activities;
