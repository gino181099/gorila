const Reserve = () => {
  return (
    <div className="reserve">
      <p className="title__reserve">Reserva Ahora!</p>
      <style jsx>{`
        .reserve {
          display: flex;
          padding: 100px 50px;
          justify-content: space-between;
        }
        .reserve .title__reserve {
          font-size: 64px;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Reserve;
