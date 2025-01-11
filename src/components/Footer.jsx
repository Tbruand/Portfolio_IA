const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-6">
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          &copy; {currentYear}{" "}
          <a
            href="https://www.linkedin.com/in/tbruand/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Thomas Bruand
          </a>
          . All Rights Reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  