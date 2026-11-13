import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import PrinciplesBar from "./sections/PrinciplesBar";
import Proposal from "./sections/Proposal";
import PilotTrail from "./sections/PilotTrail";
import ActionPlan from "./sections/ActionPlan";
import Team from "./sections/Team";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main id="conteudo" className="app-main">
        <Hero />
        <PrinciplesBar />
        <Proposal />
        <PilotTrail />
        <ActionPlan />
        <Team />
      </main>

      <Footer />
    </div>
  );
}

export default App;