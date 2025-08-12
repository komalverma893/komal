import './components.css'
 
import { FcGoogle } from 'react-icons/fc';
function Log(){
    return(
         <>
         <div class="bird">
            <h1 class="o">LOVEBIRDS</h1>
            <h4 class="q">WELCOME TO LOVEBIRDS</h4><br/>
            <label class="o"><b>USERNAME</b></label><br/>
            <input type="text" id="1" class="o"></input><br/><br/>
            <label class="o"><b>PASSWORD</b></label><br/>
            <input type="password" id="2" class="o"></input><br/>
            <a href="#" class="f">forgot password?</a><br/>
            <button class="s">SIGN IN</button><br/><br/><br/>
            <pre class="o">__________OR_________</pre>
            
            <h5 ><a href="#" class="o"><FcGoogle />  CONTINUE WITH GOOGLE</a></h5>
            <h5  class="o">NEW LOVEBIRDS??<a href="" class="a">CREATE ACCOUNT</a></h5>
           </div>         
</>
    )
}
export default Log;