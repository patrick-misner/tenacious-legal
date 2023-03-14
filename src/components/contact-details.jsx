import contactImg from '../images/contact.jpg';

export default function ContactDetails() {
  return (
    <div className="col-span-12 md:col-span-6 bg-white bg-white px-4 py-5">
      <p className="text-center font-bold text-3xl text-black mb-5">
        Contact Details
      </p>
      <div className="text-center text-black">
        <p>info@tenacious.legal</p>
        <p>148 Blue Lakes Blvd N #385</p>
        <p>Twin Falls, ID 83301</p>
        <p>(208) 353-0499</p>
        <p>Fax: (800) 391-1841</p>
      </div>

      <div className="p-4 flex justify-center">
        <img className="rounded h-60 w-50" src={contactImg} alt="Phone call" />
      </div>
    </div>
  );
}
