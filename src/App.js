import { Cabecera } from "./componentes/Cabecera";
import { Senyor } from "./componentes/Senyor";
import { senyoresAPI as senyores } from "./senyores.js";
function App() {
  return (
    <div className="contenedor-general container-xl">
      <Cabecera />
      <main className="principal mt-2 row">
        {senyores.map((senyor) => (
          <Senyor key={senyor.id} senyor={senyor} />
        ))}
      </main>
    </div>
  );
}

export default App;
