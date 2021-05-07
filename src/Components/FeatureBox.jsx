import React from 'react';

const FeatureBox = (props) => {
  return (
    <div className="FeatureBox">
      <img src={props.image} alt=""/>
      <h3>{props.header}</h3>
      <p>{props.description}</p>
    </div>
  );
}
 
export default FeatureBox;