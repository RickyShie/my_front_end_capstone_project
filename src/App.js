import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';


function App() {
  return (
      <div className='app-container'>
       <Header></Header>
         <Main>
          <Hero></Hero>
         </Main>
       <Footer></Footer>
      </div>
  );
}

export default App;
