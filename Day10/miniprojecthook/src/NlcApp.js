import { ThemeProvider } from "./context/NlcThemeContext";
import NlcTodoList from "./Components/NlcTodoList";
import NlcThemeToggle from "./Components/NlcThemeToggle";


function NlcApp() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1 className="title">Mini Project</h1>
        <h2>Quản Lý Công Việc</h2>
        <NlcThemeToggle />
        <NlcTodoList />
      </div>
    </ThemeProvider>
  );
}

export default NlcApp;