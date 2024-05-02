import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li className="logo">Love Cusine Recipe</li>

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
