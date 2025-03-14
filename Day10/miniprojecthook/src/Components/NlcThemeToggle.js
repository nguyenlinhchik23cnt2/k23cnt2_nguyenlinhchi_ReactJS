
import { useTheme } from "../context/NlcThemeContext";

export default function NlcThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Chuyển sang {theme === "light" ? "Tối" : "Sáng"}</button>;
}
