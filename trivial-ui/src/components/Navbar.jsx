import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  console.log("user", user);
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/todo">
          <h1>Todos</h1>
        </Link>
        {!user || (user && !user.email) ? (
          <>
            <Link to="/signup">
              <h1>Signup</h1>
            </Link>
            <Link to="/login">
              <h1>Login</h1>
            </Link>
          </>
        ) : (
          <span>{user.email}</span>
        )}
        {user?.email && (
          <div>
            <button type="button" onClick={logout}>
              LOGOUT
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
