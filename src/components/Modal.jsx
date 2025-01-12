import React from "react";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index} className="text-blue-600 font-bold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 h-5/6 max-w-4xl overflow-y-auto scrollbar-hidden">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-6 right-6 text-4xl text-blue-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Titre principal */}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          {project.title}
        </h3>

        {/* Introduction */}
        {project.introduction && (
          <p className="mt-4 text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {formatText(project.introduction)}
          </p>
        )}

        {/* Catégories */}
        <div className="mt-6 space-y-8">
          {project.categories.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              {/* Barre horizontale pour séparer les catégories, sauf la première */}
              {categoryIndex > 0 && (
                <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-6" />
              )}

              <div>
                {/* Titre de la catégorie */}
                <h2 className="text-xl font-extrabold text-gray-800 dark:text-white mb-2">
                  {category.title}
                </h2>

                {/* Description de la catégorie */}
                {category.description && (
                  <p className="text-gray-800 dark:text-gray-200 mb-4">
                    {formatText(category.description)}
                  </p>
                )}

                {/* Sections ou sous-catégories */}
                {category.subcategories
                  ? category.subcategories.map(
                      (subcategory, subcategoryIndex) => (
                        <div key={subcategoryIndex} className="mb-6">
                          {/* Titre de la sous-catégorie */}
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                            {subcategory.title}
                          </h3>

                          {/* Sections de la sous-catégorie */}
                          {subcategory.sections.map((section, sectionIndex) => {
                            switch (section.type) {
                              case "text":
                                return (
                                  <p
                                    key={sectionIndex}
                                    className="text-gray-800 dark:text-gray-200 whitespace-pre-line"
                                  >
                                    {formatText(section.content)}
                                  </p>
                                );
                              case "subtext":
                                return (
                                  <p
                                    key={sectionIndex}
                                    className="text-gray-800 dark:text-gray-200 whitespace-pre-line"
                                  >
                                    {formatText(section.content)}
                                  </p>
                                );
                              case "littletitle":
                                return (
                                  <p
                                    key={sectionIndex}
                                    className="text-gray-800 dark:text-gray-200 pt-4"
                                  >
                                    {formatText(section.content)}
                                  </p>
                                );
                              case "firstline":
                                return (
                                  <ul
                                    key={sectionIndex}
                                    className="list-disc list-inside text-gray-800 dark:text-gray-200 pl-6"
                                  >
                                    <li>{formatText(section.content)}</li>
                                  </ul>
                                );
                              case "secondline":
                                return (
                                  <ul
                                    key={sectionIndex}
                                    className="list-disc list-inside text-gray-800 dark:text-gray-200 pl-12"
                                  >
                                    <li>{formatText(section.content)}</li>
                                  </ul>
                                );
                              case "table":
                                return (
                                  <table
                                    key={sectionIndex}
                                    className="w-full border-collapse mt-4 text-left"
                                  >
                                    <thead>
                                      <tr className="bg-gray-200 dark:bg-gray-700">
                                        {section.content.headers.map(
                                          (header, headerIndex) => (
                                            <th
                                              key={headerIndex}
                                              className="border border-gray-300 dark:border-gray-600 p-2 font-bold text-gray-800 dark:text-gray-200"
                                            >
                                              {header}
                                            </th>
                                          )
                                        )}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {section.content.rows.map(
                                        (row, rowIndex) => (
                                          <tr
                                            key={rowIndex}
                                            className={`${
                                              rowIndex % 2 === 0
                                                ? "bg-gray-50 dark:bg-gray-800"
                                                : "bg-white dark:bg-gray-900"
                                            }`}
                                          >
                                            {row.map((cell, cellIndex) => (
                                              <td
                                                key={cellIndex}
                                                className="border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-200"
                                              >
                                                {formatText(cell)}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </table>
                                );
                              default:
                                return null;
                            }
                          })}
                        </div>
                      )
                    )
                  : /* Sections directement dans la catégorie */
                    category.sections.map((section, sectionIndex) => {
                      switch (section.type) {
                        case "text":
                          return (
                            <p
                              key={sectionIndex}
                              className="text-gray-800 dark:text-gray-200 whitespace-pre-line"
                            >
                              {formatText(section.content)}
                            </p>
                          );
                        case "subtext":
                          return (
                            <p
                              key={sectionIndex}
                              className="text-gray-800 dark:text-gray-200 whitespace-pre-line"
                            >
                              {formatText(section.content)}
                            </p>
                          );
                        case "littletitle":
                          return (
                            <p
                              key={sectionIndex}
                              className="text-gray-800 dark:text-gray-200 pt-4"
                            >
                              {formatText(section.content)}
                            </p>
                          );
                          case "firstline":
                                return (
                                  <ul
                                    key={sectionIndex}
                                    className="list-disc list-inside text-gray-800 dark:text-gray-200 pl-6"
                                  >
                                    <li>{formatText(section.content)}</li>
                                  </ul>
                                );
                              case "secondline":
                                return (
                                  <ul
                                    key={sectionIndex}
                                    className="list-disc list-inside text-gray-800 dark:text-gray-200 pl-12"
                                  >
                                    <li>{formatText(section.content)}</li>
                                  </ul>
                                );
                        default:
                          return null;
                      }
                    })}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;