import SectionTitle from "../components/ui/SectionTitle";
import Accordion from "../components/ui/Accordion";
import { pilotModules } from "../data/content";

import "./PilotTrail.css";

function PilotTrail() {
  return (
    <section id="trilha" className="section soft pilot-trail">
      <div className="wrap">

        <SectionTitle
          label="02 / TRILHA PILOTO"
          description="Formato sugerido para validação pelo trio e pelos professores: 8 a 12 participantes, quatro encontros de 60 minutos."
        >
          Quatro encontros.
          <br />
          Do raciocínio à demonstração.
        </SectionTitle>

        <div className="modules">
          {pilotModules.map((module, index) => (
            <Accordion
              key={module.number}
              number={module.number}
              title={module.title}
              subtitle={module.subtitle}
              defaultOpen={index === 0}
            >
              {module.details.map((detail) => (
                <p key={detail.label}>
                  <strong>{detail.label}:</strong>{" "}
                  {detail.text}
                </p>
              ))}

              {module.schedule && (
                <p className="timing">
                  {module.schedule}
                </p>
              )}
            </Accordion>
          ))}
        </div>

        <div className="access-box">
          <h3>Diferentes formas de aprender</h3>

          <p>
            Instruções curtas, exemplos concretos,
            linguagem direta, ritmo ajustável e
            alternativas por texto ou explicação oral.
            As adaptações devem partir das necessidades
            de cada participante.
          </p>
        </div>

      </div>
    </section>
  );
}

export default PilotTrail;
