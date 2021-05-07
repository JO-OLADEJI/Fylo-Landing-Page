import './App.css';
import Home from './Components/Home.jsx';
import Features from './Components/Features.jsx';
import Productive from './Components/Productive.jsx';
import Testimonials from './Components/Testimonials.jsx';
import AccessForm from './Components/AccessForm.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <Productive />
      <Testimonials />
      <AccessForm />
      <Footer />
    </div>
  );
}

export default App;
