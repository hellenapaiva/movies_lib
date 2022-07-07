import { Link } from "react-router-dom";
import { BiSearchAlt, BiCameraMovie } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MOVIES LIB
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Pesquise pelo filme..." />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
