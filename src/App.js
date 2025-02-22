import logo from './logo.svg';
import './App.css';
import Home from '../src/component/home'
import About from '../src/component/about'
import Contact from '../src/component/contact'
import Service from './component/services'

function App() {
  return (
    <>
      <Home Firstname="Rohan" />
      <About Lastname="Sawant" />
      <Contact number="1234567890" />
      <Service post="MERN Stack Developer"/>
    </>
  );
}

export default App;
