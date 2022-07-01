import React from "react";

const Arrive = () => {
  return (
    <section className="arrive">
      <div className="title__arrive">
        <h2>
          <span>CÓMO</span>
          <br />
          LLEGAR AL HOSTEL
        </h2>
      </div>
      <style jsx>{`
        .title__arrive h2 {
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
          padding: 100px 0;
        }
      `}</style>
    </section>
  );
};

export default Arrive;
