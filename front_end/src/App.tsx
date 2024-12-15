import { useState } from "react";
import NavBar from "./components/NavBar";
import ProjectList from "./components/task_master/project_list";

function App() {
  const [dark, setDark] = useState(false);
  const projects = [
    { id: 1, title: "prj1" },
    { id: 2, title: "prj2" },
    { id: 3, title: "prj3" },
    { id: 4, title: "prj1" },
    { id: 5, title: "prj2" },
    { id: 6, title: "prj3" },
  ];

  return (
    <>
      <header className={`px-6 py-8 ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>
      <main className={`px-6 py-8 ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
        <ProjectList projects={projects} isDark={dark} />
      </main>
    </>
  );
}

export default App;
