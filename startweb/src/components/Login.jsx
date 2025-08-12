import './components.css'
import myimg from '../assets/myimg.png'
function Login() {
 
  return (
    
       <div class="komal" >
<div>
  <h1 class="kv"> WELCOME TO LOGIN PAGE</h1>
  </div>
  <h2  ><label >USERNAME</label> <input type="text" id="1" ></input></h2>
   <h2 ><label>PASSWORD</label> <input type="password" id="2"></input></h2>
   <h2><input type="checkbox" />REMEMBER</h2>
   <button class="B" id="3" >LOGIN</button>
   <div ><img src={myimg} alt="image" class="lim" ></img></div>
   <div><p>NEW USER?<a href="">SIGN UP</a></p></div>
   <div><p><a href="">FORGOT PASSWORD?</a></p></div>
   
  

  </div>
  
  )
}

export default Login;

