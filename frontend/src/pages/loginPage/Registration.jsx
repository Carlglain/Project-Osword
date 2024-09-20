import React, {useState} from 'react'
import './styles.css'
import RLButton from '../../Components/registration/registration-login-button'
import Image from '../../Images/classroom-arms-2.avif'
function Login() {
  const [isLogin,setIsLogin]=useState(false)
  function handleOnChooseRegPage(e){
    e.preventDefault()
    if(isLogin){
      return
    }
    setIsLogin(true)
  }
  return (<div className='container'>
    <div className='icontainer'>
      <img className='regimg' src={Image} alt="Lufy image display" />
    </div>
    <div className='fcontainer'>
      <h1>Welcome to Lorem i</h1>
      <RLButton onChooseRegPage={handleOnChooseRegPage}/>
     <p>Lorem ipsum dolor sit amet,adka dka dipiscing elit. Sed gfdut labore et dolore magna aliqua.</p>
      <form >
        {/* email rendered only when we want to create account */}
        <label htmlFor="l0">Email Address</label> <br />
        <input id='l0' name='email' type="email" placeholder='Enter your email address'/> <br />
        {/* username */}
        <label htmlFor="l1">User Name</label> <br />
        <input id='l1' name='username' type="text" placeholder='Enter your user name'/> <br />
        {/* password */}
        <label htmlFor="l2">Password</label> <br />
        <input id='l2' name='password' type="password" placeholder='Password' /> <br />
        {/* Remember me button */}
        <label htmlFor="l3" ><input type="checkbox"  name='r1' id='l3'/>  Remember Me</label>
       <a className="fgetpwdlink" href='#' > forgot password? </a> <br />
       {!isLogin? (<button id='fcontainerbutton'>Register</button>): (<button id='fcontainerbutton'>Login</button>) }

      </form>
      </div>
       </div>
  
  )
}

export default Login
