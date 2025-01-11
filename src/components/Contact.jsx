import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [successIsVisible, setSuccessIsVisible] = useState(false);
  const [failureIsVisible, setFailureIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        setSuccessIsVisible(true);
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        setFailureIsVisible(true);
      });
  };
  return (
    <section
      id='contact'
      className='pt-24 pb-12 bg-gray-100 dark:bg-gray-900 px-4 md:px-16'
    >
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100'>
          Contactez-moi
        </h2>        
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex flex-col'>
            <label
              htmlFor='name'
              className='text-gray-800 dark:text-gray-100 mb-2'
            >
              Nom
            </label>
            <input
              type='text'
              id='name'
              name='user_name'
              className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
              placeholder='John Doe'
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='email'
              className='text-gray-800 dark:text-gray-100 mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='user_email'
              className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
              placeholder='flat_earth42@gmail.com'
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='message'
              className='text-gray-800 dark:text-gray-100 mb-2'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='6'
              className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 h-32 md:h-48'
              placeholder='Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation...'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <p
          id='failure'
          className='text-red-600'
          style={{ display: failureIsVisible ? "flex" : "none" }}
        >
          🚨 Erreur : Message non envoyé !
        </p>
        <p
          id='success'
          className='text-green-600'
          style={{ display: successIsVisible ? "flex" : "none" }}
        >
          ✔ Message envoyé avec succès !
        </p>
          <button
            type='submit'
            className='w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600'
          >
            Envoyer
          </button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
