import React from 'react';
import PortfolioList from './components/PortfolioList';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Portfolio/>
      <Footer />
    </>
  );
}

export default App;
