import { useState } from "react";

export const Senyor = (props) => {
  const {
    senyor: { nombre, profesion, foto, estado, twitter, marcado },
  } = props;
  const getInicial = () => {
    const partesNombre = nombre.split(" ");
    const posicion = partesNombre[0].length > 2 ? 0 : 1;
    return partesNombre[posicion].charAt(0).toUpperCase();
  };
  const [inicial, setInicial] = useState(getInicial);
  return (
    <article className="senyor col-8 offset-2 mb-4">
      <div className="row">
        <div className="avatar col">
          <img
            src={`img/${foto}`}
            className="img-fluid rounded-circle"
            width="214"
            alt={`${nombre} me apunta con el dedo.`}
          />
          <span className="inicial text-center rounded-circle">{inicial}</span>
        </div>
        <div className="info col">
          <h2 className="nombre-senyor">{nombre}</h2>
          <ul className="datos list-unstyled mt-2">
            <li className="datos-profesion row">
              <span className="nombre-dato col-4">Profesión:</span>
              <span className="valor-dato col">{profesion}</span>
            </li>
            <li className="datos-estado row">
              <span className="nombre-dato col-4">Estado:</span>
              <span className="valor-dato col">{estado}</span>
            </li>
            <li className="datos-twitter row">
              <span className="nombre-dato col-4">Twitter:</span>
              <span className="valor-dato col">{twitter}</span>
            </li>
          </ul>
        </div>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};
