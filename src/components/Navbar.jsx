import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt, BiCameraMovie } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MOVIES LIB
        </Link>
      </h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Pesquise por filme..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="button">
          <BiSearchAlt />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
