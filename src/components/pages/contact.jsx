import { useState } from 'react';
import { ContactUs } from '../contact-form';

export default function ContactPage() {
  return (
    <div className="mx-auto p-4 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="p-2 px-4 text-gray-300">
        <div className="p-3 shadow-xl rounded bg-white grid grid-cols-12">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
