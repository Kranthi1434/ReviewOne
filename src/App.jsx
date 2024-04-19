import { Button } from 'react-bootstrap'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './components/Home'
import Residant from './components/Residant'
import Payment from './components/Payment'
import ResidantModule from './components/ResidantModule'

function App() {
 
  return (
    <>
      <Header/>
      <Home/>
      <Residant/>
      <Payment/>
      <ResidantModule/>
      <Footer/>
    </>
  )
}

export default App
