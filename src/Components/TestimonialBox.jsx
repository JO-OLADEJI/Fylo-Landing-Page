import React from 'react';

const TestimonialBox = (props) => {
  return (
    <div className="TestimonialBox">
      <p>{props.testimony}</p>
      <div className="flex">
        <img src={props.image} alt=""/>
        <div>
          <h4>{props.name}</h4>
          <p>{props.job_title}</p>
        </div>
      </div>
    </div>
  );
}
 
export default TestimonialBox;