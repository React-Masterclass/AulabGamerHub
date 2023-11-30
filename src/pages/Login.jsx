// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/client";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import style from "../styles/loginPage.module.css";
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

  const handleLoginWithDiscord = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
      })
      if (error) {
        alert(error.error_description || error.message)
      } else {
        navigate('/settings');
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="container">
      <div className={style.login_container}>
        <div id="LoginEmail" className={style.login_element}>
          <h1>Log In</h1>
          <form onSubmit={handleLogin}>  
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="test@gmail.com" />
            <label htmlFor="password">Password address</label>
            <input type="password" id="password" name="password" placeholder="supersecret" />
            <button type="submit">
              Fai sign In
              <CiLogin className={style.login_icons}/>
            </button>
          </form>
        </div>
        <div id="LoginOAuth" className={style.login_element}>
          <h1>Puoi fare login con Social auth</h1>
          <button className="secondary">
            Login con Google
            <FaGoogle className={style.login_icons}/>
          </button>
          <button className="contrast" onClick={handleLoginWithDiscord}>
            Login con Discord
            <FaDiscord className={style.login_icons}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login; 