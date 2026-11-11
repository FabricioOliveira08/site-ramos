
import "./Accordion.css";

function Accordion({
  number,
  title,
  subtitle,
  children,
  defaultOpen = false,
}) {
  return (
    <details className="accordion" open={defaultOpen}>
      <summary>
        <span>{number}</span>

        <div>
          {title}
          <small>{subtitle}</small>
        </div>

        <b aria-hidden="true">+</b>
      </summary>

      <div className="module-body">
        {children}
      </div>
    </details>
  );
}

export default Accordion;
