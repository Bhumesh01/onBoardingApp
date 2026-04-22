import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <h1>Get Started</h1>
      </section>

      <div className="ticks">
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center'}}>
          <h4 style={{paddingRight: '45px'}}>Name:</h4>
          <input style={{padding: '2px', borderRadius: '10px', width: '300px', height: '25px'}} placeholder='Enter your Email'></input>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center'}}>
          <h4 style={{paddingRight: '45px'}}>Email:</h4>
          <input style={{padding: '2px', borderRadius: '10px', width: '300px', height: '25px'}} placeholder='Enter your Email'></input>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center'}}>
          <h4 style={{paddingRight: '15px'}}>Password:</h4>
          <input style={{padding: '2px', borderRadius: '10px', width: '300px', height: '25px'}} placeholder='Enter your Email'></input>
        </div>
        <button style={{backgroundColor: "purple", padding: '10px 25px', borderRadius: '15px', border: '1px solid white', color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Submit</button>
      </div>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
