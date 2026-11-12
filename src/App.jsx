import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main id="conteudo" className="app-main">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;