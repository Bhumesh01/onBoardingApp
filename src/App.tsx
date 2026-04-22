import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
const url = import.meta.env.VITE_WEBHOOK_URL;
function App() {
  const [message, setMessage] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  async function submit() {
    try{
      console.log(url);
      const name = nameRef.current?.value;
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      if(!name || !email || !password){
        setMessage("Please Enter the credentials");
        return;
      }
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain" 
        },
        body: JSON.stringify({ name, email })

      });
      setMessage("Signed Up Successfullly")
    }
    catch(err){
      setMessage("Error Signing Up")
    }
    finally{
      setTimeout(()=>{
        setMessage("");
      }, 2000);
    }
  }
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
      {message&&<div style={{display: 'flex', justifyContent: 'center'}}><div style={{backgroundColor: 'violet', padding: '5px 200px', borderRadius: '5px', fontWeight: '500', color: 'black'}}>{message}</div></div>}
      <div className="ticks">
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center'}}>
          <h4 style={{paddingRight: '45px'}}>Name:</h4>
          <input ref={nameRef} style={{padding: '2px', borderRadius: '10px', width: '300px', height: '25px'}} placeholder='Enter your Name'></input>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center'}}>
          <h4 style={{paddingRight: '45px'}}>Email:</h4>
          <input ref={emailRef} style={{padding: '2px', borderRadius: '10px', width: '300px', height: '25px'}} type='email' placeholder='Enter your Email'></input>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center'}}>
          <h4 style={{paddingRight: '15px'}}>Password:</h4>
          <input ref={passwordRef} style={{padding: '2px', borderRadius: '10px', width: '300px', height: '25px'}} type='password' placeholder='Enter your Password'></input>
        </div>
        <button style={{backgroundColor: "purple", padding: '10px 25px', borderRadius: '15px', border: '1px solid white', color: 'white', fontSize: '20px', fontWeight: 'bold'}} onClick={submit}>Submit</button>
      </div>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
