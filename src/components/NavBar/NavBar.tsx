import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header " id="header">
      <div className="container">
        <a href="#" className="logo">
          Bally
        </a>
        <ul className="main-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
