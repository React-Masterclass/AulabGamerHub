import { Link } from "react-router-dom";
export default function AppNavbar() {
  return (
    <nav>
      <ul>
        <li><strong>
          <Link to={'/'}>AulabGamerHub</Link>
        </strong></li>
      </ul>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}
