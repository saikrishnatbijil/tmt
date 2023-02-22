import './App.css';
import { Home, ContactUs } from './pages'
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Home />
      <ContactUs />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes> */}
    </>
  );
}

export default App;
