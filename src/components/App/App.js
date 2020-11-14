import './App.css';
import Modal from '../Modal/Modal'
import Planets from '../Planets';
import React, {useState} from 'react'



function App() {
  const [open, setOpen] = useState(false);

  return (
      <div className="App">
        <h1>Star Wars Planets</h1>
        <Planets />
        {
         open && <Modal setOpen={setOpen}/> 
        }
        {/* ADD PLANET BUTTON */}
       <button className='add-btn' onClick={()=> setOpen(!open)}>+</button>  
      </div>
  );
}

export default App;
