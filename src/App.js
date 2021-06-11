import { useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { Senyor } from "./componentes/Senyor";
import { senyoresAPI } from "./senyores.js";
function App() {
  const [senyores, setSenyores] = useState([...senyoresAPI]);
  const switchMarcado = (marcado) => {
    marcado ? (marcado = false) : (marcado = true);
  };
  return (
    <div className="contenedor-general container-xl">
      <Cabecera />
      <main className="principal mt-2 row">
        {senyores.map((senyor) => (
          <Senyor
            key={senyor.id}
            senyor={senyor}
            switchMarcado={switchMarcado}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
