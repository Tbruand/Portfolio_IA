const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-16 relative">
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
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Mon Parcours : Entre Développement Web et Intelligence Artificielle
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white">
            Projets, cours et passion pour la tech : explorez mon univers de
            création et d'apprentissage.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  