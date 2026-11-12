
import { firstCycleSteps } from "../data/content";
import "./FirstCycle.css";

function FirstCycle() {
  return (
    <div className="path-board">

      <div className="board-head">
        <span>O PRIMEIRO CICLO</span>
        <span>01 / 04</span>
      </div>

      {firstCycleSteps.map((step) => (
        <div className="path-row" key={step.number}>
          <span className="path-num">
            {step.number}
          </span>

          <div className="path-info">
            {step.label && (
                <span className="tag">
                    {step.label}
                </span>
            )}

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}

      <div className="board-foot">
        <span>MENOS DISPERSÃO.</span>
        <strong>Mais primeiros passos.</strong>
      </div>

    </div>
  );
}

export default FirstCycle;
