import { Link } from 'react-router-dom'
// Stateless functional component
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          {/* using link here stops request to server and instead looks to the react router- this makes it a lot quicker */}
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;