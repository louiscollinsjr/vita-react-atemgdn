import React from 'react';
import coworkWomen from '../assets/cowork-women-unsplash.jpeg';

const FWImageSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-400 ">
      <img src={coworkWomen} alt="women working" />
    </section> 
  );
};

export default FWImageSection;