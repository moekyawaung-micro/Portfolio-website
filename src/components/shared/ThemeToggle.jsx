function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;
