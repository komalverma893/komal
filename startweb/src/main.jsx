import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 //import Img from "./components/img.jsx";
//import Log from "./components/log.jsx"
//import Parent from './components/parent.jsx';
//import Hooks from './components/hooks.jsx';
import Merge from "./components/Merge.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>  
   <Merge/> 
  </ StrictMode>,
)
