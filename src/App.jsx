import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

  const tags = ["ALL", "Web", "IA", "Python", "Cours"];

  // Applique automatiquement le mode sombre ou clair en fonction de l'état
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const rootElement = document.getElementById("root");
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);
  // Écoute les changements de préférence système et met à jour l'état
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const projects = [
      { id: 1, title: "Portfolio Website", tags: ["Web", "Python"] },
      { id: 2, title: "AI Cancer Detection", tags: ["IA", "Python"] },
      { id: 3, title: "E-commerce Platform", tags: ["Web"] },
      { id: 4, title: "Math Lessons App", tags: ["Cours", "Python"] },
      { id: 5, title: "ChatGPT Clone", tags: ["IA", "Web"] },
    ];
    if (selectedTags.includes("ALL")) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        )
      );
    }
  }, [selectedTags]);

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

  // Fonction pour basculer manuellement entre le mode sombre et clair
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
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
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
