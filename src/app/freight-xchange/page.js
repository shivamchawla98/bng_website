import React from 'react'
import Card from '../../components/Card';

const mockData = [
  {
    company: 'Maersk',
    logo: 'path/to/logo3.png',
    from: 'Shanghai, CN',
    to: 'Odesa, UA',
    price: 'USD 1,710',
    change: '-7%'
  },
  {
    company: 'Hapag-Lloyd',
    logo: 'path/to/logo4.png',
    from: 'Shanghai, CN',
    to: 'Odesa, UA',
    price: 'USD 1,840',
    change: '+14%'
  }
];

export default function FreightExchange() {
  return (
    <div>
      {mockData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  )
}
