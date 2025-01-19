import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const stacks = [
    { name: "React", logo: "/assets/logos/react.svg" },
    { name: "HTML", logo: "/assets/logos/html.svg" },
    { name: "CSS", logo: "/assets/logos/css.svg" },
    { name: "MySQL", logo: "/assets/logos/mysql.svg" },
    { name: "Python", logo: "/assets/logos/python.svg" },
    { name: "Scikit-learn", logo: "/assets/logos/sklearn.svg" },
    { name: "MongoDB", logo: "/assets/logos/mongodb.svg" },
    { name: "Node.js", logo: "/assets/logos/node.svg" },
    { name: "Tailwind CSS", logo: "/assets/logos/tailwind.svg" },
    { name: "Git", logo: "/assets/logos/git.svg" },
    { name: "Heroku", logo: "/assets/logos/heroku.svg" },
    { name: "Vercel", logo: "/assets/logos/vercel.svg" },
    { name: "Three.js", logo: "/assets/logos/three-js-logo.png" },
    { name: "Flask", logo: "/assets/logos/flask.svg" },
    { name: "PowerBI", logo: "/assets/logos/PowerBI.png" },
  ];

  return (
    <section
      id='about'
      className='min-h-screen pt-24 pb-12 bg-gray-100 dark:bg-darkmode px-4 md:px-16'
    >
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100'>
          À propos de moi
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-center text-gray-700 dark:text-gray-300'>
          Bonjour ! Je m'appelle <strong>Thomas Bruand</strong>, développeur Web
          junior en reconversion professionnelle, actuellement en formation pour
          devenir <strong>développeur en intelligence artificielle</strong>.
          <br />
          <br />
          Mon expérience en tant que{" "}
          <strong>
            technicien de maintenance dans les télécommunications
          </strong>{" "}
          m'a permis de développer des compétences clés telles que l'
          <strong>organisation</strong>, l'<strong>écoute active</strong>, et la{" "}
          <strong>réactivité face aux défis techniques</strong>.
          <br />
          <br />
          Depuis <strong>octobre 2024</strong>, je poursuis ma formation au{" "}
          <strong>GRETA</strong>, spécialisée en intelligence artificielle, avec
          pour objectif de maîtriser le{" "}
          <strong>traitement et l'exploitation de données</strong> pour
          concevoir des solutions IA <strong>innovantes</strong>,{" "}
          <strong>performantes</strong>, et{" "}
          <strong>adaptées aux besoins professionnels</strong>.
          <br />
          <br />
          Je suis passionné par le domaine de l'
          <strong>analyse de données</strong> et aspire à travailler sur des
          projets à forte valeur ajoutée, notamment dans des secteurs tels que
          l'<strong>imagerie médicale</strong> ou l'
          <strong>automatisation intelligente</strong>.
        </p>

        {/* Carousel des stacks */}
        <div className='relative my-8'>
          <Slider {...settings} className='relative z-10 my-12'>
            {stacks.map((stack, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-center'
              >
                <div className='w-20 h-20 flex items-center justify-center bg-gray-100 rounded-md dark:bg-darkmode'>
                  <img
                    src={stack.logo}
                    alt={stack.name}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
                <p className='text-center mt-2 text-sm text-gray-700 dark:text-gray-300'>
                  {stack.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Boutons pour les réseaux sociaux et CV */}
        <div className='flex justify-center mt-8 gap-6'>
          <a
            href='https://www.linkedin.com/in/tbruand/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition flex items-center justify-center'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://github.com/Tbruand'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-darkmode_500 transition flex items-center justify-center'
            aria-label='GitHub'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='./assets/DL/CV_TBRUAND.pdf'
            download
            className='p-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition flex items-center justify-center'
            aria-label='Télécharger mon CV'
          >
            <FaFileDownload size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
