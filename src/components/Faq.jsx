import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import venmo from '../images/venmo.png';
import qrCode from '../images/qr-code.png';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Accordion
        className="col-span-12 md:col-start-3 md:col-span-8 mb-5 dark:text-white"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          How much for routine service in (city)?
        </AccordionHeader>
        <AccordionBody className="mt-3 dark:text-slate-400">
          <p>
            Please click{' '}
            <Link
              to="/pricing"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Pricing
            </Link>{' '}
            to go to our Pricing page, choose your city in the drop-down and
            other applicable fees. Printing is 16 cents/page but we waive the
            print fee if under 25 pages.
          </p>
          <p className="mt-3">
            {' '}
            Rush service and all other fees are available on the{' '}
            <Link
              to="/pricing"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Pricing
            </Link>{' '}
            page.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion
        className="col-span-12 md:col-start-3 md:col-span-8 mb-5 dark:text-white"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(2)}>
          How many attempts are included?
        </AccordionHeader>
        <AccordionBody className="mt-3 dark:text-slate-400">
          For most areas we don’t limit attempts. We’ll let you know if
          circumstances require it.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="col-span-12 md:col-start-3 md:col-span-8 mb-5 dark:text-white"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          What’s your turnaround time?
        </AccordionHeader>
        <AccordionBody className="mt-3 dark:text-slate-400">
          <p>
            First attempts are typically within 1 business day. Our turnaround
            time is quicker than average. We usually have it served and back to
            you before you need to ask for status.
          </p>
          <p className="mt-3">
            Our cutoff time is 4:00 PM MST. Any rush or routine jobs received
            after this time will be considered received on the next business
            day.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion
        className="col-span-12 md:col-start-3 md:col-span-8 mb-5 dark:text-white"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(4)}>
          Do you charge for notary if needed?
        </AccordionHeader>
        <AccordionBody className="mt-3 dark:text-slate-400">
          Notary is included with our service fee.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="col-span-12 md:col-start-3 mb-5 md:col-span-8 dark:text-white"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
      >
        <AccordionHeader className="" onClick={() => handleOpen(5)}>
          Can we email the documents to you?
        </AccordionHeader>
        <AccordionBody className="dark:text-slate-400 mt-3">
          Yes, our print fee is $0.16/page. We waive the print fee if total
          service pages are 25 or less.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="col-span-12 md:col-start-3 md:col-span-8 mb-5 dark:text-white"
        open={open === 6}
        icon={<Icon id={6} open={open} />}
      >
        <AccordionHeader className="mb-5" onClick={() => handleOpen(6)}>
          Do you require prepayment?
        </AccordionHeader>
        <AccordionBody className="dark:text-slate-400">
          Yes, you can send a scan of your check with documents and we can
          process the image. No need to mail the orginal. You can get a quote on
          our{' '}
          <Link
            to="/pricing"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Pricing
          </Link>{' '}
          page. If you're paying by credit card, use the tool on our pricing
          page and e-mail{' '}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="mailto:sean@tenacious.legal"
          >
            sean@tenacious.legal
          </a>
          <p className="text-center text-lg font-bold pt-2">We accept Venmo</p>
          <div className="md:flex-row md:justify-center flex flex-col items-center">
            <a href="https://venmo.com/u/SeanCapps">
              <img
                className="h-24 hover:scale-105 transition duration-300 cursor-pointer my-5 px-5"
                src={venmo}
                alt="Venmo Icon link"
              />
            </a>
            <img className="h-24 my-5 px-5" src={qrCode} alt="QR code" />
          </div>
          <p className="text-center">@SeanCapps</p>
        </AccordionBody>
      </Accordion>
    </>
  );
};
export default Faq;
