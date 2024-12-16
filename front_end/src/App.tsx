import { useState } from "react";
import NavBar from "./components/NavBar";
import ProjectList from "./components/task_master/ProjectList";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <header className={`px-6 py-8 ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>
      <main className={`px-6 py-8 ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
        <ProjectList isDark={dark} />
      </main>
    </>
  );
}

export default App;
