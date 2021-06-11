export const Senyor = (props) => {
  return (
    <article className="senyor col-8 offset-2 mb-4">
      <div className="row">
        <div className="avatar col">
          <img src="" className="img-fluid rounded-circle" width="214" alt="" />
          <span className="inicial text-center rounded-circle"></span>
        </div>
        <div className="info col">
          <h2 className="nombre-senyor"></h2>
          <ul className="datos list-unstyled mt-2">
            <li className="datos-profesion row">
              <span className="nombre-dato col-4">Profesión:</span>
              <span className="valor-dato col"></span>
            </li>
            <li className="datos-estado row">
              <span className="nombre-dato col-4">Estado:</span>
              <span className="valor-dato col"></span>
            </li>
            <li className="datos-twitter row">
              <span className="nombre-dato col-4">Twitter:</span>
              <span className="valor-dato col"></span>
            </li>
          </ul>
        </div>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};
