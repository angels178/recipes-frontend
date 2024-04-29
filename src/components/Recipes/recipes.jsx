import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recipes.css";

function recipes() {
  const [recipesData, setRecipesData] = useState([]);

  const api = "Production"
    ? "https://recipes-backend-practice.onrender.com"
    : import.meta.env.VITE_API;

  useEffect(() => {
    axios
      .get(`${api}/recipes`)
      .then(({ data }) => {
        setRecipesData(data.payload);
        // console.log(res.data.payload)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="recipes-container">
      {recipesData.map((recipe) => {
        return (
          <div key={recipe.id} className="recipes-item">
            <p>
              <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default recipes;
