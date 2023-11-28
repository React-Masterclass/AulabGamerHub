// import { useContext } from "react";
import supabase from "../supabase/client";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
// import AppContext from "../contexts/AppContext";

function Register() {
  // const { signUp } = useContext(AppContext); 
  const navigate = useNavigate();
  // const [username, setUsername] = useState(''); 
  // const [email, setEmail] = useState(''); 
  // const [password, setPassword] = useState(''); 

  const handleRegister = async (event) => {
    event.preventDefault();     
    const registerForm = event.currentTarget;
    const { username, email, password } = Object.fromEntries(
      new FormData(registerForm)
    )
    try {
      let { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username
          }
        }
      })
      if (error) {
        alert(error.error_description || error.message)
      } else {
        registerForm.reset();
        navigate('/settings');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
    <div style={{
      height: '80vh',
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div id="Register" style={{
        width: '50%', 
      }}>
        <h1>Register new Account</h1>
        <form onSubmit={handleRegister}>  
          {/* <div className="grid">
            <label htmlFor="firstname">
              First name
              <input type="text" id="firstname" name="firstname" placeholder="Test name" />
            </label>
            <label htmlFor="lastname">
              Last name
              <input type="text" id="lastname" name="lastname" placeholder="Test lastname" />
            </label>
          </div> */}
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username" 
            name="username" 
            placeholder="testnickname"
           />
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="test@gmail.com"
           />
          <label htmlFor="Password">Password</label>
          <input 
            type="password" 
            id="Password" 
            name="password" 
            placeholder="supersecret"
           />
          <button type="submit">
            Fai Sign Up
            <CiLogin style={{
              marginLeft: '10px'
            }}/>
          </button>
        </form>
        <p>Ho gia un account, vai a <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Register; 