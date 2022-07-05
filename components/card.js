import { urlFor } from "../lib/sanity";

const Card = ({ activity }) => {
  const { title, price, description, mainImage, slug } = activity;
  return (
    <div className="card">
      <div className="card__img">
        <img
          className="main-image"
          alt={title + " imagen"}
          src={urlFor(mainImage)}
        />
      </div>
      <div className="card__content">
        <div className="card__title">
          <h3>{title}</h3>
        </div>
        <div className="card__price">
          <p>{price == null ? "Variado" : `$${price}`}</p>
        </div>
        <div className="card__description">
          <p>{description}</p>
          <a href={`/activities/${slug.current}`}>Ver más</a>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-wrap: wrap;
          gap: 2em;
          text-align: end;
          justify-content: space-between; 
        }
        .card:nth-child(2n) .card__content {
          order: -1;
        }
        .card img {
          width: 300px;
          height: 300px;
          object-fit: cover;
        }
        .card__content {
          position: relative;
          color: black;
          display: flex;
          flex-direction: column;
          align-items: flex-end
        }
        a{
            color: #2097cb;
            cursor: pointer;
        }
        h3 {
          color: white;
          background: #2097cb;
          border-radius: 25px;
          padding: 10px 25px;
          display: block;
          width: auto
          font-size: 1.5em;
          font-weight: 500;
          max-width: 300px
        }
        p {
          max-width: 300px;
        }
        .card__price p{
            font-size: 2em;
            color: #151515;
            font-weight: 500
        }
      `}</style>
    </div>
  );
};

export default Card;
