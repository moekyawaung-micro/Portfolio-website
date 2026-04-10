import { useReveal } from "../../hooks/useReveal";

function Reveal({ children, className = "" }) {
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className={`reveal ${isVisible ? "revealed" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Reveal;
