import './App.css';

// import First from './First';
// import Read from './Read';
// import './box.css';
//import Form from './Form';
// import Boxshad from './Boxshad';
//import LDmode from './LDmode';

import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Status from './Status';
import Contact from './Contact';
//import Category from './Category';
import Signup from './Signup';
import Btn from './Btn';
import SearchItem from './SearchItem';
import SearchItem1 from './SearchItem1';
import SearchItem2 from './SearchItem2';
import CheckHotelPage from './CheckHotelPage';
import Footer from './Footer';


function App() {
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Category" element={<Category/>} /> */}
        <Route path="/Btn" element={<Btn />} />
        <Route path="/status" element={<Status />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SearchItem" element={<SearchItem />} />
        <Route path="/SearchItem1" element={<SearchItem1 />} />
        <Route path="/SearchItem2" element={<SearchItem2 />} />
        <Route path="/CheckHotelPage" element={<CheckHotelPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>






  );
}

export default App;


