import Header from "./components/layout/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="app-placeholder">
          <h1>Projeto Ramos</h1>
          <p>
          Site de apresentação da Liga Acadêmica
          de Computação.
          </p>          
        </section>
      </main>
    </div>
  );
}

export default App;