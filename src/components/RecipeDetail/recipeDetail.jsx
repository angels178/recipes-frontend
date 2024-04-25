import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./recipeDetail.css";

function recipeDetail() {
  const [recipeData, setRecipeData] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const api = import.meta.env.VITE_API;

  useEffect(() => {
    axios
      .get(`${api}/recipes/${id}`)
      .then(({ data }) => {
        setRecipeData(data.payload);
        console.log("Recipe data:", data.payload);
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleEditRecipe = () => {
    navigate(`/recipes/${id}/edit`);
  };

  // after deleting it navigates back to the recipes page.
  const handleDeleteRecipe = () => {
    axios.delete(`${api}/recipes/${id}`).then(() => {
      navigate(`/recipes`);
      confirm(`Are you sure you want to delete ${recipeData.name}`);
    });
  };

  return (
    <div className="recipe_detail_container">
      <div>
        <h1>{recipeData.name}</h1>
        <h3>{recipeData.description}</h3>
        <p className="ingredients">
          <strong>Ingredients: </strong>
          {recipeData.ingredients}
        </p>
      </div>

      <div className="recipe-prepping">
        <p>
          <strong>prep time:</strong> {recipeData.prep_time}
        </p>
        <p>
          <strong>cooking time:</strong> {recipeData.cooking_time}
        </p>
        <p>
          <strong>serving:</strong> {recipeData.serving}
        </p>
      </div>
      <div>
        <button onClick={handleEditRecipe}>Edit</button>
        <button onClick={handleDeleteRecipe}>Delete</button>
      </div>
    </div>
  );
}

export default recipeDetail;
