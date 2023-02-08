import { useEffect, useState } from 'react';
import './App.css';


function App() {
  
const [advice, setAdvice] = useState("");

const getAdvices = async () => {
const responce = await fetch (`http://www.boredapi.com/api/activity`);
const data = await responce.json();
setAdvice(data.activity);
} 

useEffect (() => {
getAdvices()
}, [])

return (  
  <div className='container'>
    <div className='box'>
      <div className="App">
        <p className='text'>{advice}</p>
      </div>
      <div className='btn'>
        <button onClick={getAdvices}>New advice</button>
      </div>
    </div>  
  </div>
  );
}

export default App;
