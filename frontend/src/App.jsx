import React, {useState} from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ThemeToggle from './components/Hero';
import Hero from './components/Hero'
import Feature from './components/Feature'
import Demo from './components/Demo'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
    <div>
    <ThemeToggle/>
    <Feature/>
    <Demo/>
    <FAQ/>
    <Footer/>
    </div>
    </>
  )
}

export default App