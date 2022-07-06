import Image from "next/image";

const Arrive = ({ t }) => {
  return (
    <section className="arrive">
      <div className="title__arrive">
        <h2>
          <span>{t.como}</span>
          <br />
          {t.llegar}
        </h2>
      </div>
      <div className="content">
        <div className="text__content">
          <h3>{t.aeropuertoTitulo}</h3>
          <p>{t.aeropuertoDescripcion}</p>
          <h4>{t.bus}</h4>
          <p>{t.aeropuertoBus}</p>
        </div>
        <div className="image__content one">
          <Image
            src="/aeropuerto.webp"
            alt="Aeropuerto el Plumerillo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="content">
        <div className="image__content two">
          <Image
            src="/terminal.webp"
            alt="Terminal de Mendoza"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text__content">
          <h3>{t.terminalTitulo}</h3>
          <p>{t.terminalDescripcion}</p>
          <h4>{t.bus}</h4>
          <p>{t.terminalBus}</p>
          <h4>{t.caminando}</h4>
          <p>{t.terminalCaminado}</p>
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 64px;
          font-weight: 300;
          text-align: center;
          line-height: 100%;
        }
        .title__arrive span {
          font-size: 20px;
          color: #858f93;
          font-weight: 600;
          line-height: 100%;
          padding-bottom: 10px;
        }
        .arrive {
          padding: 100px 0 0;
        }
        h3 {
          font-size: 36px;
          max-width: 500px;
          padding-bottom: 25px;
        }
        h4 {
          padding-top: 25px;
          padding-bottom: 10px;
          max-width: 500px;
          font-size: 20px;
        }

        .content {
          display: flex;
          padding: 100px;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .content p {
          font-size: 20px;
          max-width: 500px;
        }
        .image__content.one {
          width: 500px;
          max-width: 500px;
          height: 438px;
          position: relative;
        }
        .image__content.two {
          width: 500px;
          max-width: 500px;
          height: 675px;
          position: relative;
        }

        @media (max-width: 1216px) {
          .content {
            justify-content: center;
            gap: 2em;
          }
          .text__content:nth-child(2) {
            order: -1;
          }
          .image__content.one {
            height: 300px;
          }
          .image__content.two {
            height: 300px;
          }
        }
        @media (max-width: 650px) {
          h2 {
            font-size: 2.5em;
          }
          h3 {
            font-size: 1.5em;
          }
          h4 {
            font-size: 1.25em;
          }
          .content p {
            font-size: 1em;
          }
        }
        @media (max-width: 600px) {
          .content {
            padding: 100px 10px;
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

export default Arrive;
