import contactImg from '../images/contact.jpg';

const ContactDetails = () => {
  const handlePhoneClick = () => {
    window.dataLayer.push({
      event: 'phone_click',
    });
  };
  return (
    <div className="col-span-12 px-4 mb-5 order-first md:order-none">
      <p className="text-center font-bold text-3xl dark:text-white mb-5">
        Contact Details
      </p>
      <div className="text-center">
        <p>
          <a
            href="mailto:info@tenacious.legal"
            className="underline text-sky-400"
          >
            info@tenacious.legal
          </a>
        </p>
        <p>148 Blue Lakes Blvd N #385</p>
        <p>Twin Falls, ID 83301</p>
        <p>
          <a
            href="tel:2083520499"
            className="underline text-sky-400"
            onClick={handlePhoneClick}
          >
            (208) 352-0499
          </a>
        </p>
        <p>Fax: (800) 391-1841</p>
      </div>

      <div className="p-4 flex justify-center">
        <img className="rounded h-60 w-50" src={contactImg} alt="Phone call" />
      </div>
    </div>
  );
};
export default ContactDetails;
