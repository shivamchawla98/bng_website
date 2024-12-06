import React from 'react'
import Card from '../../components/Card';

const mockData = [
  {
    company: 'One',
    logo: 'path/to/logo1.png',
    from: 'Shanghai, CN',
    to: 'Odesa, UA',
    price: 'USD 1,720',
    change: '-10%'
  },
  {
    company: 'CMA CGM',
    logo: 'path/to/logo2.png',
    from: 'Shanghai, CN',
    to: 'Odesa, UA',
    price: 'USD 1,820',
    change: '+12%'
  }
];

export default function BusinessExchange() {
  return (
    <div>
      {mockData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  )
}
