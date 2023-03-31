import ContactDetails from '../contact-details';
import ContactTailwind from '../contact-tailwind';
import Footer from '../footer';

export default function ContactPage() {
  return (
    <div className="mx-auto p-4 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="p-2 px-4 text-gray-300">
        <div className="p-5 shadow-xl rounded bg-white text-black dark:text-slate-400 dark:bg-slate-900 grid grid-cols-12">
          <ContactTailwind />
          <ContactDetails className="md:order-first" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
