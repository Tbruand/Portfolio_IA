import { useState } from "react";
import { PiMouseScroll } from "react-icons/pi";

const Portfolio = ({ tags, selectedTags, toggleTag, filteredProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id='portfolio'
      className='min-h-screen pt-24 pb-12 bg-gray-100 dark:bg-gray-900 px-4 md:px-16'
    >
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100'>
        My Work
      </h2>
      {/* Tags */}
      <div className='flex flex-wrap justify-center gap-4 mb-8'>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-lg ${
              selectedTags.includes(tag)
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            } hover:bg-blue-500 focus:outline-none`}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4'>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer'
            onClick={() => openModal(project)}
          >
            {/* Image Header */}
            <div className='aspect-w-1 aspect-h-1'>
              <img
                src={project.image || "./assets/img/placeholder.webp"}
                alt={project.title}
                className='object-cover w-full h-full'
              />
            </div>
            {/* Project Details */}
            <div className='p-4'>
              <h3 className='text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100'>
                {project.title}
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Tags: {project.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modale */}
      {selectedProject && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='relative bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 h-5/6 max-w-4xl relative overflow-y-auto scrollbar-hidden'>
            {/* Bouton de fermeture */}
            <button
              className='absolute top-6 right-6 text-4xl text-blue-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300'
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Contenu de la modale */}
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.image || "./assets/img/placeholder.webp"}
              alt={selectedProject.title}
              className='my-4 rounded-lg object-cover w-full'
            />

            {/* Tags sous l'image */}
            <div className='flex flex-wrap gap-2 mt-4'>
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className='px-3 py-1 border border-gray-400 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description du projet */}
            <p className='mt-4 text-gray-600 dark:text-gray-400'>
              {selectedProject.description || "No description available."}
            </p>

            {/* Icône de scroll */}
            <PiMouseScroll
              className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-600 dark:text-white hidden md:block'
              size={40}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
