import { useState } from "react";
import NavBar from "./components/NavBar";
import ProjectList from "./components/task_master/ProjectList";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`min-h-screen ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
      <header className={`px-6 py-8`}>
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>
      <main className={`px-6 py-8`}>
        <ProjectList isDark={dark} />
      </main>
    </div>
  );
}

export default App;
