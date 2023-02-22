import './App.css';
import { Home, ContactUs } from './pages'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
