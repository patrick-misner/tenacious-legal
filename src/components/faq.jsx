import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import venmo from '../images/venmo.png';
import qrcode from '../images/qr-code.png';

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

export default function Faq() {
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
          Please click Pricing to go to our Square page, choose Routine service,
          and choose your city in the drop-down. Printing is 16 cents/page but
          we waive the print fee if under 25 pages.
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
          First attempts are typically within 1 business day. Our turnaround
          time is quicker than average. We usually have it served and back to
          you before you need to ask for status.
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
          process the image. No need to mail the orginal. You can also pay with
          a credit card from our pricing page, and reference the payment when
          you send the documents.
          <p className="text-center text-lg font-bold pt-2">Venmo</p>
          <div className="md:flex-row md:justify-center flex flex-col items-center">
            <a href="https://venmo.com/u/SeanCapps">
              <img
                className="h-24 hover:scale-105 transition duration-300 cursor-pointer my-5 px-5"
                src={venmo}
                alt="Venmo Icon link"
              />
            </a>
            <img className="h-24 my-5 px-5" src={qrcode} alt="QR code" />
          </div>
          <p className="text-center">@SeanCapps</p>
        </AccordionBody>
      </Accordion>
    </>
  );
}
