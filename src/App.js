import { useState } from "react";

function App() {
  return (
    <div className="App">
      <WelcomeButton/>
      <p></p>
      <Counter initialCount={7}/>
      <p></p>
      <ShortText text='This is a long long text' maxLength={10}/>
    </div>
  );
}

// function WelcomeButton(props) {
//   let [english, setEnglish] = 
//     useState(true) ;

//   return (<button>
//       {english ? 'Hello' : 'Ciao'}
//     </button>);
// }

function WelcomeButton(props) {
  let [english, setEnglish] = 
    useState(true) ;

    const toggleLanguage = () => {
      setEnglish( e => !e ) ;
    }

  // return (<button onClick={()=>setEnglish((eng)=>(!eng))}>
  return (<button onClick={toggleLanguage}>

      {english ? 'Hello' : 'Ciao'}
    </button>);
}


function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}<br/>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

function ShortText(props) {
  const [hidden, setHidden] = useState(true);
  return (
     <span>
       {hidden ?
         `${props.text.substr(0, props.maxLength)}...` : props.text }
        &nbsp;
       {hidden ? (
         <a href='#' onClick={() => setHidden(false)}>more</a>
       ) : (
         <a href='#' onClick={() => setHidden(true)}>less</a>
       )}
     </span>
   );
 }
 

export default App;
