import React from 'react';

const contacts = [
  { type: 'Support', text: 'Get help with our services', email: 'support@bnglogisticsnetwork.com' },
  { type: 'Sales', text: 'Inquire about our products', email: 'sales@bnglogisticsnetwork.com' },
  { type: 'Phone', text: 'Reach us by phone', ph: '(+91) 72 4077 4077' }
];

const ContactCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-8">
      {contacts.map((contact, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          <h3 className="text-lg font-bold text-black">{contact.type}</h3>
          <p className="text-gray-600">{contact.text}</p>
          <a href={`${contact.email ? `mailto:${contact.email}` : `tel:${contact.ph}`}`} className="text-blue-500">{contact.email ? contact.email : contact.ph}</a>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
