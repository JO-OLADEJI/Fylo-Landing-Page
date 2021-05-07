import React from 'react';
import satish_patel from '../Assets/Images/profile-1.jpg';
import bruce_mckenzie from '../Assets/Images/profile-2.jpg';
import iva_boyd from '../Assets/Images/profile-3.jpg';
import quote_image from '../Assets/Images/bg-quotes.png';
import TestimonialBox from './TestimonialBox.jsx';
import testimonais_data from './testimonialsData.json';

const Testimonials = () => {
  const component_data = testimonais_data;
  const component_data_image = {
    "Satish Patel": satish_patel,
    "Bruce McKenzie": bruce_mckenzie,
    "Iva Boyd": iva_boyd
  };

  return (
    <div className="Testimonials">
      <div className="wrapper">
        <img src={quote_image} alt=""/>
        {component_data.map(data => (
          <TestimonialBox 
            key={data.id}
            name={data.name}
            image={component_data_image[(data.name)]}
            job_title={data.job_title}
            testimony={data.testimony}
          />)
        )}
      </div>
    </div>
  );
}
 
export default Testimonials;