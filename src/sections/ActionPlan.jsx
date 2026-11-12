import SectionTitle from "../components/ui/SectionTitle";
import { actionPlanSteps } from "../data/content";

import "./ActionPlan.css";

function ActionPlan() {
  return (
    <section id="plano" className="action-plan">
      <div className="wrap">

        <SectionTitle
          label="03 / DA PROPOSTA À PRÁTICA"
          description="Plano sugerido para um primeiro ciclo de seis semanas. Datas, carga de trabalho e disponibilidade ainda precisam ser acordadas."
        >
          Uma frente de cada vez.
        </SectionTitle>

        <div className="roadmap">
          {actionPlanSteps.map((step) => (
            <article key={step.period}>
              <span>{step.period}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <small>
                Saída: {step.output}
              </small>
            </article>
          ))}
        </div>

        <div className="metrics">
          <h3>Como saber se vale continuar?</h3>

          <p>
            Metas propostas, não resultados: ao menos
            75% dos participantes presentes em três
            encontros; ao menos 70% explicando uma
            condição e testando seu limite ao final.
            Comparar um desafio inicial e final
            equivalente, registrar dificuldades e
            ajustar o piloto se as metas não forem
            atingidas.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ActionPlan;
