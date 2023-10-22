import { useRef } from 'react';
import './App.css';

export default function App() {
  /* ==== Elementos ==== */
  const textAreaRef = useRef(null);
  const IconRef = useRef(null);

  /* ==== Ler o texto digitado ==== */
  function readText() {
    if(textAreaRef.current.value) {
      const voice = new SpeechSynthesisUtterance(textAreaRef.current.value);
      voice.lang = "pt-BR";
      window.speechSynthesis.speak(voice);
      IconRef.current.style.display = "block";
    }
    else {
      window.alert("Enter the text to be read!");
    }
  }
  
  /* ==== Limpar o campo de texto ==== */
  function clearField() {
    textAreaRef.current.value = "";
    IconRef.current.style.display = "none";
  }

  return (
    <>
      <section className="section">
        <main className="container">
          <h1>Text Reader</h1>
          <div className="input-field">
            <textarea
            ref={textAreaRef}
            cols="30" 
            rows="10"
            placeholder='Enter the text'></textarea>
            <i ref={IconRef} 
            onClick={clearField} 
            className='fa fa-times'></i>
          </div>{/*End input field*/}
          <button onClick={readText} 
          type='button'>Read</button>
        </main>{/*End container*/}
      </section>{/*End section*/}
    </>
  )
}