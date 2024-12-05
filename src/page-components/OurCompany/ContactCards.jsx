import React from 'react';

const contacts = [
  { type: 'Support', text: 'Get help with our services', email: 'support@example.com' },
  { type: 'Sales', text: 'Inquire about our products', email: 'sales@example.com' },
  { type: 'Phone', text: 'Reach us by phone', email: 'phone@example.com' }
];

const ContactCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gray-200 py-8">
      {contacts.map((contact, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          <h3 className="text-lg font-bold">{contact.type}</h3>
          <p>{contact.text}</p>
          <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
