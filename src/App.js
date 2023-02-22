import './App.css';
import { Home, ContactUs } from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/tmt' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
