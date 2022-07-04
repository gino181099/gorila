import Image from "next/image";

const Activities = () => {
  return (
    <section className="activities">
      <div className="actitivities__title">
        <h2>
          <span>NUESTRAS</span>
          <br />
          ACTIVIDADES
        </h2>
      </div>
      <div className="content">
        <p>
          ¡En gorilla Hostel puedes planear tu estadía y reservar tours con
          nosotros! Tenemos actividades de todos tipo incluyendo tours por la
          provincia, tours de vino y muchas más experiencias.{" "}
          <a>Ver Actividades</a>
        </p>
        <div className="img__content">
          <Image
            src="/activities.webp"
            alt="Imagen de Actividades"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <style jsx>{`
        .activities {
          background-color: #151515;
          padding: 100px 0;
        }
        .actitivities__title {
          padding: 10px 0;
          text-align: center;
          color: white;
        }
        h2 {
          font-size: 64px;
          font-weight: 300;
          text-align: center;
          line-height: 100%;
        }
        .actitivities__title span {
          font-size: 20px;
          color: #858f93;
          font-weight: 600;
          line-height: 100%;
          padding-bottom: 10px;
        }
        .content {
          display: flex;
          justify-content: space-between;
          padding: 0 100px 0;
          color: white;
          align-items: center;
          flex-wrap: wrap;
        }
        .img__content {
          max-width: 500px;
          width: 500px;
          height: 300px;
          position: relative;
          margin: 0px auto;
        }
        .content p {
          max-width: 500px;
          width: 500px;
          font-size: 20px;
          margin: 50px auto;
          font-weight: 300;
        }
        .content a {
          color: #40b9ed;
        }
        @media (max-width: 650px) {
          h2 {
            font-size: 2.5em;
          }
        }
        @media (max-width: 320px) {
          h2 {
            font-size: 2em;
          }
        }
      `}</style>
    </section>
  );
};

export default Activities;
