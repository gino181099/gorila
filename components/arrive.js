import Image from "next/image";

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
      <div className="content">
        <div className="text__content">
          <h3>Desde el aeropuerto internacional El Plumerillo</h3>
          <p>
            Puede Ir desde el Aeropuerto de Mendoza al centro en Taxi / Uber /
            Cabify
          </p>
          <h4>En bus</h4>
          <p>
            El colectivo Línea 680 es recomendable de tomar si viajas solo o en
            pareja, ya que además de la ventaja de ser más barato que las otras
            opciones, también deberás cargar tus propias valijas durante todo el
            trayecto, y finalmente caminar hasta el hostel.
          </p>
        </div>
        <div className="image__content">
          <Image
            src="/aeropuerto.webp"
            alt="Aeropuerto el Plumerillo"
            width={500}
            height={438}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="content">
        <div className="image__content">
          <Image
            src="/terminal.webp"
            alt="Terminal de Mendoza"
            width={500}
            height={675}
            objectFit="cover"
          />
        </div>
        <div className="text__content">
          <h3>Desde la terminal Ómnibus de Mendoza</h3>
          <p>
            Puede Ir desde la terminal de Mendoza al centro en Taxi / Uber /
            Cabify
          </p>
          <h4>En bus</h4>
          <p>
            Podés tomarte : 201 o 200 frente a la terminal, en el Retorno ACA,
            parada: Arturo González y Elpidio González (Guaymallén, Mendoza)
            Parada: Av. Emilio Civit y Coronel Rodriguez caminar por Rodriguez 2
            cuadras y girar a la izquierda por Martin Zapata 50 mts
          </p>
          <h4>Caminando</h4>
          <p>
            La terminal está a 2,5km del hostel, y es todo recto: Vas por calle
            Alem, luego cambia de nombre al cruzar Av. San Martín a Montevideo y
            una vez que cruzás Belgrano cambia a Martín Zapata. ( es la misma
            calle que cambia de nombre, Mendoza es así )
          </p>
        </div>
      </div>
      <style jsx>{`
        h2 {
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
          padding: 100px 0 0;
        }
        h3 {
          font-size: 36px;
          max-width: 500px;
          padding-bottom: 25px;
        }
        h4 {
          padding-top: 25px;
          padding-bottom: 10px;
          max-width: 500px;
          font-size: 20px;
        }

        .content {
          display: flex;
          padding: 100px;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .content p {
          font-size: 20px;
          max-width: 500px;
        }
        .image__content {
          max-width: 500px;
          width: 500px;
          height: 300px;
        }
        .image__content img {
          height: 100%;
        }
        @media (max-width: 650px) {
          h2 {
            font-size: 2.5em;
          }
          h3 {
            font-size: 1.5em;
          }
          h4 {
            font-size: 1.25em;
          }
          .content p {
            font-size: 1em;
          }
          .content {
            padding: 100px 10px;
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

export default Arrive;
