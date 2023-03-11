import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zi1utdn',
        'template_dw2odi7',
        form.current,
        'e7Qt7K6SGxLqApg_c'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="user_name"
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
