import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer'
import Body from '../Body/Body';
import { Link } from 'react-router-dom';





function App() {
  
  return (
    <div>
      <Sidebar />
      <Header/>
      <Body />
      <Footer />
      
    </div>
  );

  
}

export default App;
