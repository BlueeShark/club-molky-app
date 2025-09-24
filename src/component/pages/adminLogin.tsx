import './style/adminLogin.css';
export function AdminLogin() {
  return (
    <div className="carte">
      <div className="imgDiv">
        <img src="../../../assets/a.png" alt="event" className="imgEvent" />
      </div>
      <div className="form">
        <div className="imgs"></div>
        <form action="" method="POST">
          <h2>Admin Login</h2>
          <div className="inputBox">
            <input
              type="text"
              required
              placeholder="Enter your username"
              title="Username"
            />
            <span>Username</span>
            <i></i>
          </div>{' '}
          \
          <div className="inputBox">
            <input
              type="password"
              required
              placeholder="Enter your password"
              title="Password"
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Sign Up</a>
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
