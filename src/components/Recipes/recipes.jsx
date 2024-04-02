import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function recipes() {
  const [recipesData, setRecipesData] = useState([]);

  const api = import.meta.env.VITE_API;

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
    <div>
      {recipesData.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default recipes;
