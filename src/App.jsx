import './App.css'
import Badges from './components/Badges/Badges';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <Badges></Badges>
      </main>
    </>
  );
}

export default App
