
import "./Button.css";

function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const buttonClass =
    `ramos-button ramos-button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
