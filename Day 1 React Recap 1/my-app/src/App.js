import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import MainRoutes from './Pages/MainRoutes';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App">
     {/* {show && <Counter/>}
     <button onClick={()=>{setShow(!show)}}>ToggleShow</button> */}
     <MainRoutes/>
    </div>
  );
}

export default App;
 