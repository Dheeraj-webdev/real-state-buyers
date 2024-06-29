
function Navbar() {
  return (
    <>
      <div className="container">
        <div className="container-logo">Real State</div>
        <div className="container-nav">
            <div className="nav-item">Pay Rent</div>
            <div className="nav-item">download App</div>
            <div className="nav-item">News</div>
            <div className="nav-item">List Property</div>
        </div>
        <div className="login">
            <button type="button" className="login-btn">Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
