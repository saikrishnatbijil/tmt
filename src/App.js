import { useState } from 'react';
import './App.css';
import { Home, ContactUs } from './pages'
import { Navbar } from './components';

function App() {
  const [isHome, setIsHome] = useState(true)

  const handleSwitch = (state) => {
    setIsHome(state)
  }

  return (
    <>
      <Navbar handleSwitch={handleSwitch}/>
      {isHome ? <Home /> : <ContactUs />}
    </>
  );
}

export default App;
