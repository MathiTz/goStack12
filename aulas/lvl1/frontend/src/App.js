import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";

import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => setProjects(response.data));
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Front-end ${Data.now()}`,
      owner: "Matheus",
    });

    const project = response.data;

    setProjects([...projects, project]);

    // setProjects([...projects, `Novo projeto ${Data.now()}`]);
  }

  return (
    <>
      <Header title="HomePage" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
