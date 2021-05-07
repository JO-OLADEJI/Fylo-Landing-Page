import React from 'react';
import image_productive from '../Assets/Images/illustration-stay-productive.png';

const Productive = () => {
  return (
    <div className="Productive">
      <div className="left">
        <img src={image_productive} alt=""/>
      </div>
      <div className="right">
        <h1>
          Stay productive, <br />whenever you are
        </h1>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collboration. No email attachments required.</p>
        <a href="">See how Fylo Works <i class="fas fa-arrow-circle-right"></i></a>
      </div>
    </div>
  );
}
 
export default Productive;