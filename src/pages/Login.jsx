// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/client";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
// import AppContext from "../contexts/AppContext";

function Login() {
  // const { signIn } = useContext(AppContext); 
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();     
    const loginForm = event.currentTarget;
    const { email, password } = Object.fromEntries(
      new FormData(loginForm)
    )
    try {
      let { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) {
        alert(error.error_description || error.message)
      } else {
        loginForm.reset();
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
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <div id="LoginEmail" style={{
          width: '40%'
        }}>
          <h1>Log In</h1>
          <form onSubmit={handleLogin}>  
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="test@gmail.com" />
            <label htmlFor="password">Password address</label>
            <input type="password" id="password" name="password" placeholder="supersecret" />
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