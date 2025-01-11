const Contact = () => {
  return (
    <section
      id='contact'
      className='pt-24 pb-12 bg-gray-100 dark:bg-gray-900 px-4 md:px-16'
    >
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100'>
          Contactez-moi
        </h2>
        <form className='space-y-6'>
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
              name='name'
              className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
              placeholder='Entrez votre nom'
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
              name='email'
              className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
              placeholder='Entrez votre email'
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
              placeholder='Entrez votre message'
              required
            ></textarea>
          </div>
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
