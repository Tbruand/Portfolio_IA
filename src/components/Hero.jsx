import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-16 relative overflow-hidden">
      {/* Image de fond */}
      <picture>
        <source srcSet="./assets/img/banner.webp" media="(min-width: 768px)" />
        <source srcSet="./assets/img/banner_mobile.webp" media="(max-width: 768px)" />
        <img
          src="./banner.webp"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu du héros */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Mon Parcours : Entre Développement Web et Intelligence Artificielle
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white">
          Projets, cours et passion pour la tech : explorez mon univers de
          création et d'apprentissage.
        </p>
      </div>

      {/* Icône de souris */}
      <div className="absolute bottom-12 flex justify-center items-center">
        <div className="flex flex-col items-center space-y-2">
          {/* SVG pour l'icône de souris */}
          <div className="w-8 h-12 border-2 border-white rounded-full relative animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-scroll"></div>
          </div>
          <p className="text-white text-sm">Faites défiler</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
