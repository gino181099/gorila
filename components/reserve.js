import { useState } from "react";

const Reserve = () => {
  const date = new Date();
  const curr_dateToday = (date.getDate() + 1).toString().padStart(2, "0");
  const curr_dateOutToday = (date.getDate() + 3).toString().padStart(2, "0");
  const curr_monthToday = (date.getMonth() + 1).toString().padStart(2, "0");
  const curr_yearToday = date.getFullYear();
  const checkInDate = `${curr_yearToday}-${curr_monthToday}-${curr_dateToday}`;
  const checkOutDate = `${curr_yearToday}-${curr_monthToday}-${curr_dateOutToday}`;
  const [checkIn, setCheckIn] = useState(checkInDate);
  const [checkOut, setCheckOut] = useState(checkOutDate);

  const onChangeCheckIn = (e) => {
    const newDate = new Date(e.target.value);
    let curr_date = (newDate.getDate() + 1).toString().padStart(2, "0");
    let curr_dateOut = (newDate.getDate() + 3).toString().padStart(2, "0");
    let curr_month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    let curr_year = newDate.getFullYear();
    const dateToPass = `${curr_year}-${curr_month}-${curr_date}`;
    const dateToPassOut = `${curr_year}-${curr_month}-${curr_dateOut}`;
    setCheckIn(dateToPass);
    setCheckOut(dateToPassOut);
  };
  const onChangeCheckOut = (e) => {
    const newDate = new Date(e.target.value);
    let curr_date = (newDate.getDate() + 1).toString().padStart(2, "0");
    let curr_month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    let curr_year = newDate.getFullYear();
    const dateToPass = `${curr_year}-${curr_month}-${curr_date}`;
    setCheckOut(dateToPass);
  };
  return (
    <div className="reserve">
      <div className="title__reserve">
        <h2>
          Reserva Ahora! <br />
        </h2>
        <p>
          En caso de viajar un grupo de varias personas, puedes contactarte
          directamente{" "}
          <a
            href="https://wa.me/+5492616806358"
            target="_blank"
            rel="noreferrer"
          >
            por aquí
          </a>
          , ofrecemos descuentos
        </p>
      </div>

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
          onChange={onChangeCheckIn}
          value={checkIn}
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
          onChange={onChangeCheckOut}
          value={checkOut}
        ></input>
        <a
          className="submit_link"
          target="_blank"
          href={`https://hotels.cloudbeds.com/es/reservation/vrb2dl?ga_sess_id=1641116198.1656893645#checkin=${checkIn}&amp;checkout=${checkOut}`}
          rel="noreferrer"
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
        .reserve .title__reserve h2 {
          font-size: 64px;
          font-weight: 300;
          line-height: 100%;
        }
        .reserve .title__reserve p {
          font-size: 12px;
          max-width: 500px;
        }
        .reserve .title__reserve a {
          color: blue;
          display: inline-block;
        }
        .dates_group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          max-width: 650px;
          font-size: 24px;
          font-weight: 300;
          border: 1px solid black;
          padding: 20px;
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
        @media (max-width: 1232px) {
          .reserve {
            justify-content: center;
          }
          .reserve .title__reserve {
            text-align: center;
          }
        }
        @media (max-width: 650px) {
          .reserve .title__reserve h2 {
            font-size: 2.5em;
          }
        }
        @media (max-width: 320px) {
          .reserve .title__reserve h2 {
            font-size: 2em;
          }
        }
      `}</style>
    </div>
  );
};

export default Reserve;
