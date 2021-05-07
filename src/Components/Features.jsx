import React from 'react';
import icon_access from '../Assets/Images/icon-access-anywhere.svg';
import icon_security from '../Assets/Images/icon-security.svg';
import icon_collaboration from '../Assets/Images/icon-collaboration.svg';
import icon_files from '../Assets/Images/icon-any-file.svg';
import featuresData from './featuresData.json';
import FeatureBox from './FeatureBox.jsx';

const Features = () => {
  const component_data = featuresData;
  const component_data_image = {
    "icon_access": icon_access,
    "icon_security": icon_security,
    "icon_collaboration": icon_collaboration,
    "icon_files": icon_files
  };

  return (
    <div className="Features">
      <div className="row">
        {component_data.slice(0, 2).map(data => (
          <FeatureBox 
            key={data.id} 
            image={component_data_image[(data.name)]} 
            header={data.header} 
            description={data.description} 
          />)
        )}
      </div>
      <div className="row">
        {component_data.slice(2, 4).map(data => (
          <FeatureBox 
            key={data.id} 
            image={component_data_image[(data.name)]} 
            header={data.header} 
            description={data.description} 
          />)
        )}
      </div>
    </div>
  );
}
 
export default Features;