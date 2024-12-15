import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <header className={`px-6 py-8 ${dark ? "bg-gray-800" : "bg-gray-50"}`}>
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>
      <main></main>
    </>
  );
}

export default App;
