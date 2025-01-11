import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen pt-24 pb-12 bg-gray-100 dark:bg-gray-900 px-4 md:px-16'
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
          En <strong>2023</strong>, j'ai suivi une formation sur{" "}
          <strong>OpenClassrooms</strong>, où j'ai appris les bases de
          différents <strong>langages de programmation web</strong> et leur
          application à travers divers projets pratiques. Depuis{" "}
          <strong>octobre 2024</strong>, je poursuis ma formation au{" "}
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

        {/* Boutons pour les réseaux sociaux et CV */}
        <div className="flex justify-center mt-8 gap-6">
          {/* Bouton LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ton-profil/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Bouton GitHub */}
          <a
            href="https://github.com/ton-profil/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900 transition flex items-center justify-center"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          {/* Bouton CV */}
          <a
            href="/chemin-vers-ton-cv.pdf"
            download
            className="p-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition flex items-center justify-center"
            aria-label="Télécharger mon CV"
          >
            <FaFileDownload size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
