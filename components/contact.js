import React from "react";

const Contacto = () => {
  return (
    <section>
      <div className="contact__title">
        <h2>
          <span>DATOS DE</span>
          <br />
          CONTACTO
        </h2>
      </div>
      <div className="contact__content">
        <div className="info">
          <ul>
            <li>
              <p>
                Teléfono: <a>+54 9 261 0806 358</a>
              </p>
            </li>
            <li>
              <p>
                Email: <a>hostelgorilla@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                Dirección: <a>Martín Zapata 155 · Ciudad · Mza · ARG</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2950580636825!2d-68.85448778496745!3d-32.89036628093796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09042415c513%3A0xf90c35f15ad3b0d7!2sGorilla%20Hostel!5e0!3m2!1ses!2sar!4v1656945418379!5m2!1ses!2sar"
            width="500"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: #151515;
          padding: 100px;
        }
        .contact__title h2 {
          font-size: 64px;
          font-weight: 300;
          text-align: center;
          line-height: 100%;
          color: white;
        }
        .contact__title span {
          font-size: 20px;
          color: #858f93;
          font-weight: 600;
          line-height: 100%;
          padding-bottom: 10px;
        }
        .contact__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          color: white;
          padding-top: 100px;
        }
        ul {
          list-style: none;
          font-size: 28px;
        }
        ul li p {
          display: block;
          max-width: 600px;
          padding: 5px 0;
        }
        ul a {
          color: #40b9ed;
          display: inline-block;
        }
        iframe {
          border: none;
        }
      `}</style>
    </section>
  );
};

export default Contacto;
