import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li className="logo">
              <Link to="/">Love Cusine Recipe</Link>
            </li>

            <li>
              <Link to="/recipes">Recipes</Link>
            </li>

            <li>
              <Link to="/recipes/new">Create Your Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
