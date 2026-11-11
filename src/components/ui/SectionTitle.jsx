
import "./SectionTitle.css";

function SectionTitle({ label, children, description }) {
  return (
    <div className="section-title">
      {label && (
        <p className="section-title__label">
          {label}
        </p>
      )}

      <h2 className="section-title__heading">
        {children}
      </h2>

      {description && (
        <p className="section-title__description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
