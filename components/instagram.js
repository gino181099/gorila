import Image from "next/image";

const Instagram = () => {
  return (
    <section className="instagram">
      <h2>
        <span>INSTAGRAM</span>
        <br />
        SÍGUENOS
      </h2>
      <a
        href="https://www.instagram.com/gorillahostel/"
        target="_blank"
        rel="noreferrer"
        className="images__instagram"
      >
        <div className="image">
          <Image
            src="/instagram1.webp"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="image">
          <Image
            src="/instagram2.webp"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="image">
          <Image
            src="/instagram3.webp"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="image">
          <Image
            src="/instagram4.webp"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="image">
          <Image
            src="/instagram5.webp"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
      <style jsx>{`
        .instagram {
          padding: 100px 0;
        }
        h2 {
          font-size: 64px;
          font-weight: 300;
          text-align: center;
          line-height: 100%;
        }
        span {
          font-size: 20px;
          color: #858f93;
          font-weight: 600;
          line-height: 100%;
          padding-bottom: 10px;
        }
        .images__instagram {
          display: flex;
          width: calc(100vw - 200px);
          margin: 100px auto 0;
          overflow: hidden;
          flex-wrap: wrap;
          justify-content: center;
        }
        .image {
          width: 260px;
          max-width: 260px;
          height: 260px;
          overflow: hidden;
          position: relative;
          transition: 0.75s;
        }
        .image:hover {
          transform: scale(1.1);
        }
        @media (max-width: 650px) {
          h2 {
            font-size: 2.5em;
          }
        }
        @media (max-width: 600px) {
          .images__instagram {
            width: 90%;
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

export default Instagram;
