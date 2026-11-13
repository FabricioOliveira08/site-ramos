import SectionTitle from "../components/ui/SectionTitle";
import { teamMembers } from "../data/content";

import "./Team.css";

function Team() {
  return (
    <section id="equipe" className="wrap section team-section">

      <SectionTitle
        label="04 / QUEM COLOCA DE PÉ"
        description="Frentes iniciais baseadas no alinhamento das reuniões. A divisão final e o tempo disponível serão confirmados pelo grupo."
      >
        Três pessoas.
        <br />
        Responsabilidades claras.
      </SectionTitle>

      <div className="three team">
        {teamMembers.map((member) => (
          <article key={member.initials}>
            <span className="avatar">
              {member.initials}
            </span>

            <h3>{member.name}</h3>

            <span className="role">
              {member.role}
            </span>

            <p>{member.description}</p>
          </article>
        ))}
      </div>

      <div className="note">
        <strong>
          Acordo de funcionamento sugerido:
        </strong>{" "}
        uma conversa semanal de 30 minutos, tarefas
        pequenas com responsável e prazo, e registro
        compartilhado das decisões. Novos colaboradores
        entram quando houver uma necessidade concreta.
      </div>

    </section>
  );
}

export default Team;
