import { useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { Senyor } from "./componentes/Senyor";
import { senyoresAPI } from "./senyores.js";
function App() {
  const [senyores, setSenyores] = useState([...senyoresAPI]);
  const getMarcados = () => senyores.filter((senyor) => senyor.marcado).length;
  const [marcados, setMarcados] = useState(getMarcados);
  const marcarTodos = (evento) => {
    evento.preventDefault();
    setMarcados(senyores.length);
    setSenyores(
      senyores.map((senyor) => {
        senyor.marcado = true;
        return senyor;
      })
    );
  };
  const switchMarcado = (senyorCambiar) =>
    setSenyores(
      senyores.map((senyor) => {
        if (senyor.id === senyorCambiar.id) {
          if (senyor.marcado) {
            senyor.marcado = false;
            setMarcados(marcados - 1);
          } else {
            senyor.marcado = true;
            setMarcados(marcados + 1);
          }
        }
        return senyor;
      })
    );
  return (
    <div className="contenedor-general container-xl">
      <Cabecera marcados={marcados} marcarTodos={marcarTodos} />
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
