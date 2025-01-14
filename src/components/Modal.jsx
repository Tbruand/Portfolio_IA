import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong
          key={index}
          className='text-blue-600 dark:text-gray-100 font-bold'
        >
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='relative bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 h-5/6 max-w-4xl overflow-y-auto scrollbar-hidden'>
        {/* Bouton de fermeture */}
        <button
          className='absolute top-6 right-6 text-4xl text-blue-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300'
          onClick={onClose}
        >
          ✕
        </button>

        {/* Titre principal */}
        <h3 className='text-4xl font-bold text-gray-800 dark:text-white break-words leading-tight'>
          {project.title}
        </h3>

        {/* Disclaimer */}
        {project.disclaimer && (
          <div className='text-2xl font-bold text-red-800 dark:text-red-400 mt-4'>
            <p className='text-sm'>{formatText(project.disclaimer)}</p>
          </div>
        )}

        {/* Introduction */}
        {project.introduction && (
          <p className='mt-4 text-gray-800 dark:text-gray-200 whitespace-pre-line'>
            {formatText(project.introduction)}
          </p>
        )}

        {/* Catégories */}
        <div className='mt-6 space-y-8'>
          {project.categories.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              {/* Barre horizontale pour séparer les catégories, sauf la première */}
              {categoryIndex > 0 && (
                <hr className='border-t-2 border-gray-300 dark:border-gray-600 my-6' />
              )}
              <div>
                {/* Titre de la catégorie */}
                <h2 className='text-xl font-extrabold text-gray-800 dark:text-white mb-2'>
                  {category.title}
                </h2>

                {/* Description de la catégorie */}
                {category.description && (
                  <p className='text-gray-800 dark:text-gray-200 mb-4'>
                    {formatText(category.description)}
                  </p>
                )}

                {/* Sections ou sous-catégories */}
                {category.subcategories
                  ? category.subcategories.map(
                      (subcategory, subcategoryIndex) => (
                        <div key={subcategoryIndex} className='mb-6'>
                          <h3 className='text-lg font-bold text-gray-800 dark:text-white mb-2'>
                            {subcategory.title}
                          </h3>
                          {subcategory.sections.map((section, sectionIndex) => {
                            switch (section.type) {
                              case "text":
                                return (
                                  <p
                                    key={sectionIndex}
                                    className='text-gray-800 dark:text-gray-200 whitespace-pre-line'
                                  >
                                    {formatText(section.content)}
                                  </p>
                                );
                              case "subtext":
                                return (
                                  <p
                                    key={sectionIndex}
                                    className='text-gray-600 dark:text-gray-400 whitespace-pre-line'
                                  >
                                    {formatText(section.content)}
                                  </p>
                                );
                              case "littletitle":
                                return (
                                  <p
                                    key={sectionIndex}
                                    className='text-gray-800 dark:text-gray-200 font-semibold pt-4'
                                  >
                                    {formatText(section.content)}
                                  </p>
                                );
                              case "firstline":
                                return (
                                  <ul
                                    key={sectionIndex}
                                    className='list-disc list-inside text-gray-800 dark:text-gray-200 pl-6'
                                  >
                                    <li>{formatText(section.content)}</li>
                                  </ul>
                                );
                              case "secondline":
                                return (
                                  <ul
                                    key={sectionIndex}
                                    className='list-disc list-inside text-gray-800 dark:text-gray-200 pl-12'
                                  >
                                    <li>{formatText(section.content)}</li>
                                  </ul>
                                );
                              case "img":
                                return (
                                  <div
                                    key={sectionIndex}
                                    className='flex justify-center mt-4 mb-4'
                                  >
                                    <img
                                      src={section.content}
                                      alt='Section Image'
                                      className='w-full sm:w-2/3 h-auto object-cover'
                                    />
                                  </div>
                                );
                              case "code":
                                return (
                                  <div key={sectionIndex} className='mt-4'>
                                    <SyntaxHighlighter
                                      language={section.language || "python"}
                                      style={vscDarkPlus}
                                      className='rounded-lg'
                                    >
                                      {section.content}
                                    </SyntaxHighlighter>
                                  </div>
                                );
                              case "liengithub":
                                return (
                                  <div key={sectionIndex} className='mt-4 mb-4'>
                                    <a
                                      href={section.content}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600'
                                    >
                                      Lien vers GitHub
                                    </a>
                                  </div>
                                );
                              case "table":
                                return (
                                  <table
                                    key={sectionIndex}
                                    className='w-full border-collapse mt-4 mb-4 text-left'
                                  >
                                    <thead>
                                      <tr className='bg-gray-200 dark:bg-gray-700'>
                                        {section.content.headers.map(
                                          (header, headerIndex) => (
                                            <th
                                              key={headerIndex}
                                              className='border border-gray-300 dark:border-gray-600 p-2 font-bold text-gray-800 dark:text-gray-200'
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
                                                className='border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-200'
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
                  : category.sections.map((section, sectionIndex) => {
                      switch (section.type) {
                        case "text":
                          return (
                            <p
                              key={sectionIndex}
                              className='text-gray-800 dark:text-gray-200 whitespace-pre-line'
                            >
                              {formatText(section.content)}
                            </p>
                          );
                        case "code":
                          return (
                            <div key={sectionIndex} className='mt-4'>
                              <SyntaxHighlighter
                                language={section.language || "python"}
                                style={vscDarkPlus}
                                className='rounded-lg'
                              >
                                {section.content}
                              </SyntaxHighlighter>
                            </div>
                          );
                        case "firstline":
                          return (
                            <ul
                              key={sectionIndex}
                              className='list-disc list-inside text-gray-800 dark:text-gray-200 pl-6'
                            >
                              <li>{formatText(section.content)}</li>
                            </ul>
                          );
                        case "secondline":
                          return (
                            <ul
                              key={sectionIndex}
                              className='list-disc list-inside text-gray-800 dark:text-gray-200 pl-12'
                            >
                              <li>{formatText(section.content)}</li>
                            </ul>
                          );
                        case "liengithub":
                          return (
                            <div key={sectionIndex} className='mt-4 mb-4'>
                              <a
                                href={section.content}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600'
                              >
                                Lien vers GitHub
                              </a>
                            </div>
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
