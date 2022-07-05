import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity-server";

const ActivityComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img className="post-image" alt={value.alt || ""} src={urlFor(value)} />
      );
    },
  },
};

const Activity = ({ activity }) => {
  const { title, body, mainImage } = activity;
  return (
    <>
      {activity ? (
        <article className="activity-container">
          <div className="title">
            <h1>{title}</h1>
            <img
              className="main-image"
              alt={title + " imagen"}
              src={urlFor(mainImage)}
            />
          </div>
          <div className="content">
            <PortableText value={body} components={ActivityComponents} />
          </div>
        </article>
      ) : (
        "Error 404 Page Not Found"
      )}
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 64px;
          color: white;
          position: relative;
          z-index: 2;
        }
        .title {
          padding: 100px;
          position: relative;
        }
        .content {
          padding: 100px;
        }
        .main-image {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

const query = groq`*[_type == "activities" && slug.current == $slug][0] {
    title,
   
    body,
    mainImage,
}`;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "activities" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const activity = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  return {
    props: {
      activity,
    },
  };
}

export default Activity;
