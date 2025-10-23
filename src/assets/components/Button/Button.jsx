import './Button.css'




export default function Button({ children, onClick, active, className }) {
  return (
    <button
      className={`button ${active ? "active" : ""} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
