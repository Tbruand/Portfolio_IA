import React from "react";

const Portfolio = ({
  tags,
  selectedTags,
  toggleTag,
  filteredProjects,
  onProjectClick,
}) => {
  return (
    <section
      id="portfolio"
      className="min-h-screen pt-24 pb-12 bg-gray-100 dark:bg-darkmode px-4 md:px-16"
    >
      {/* Titre de la section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        My Work
      </h2>

      {/* Filtres par tags */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-lg ${
              selectedTags.includes(tag)
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-darkmode_400 text-gray-800 dark:text-gray-200"
            } hover:bg-blue-500 focus:outline-none`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grille des projets */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-darkmode_500 border border-gray-200 dark:border-darkmode_400 rounded-lg shadow-md overflow-hidden flex flex-col h-80 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => onProjectClick(project)}
          >
            {/* Image du projet */}
            <div className="h-[60%] overflow-hidden">
              <img
                src={project.image || "./assets/img/placeholder.webp"}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Détails du projet */}
            <div className="h-[40%] p-4 flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tags: {project.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
