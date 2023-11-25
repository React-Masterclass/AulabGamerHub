import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import AppNavbar from '../components/AppNavbar';

function Login() {
  return (
    <div className="container">
      <AppNavbar />
      <div style={{
        height: '80vh',
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <div id="LoginEmail" style={{
          width: '40%'
        }}>
          <h1>Log In</h1>
          <form>  
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="test@gmail.com" />
            <label htmlFor="Password">Password address</label>
            <input type="password" id="Password" name="Password" placeholder="supersecret" />
            <button type="submit">
              Fai sign In
              <CiLogin style={{
                marginLeft: '10px'
              }}/>
            </button>
          </form>
        </div>
        <div id="LoginOAuth" style={{
          width: '40%'
        }}>
          <h1>Puoi fare login con Social auth</h1>
          <button className="secondary">
            Login con Google
            <FaGoogle style={{
              marginLeft: '10px'
            }} />
          </button>
          <button className="contrast">
            Login con Discord
            <FaDiscord style={{
              marginLeft: '10px'
            }} />
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login; 