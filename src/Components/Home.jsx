import React from 'react';
import Navbar from './Navbar.jsx';
import intro_illustration from '../Assets/Images/illustration-intro.png';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="intro_illustration">
        <img src={intro_illustration} alt="" />
      </div>
      <div className="below_intro">
        <h1>
          All your files in one secure location, <br />
          accessible anywhere.
        </h1>
        <p>Flyo stores all your most important files in one secure location. <br />
          Access the wherever you need, share and collaborate with <br />
          friends, family, and co-workers.
        </p>
        <button className="get_started_btn">Get Started</button>
      </div>
    </div>
  );
}
 
export default Home;