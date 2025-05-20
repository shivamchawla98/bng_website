import React from 'react';
import WorldMap from '../../components/World.jsx';

const sampleData = {
  Afghanistan: 100,
  Angola: 50,
  // … your country‐value pairs
};

export default function ExperimentalMap() {
  return (
    <div>
   
      <WorldMap data={sampleData} width={800} height={400} />
    </div>
  );
}
