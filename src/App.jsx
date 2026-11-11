import Header from "./components/layout/Header";
import "./App.css";
import Footer from "./components/layout/Footer";

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

      <Footer />
    </div>
  );
}

export default App;