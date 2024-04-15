import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <p>
        <Link to="/home">Love Cusine Recipe</Link>
      </p>

      <p>
        <Link to="/recipes">Recipes</Link>
      </p>

      <p><Link>Create/Share Your Recipes</Link></p>
    </div>
  );
}

export default NavBar;
