import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Additem from './Component/Additem'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additem" element={<Additem />} />
          {/* <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/Bookingupdate/:id" element={<BookingUpdate />} />
          <Route path="/Bookingdata" element={<BookingData />} />
          <Route path="/card" element={<Card />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/slidebar" element={<Slidebar />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
