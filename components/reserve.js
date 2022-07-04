import { useState } from "react";

const Reserve = () => {
  const [checkIn, setCheckIn] = useState("2022-07-03");
  const [checkOut, setCheckOut] = useState("2022-07-03");
  return (
    <div className="reserve">
      <p className="title__reserve">Reserva Ahora!</p>

      <div className="dates_group">
        <label
          className="control-label"
          htmlFor="widget_date_3816"
          title="Llegada"
        >
          Llegada
        </label>
        <input
          type="date"
          name="start_date_mobile"
          className="date_mobile widget_hide"
          id="start_date_mobile"
        ></input>
        <label
          className="control-label"
          htmlFor="widget_date_to4465"
          title="Salida"
        >
          Salida
        </label>
        <input
          type="date"
          name="end_date_mobile"
          className="date_mobile widget_hide"
          id="end_date_mobile"
        ></input>
        <a
          className="submit_link"
          target="_blank"
          href="https://hotels.cloudbeds.com/es/reservation/vrb2dl?ga_sess_id=1641116198.1656893645#checkin=2022-07-03&amp;checkout=2022-07-04"
        >
          Ir
        </a>
      </div>

      <style jsx>{`
        .reserve {
          display: flex;
          padding: 100px 50px;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 25px;
        }
        .reserve .title__reserve {
          font-size: 64px;
          font-weight: 300;
          line-height: 100%;
        }
        .dates_group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          max-width: 615px;
          width: 615px;
          font-size: 24px;
          font-weight: 300;
          border: 1px solid black;
          padding-left: 15px;
          padding-top: 5px;
          padding-bottom: 5px;
          border-radius: 50px;
          gap: 1em;
        }
        .dates_group input {
          border: none;
        }
        .dates_group a {
          padding: 15px 25px;
          border-radius: 50%;
          background: #45add9;
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
};

export default Reserve;
