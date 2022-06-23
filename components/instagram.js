import React from "react";

const Instagram = () => {
  return (
    <section className="instagram">
      <h2>
        <span>INSTAGRAM</span>
        <br />
        SÍGUENOS
      </h2>
      <div className="images__instagram"></div>
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
          background: black;
          height: 250px;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Instagram;
