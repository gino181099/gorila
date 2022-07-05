import Card from "../../components/card";
import { getClient } from "../../lib/sanity-server";
import groq from "groq";

const Activities = ({ bodegas, tradicionales, aventuras }) => {
  return (
    <main>
      <div>
        <h2>Actividades</h2>
      </div>
      <div className="cards">
        <p className="category">Tours de Bodega</p>
        {bodegas?.map((bodega) => (
          <>
            <Card activity={bodega} key={bodega._id} />
          </>
        ))}
      </div>
      <div className="cards">
        <p className="category">Tradicionales</p>
        {tradicionales?.map((tradicional) => (
          <>
            <Card activity={tradicional} key={tradicional._id} />
          </>
        ))}
      </div>
      <div className="cards">
        <p className="category">Tours de Aventura</p>
        {aventuras?.map((aventura) => (
          <>
            <Card activity={aventura} key={aventura._id} />
          </>
        ))}
      </div>
      <style jsx>{`
        main {
          padding: 0 0 100px;
        }
        h2 {
          padding: 100px;
          color: white;
          background-color: #151515;
          text-align: center;
          font-size: 64px;
          font-weight: 300;
          margin-bottom: 100px;
        }
        .cards {
          padding: 50px 10px 0;
          display: flex;
          flex-direction: column;
          gap: 5em;
          align-items: center;
        }
        .category {
          font-size: 2.5em;
        }
        @media (max-width: 650px) {
          h2 {
            font-size: 2.5em;
          }
          .category {
            font-size: 2em;
          }
        }
        @media (max-width: 600px) {
          section {
            padding: 100px 10px;
          }
        }
        @media (max-width: 320px) {
          h2 {
            font-size: 2em;
          }
          .category {
            font-size: 1.5em;
          }
        }
      `}</style>
    </main>
  );
};

export async function getStaticProps({ preview = false }) {
  const bodegas = await getClient(preview).fetch(groq`
    *[_type == "activities" && "Tours de Bodegas" in categories[]->title] | order(price asc)  {
      _id,
      title,
      mainImage,
      price,
      description,
      slug
    }
  `);
  const tradicionales = await getClient(preview).fetch(groq`
    *[_type == "activities"  && "Tradicionales" in categories[]->title] | order(price asc)  {
      _id,
      title,
      mainImage,
      price,
      description,
      slug
    }
  `);
  const aventuras = await getClient(preview).fetch(groq`
    *[_type == "activities"  && "Tours de Aventura" in categories[]->title] | order(price asc)  {
      _id,
      title,
      mainImage,
      price,
      description,
      slug
    }
  `);
  return {
    props: {
      bodegas,
      tradicionales,
      aventuras,
    },
  };
}

export default Activities;
