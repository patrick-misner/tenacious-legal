import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import TailwindError from './error';
import TailwindSuccess from './success';

export default function ContactTailwind() {
  const [count, setCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(3000);

    emailjs
      .sendForm(
        'service_zi1utdn',
        'template_dw2odi7',
        form.current,
        'e7Qt7K6SGxLqApg_c'
      )
      .then(
        (result) => {
          setShowSuccess(true);
          form.current.reset();
          setIsLoading(false);
          setShowError(false);
        },
        (error) => {
          console.log(error.text);
          setShowError(true);
          setIsLoading(false);
        }
      );
  };
  return (
    <div className="sm:mt-0 col-span-12 md:col-span-6">
      <p className="text-center font-bold text-3xl text-black mb-5">
        Contact Us
      </p>
      <div className="mt-5 md:mt-0">
        <form ref={form} onSubmit={sendEmail} method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className="px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-12 md:col-span-8 mt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                    id="email-address"
                    className="px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-12 md:col-span-10 mt-5">
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        rows={3}
                        required
                        maxLength="750"
                        className="px-2 mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="Message to Tenacious Legal"
                        defaultValue=""
                        onChange={(e) => setCount(e.target.value.length)}
                      />
                    </div>
                    <div className="flex justify-end"> {count} / 750</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 md:flex md:justify-between md:text-left text-center items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="my-2 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {isLoading ? (
                  <div className="flex">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <p>Processing...</p>
                  </div>
                ) : (
                  <p>Submit</p>
                )}
              </button>
              {showSuccess && <TailwindSuccess className="m-2" />}
              {showError && <TailwindError className="m-2" />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
