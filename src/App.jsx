import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import projectsData from "./projects.json";

const App = () => {
  // État du mode sombre
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference !== null) {
      return storedPreference === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [activeSection, setActiveSection] = useState("");
  const [selectedTags, setSelectedTags] = useState(["ALL"]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // Projet sélectionné pour la modale

  const tags = ["ALL", "Web", "IA", "Python", "Cours", "Article"];

  // Gestion du mode sombre
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const rootElement = document.getElementById("root");
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Écoute les changements de préférence système
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Filtrer les projets en fonction des tags sélectionnés
  useEffect(() => {
    if (selectedTags.includes("ALL")) {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        )
      );
    }
  }, [selectedTags]);

  // Gérer l'observation des sections pour activer le scrollspy
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Met à jour l'état avec l'ID de la section visible
          }
        });
      },
      { threshold: 0.5 } // Section visible à 50%
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Basculer entre les modes sombre et clair
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Basculer les tags sélectionnés
  const toggleTag = (tag) => {
    if (tag === "ALL") setSelectedTags(["ALL"]);
    else {
      setSelectedTags((prev) =>
        prev.includes(tag)
          ? prev.filter((t) => t !== tag)
          : [...prev.filter((t) => t !== "ALL"), tag]
      );
    }
  };

  return (
    <div className={`font-sans ${darkMode ? "dark" : ""}`}>
      <Header
        activeSection={activeSection}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Hero />
      <About />
      <Portfolio
        tags={tags}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        filteredProjects={filteredProjects}
        onProjectClick={setSelectedProject} // Gérer le clic pour ouvrir une modale
      />
      <Contact />
      <Footer />
      {/* Modale pour afficher les détails du projet */}
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
