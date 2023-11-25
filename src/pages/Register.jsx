import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import AppNavbar from '../components/AppNavbar';
import AppContext from "../contexts/AppContext";

function Register() {
  const { signUp } = useContext(AppContext); 
  const navigate = useNavigate();
  // const [username, setUsername] = useState(''); 
  // const [email, setEmail] = useState(''); 
  // const [password, setPassword] = useState(''); 

  const handleRegister = async (event) => {
    event.preventDefault();     
    const { username, email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    )

    let { error } = await signUp({
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
      navigate('/account');
    }
  }

  return (
    <div className="container">
    <AppNavbar />
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