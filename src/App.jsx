import { Suspense } from 'react';
import './App.css'
import Badges from './components/Badges/Badges';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import PremiumTools from './components/PremiumTools/PremiumTools';
import Ready from './components/Ready/Ready';
import Steps from './components/Steps/Steps';
import Transparent from './components/Transparent/Transparent';


const fetchTools = async () =>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const toolsPromise = fetchTools();

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <Badges></Badges>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PremiumTools toolsPromise={toolsPromise}></PremiumTools>
        </Suspense>
        <Steps></Steps>
        <Transparent></Transparent>
        <Ready></Ready>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App
