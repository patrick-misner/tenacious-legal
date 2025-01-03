import ContactDetails from '../ContactDetails';
import Footer from '../Footer';

{
  /* import ContactForm from '../ContactForm'; */
}

const ContactPage = () => (
  <>
    {/* 
      Per Sean's request, we are removing this contact form. 
      To enable it just uncomment and md:col-span-6
      to parent div class of ContactDetails component 
    */}
    {/* <ContactForm /> */}
    <ContactDetails className="md:order-first" />
    <Footer />
  </>
);
export default ContactPage;
