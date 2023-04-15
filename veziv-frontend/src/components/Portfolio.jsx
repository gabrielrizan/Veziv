import React from 'react'
import PortfolioForm from './PortfolioForm'
import PortfolioList from './PortfolioList'
import portfolioData from '../data/portfolioData'
import { useState } from 'react'

const Portfolio = () => { 
  const [portfolioItems, setPortfolioItems] = useState(portfolioData);

  
  return (
    <>
      <PortfolioList portfolioItems={portfolioItems}/>
      <PortfolioForm onAdd={setPortfolioItems} oldData={portfolioItems}/>
    </>
  )
}

export default Portfolio;
