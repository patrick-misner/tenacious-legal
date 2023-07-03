import ContactDetails from '../ContactDetails';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

const ContactPage = () => (
  <>
    <ContactForm />
    <ContactDetails className="md:order-first" />
    <Footer />
  </>
);
export default ContactPage;
