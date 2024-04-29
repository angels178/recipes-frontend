import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeForm.css";

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    prep_time: "",
    cooking_time: "",
    serving: "",
  });

  const navigate = useNavigate();

  const api = "Production"
    ? "https://recipes-backend-practice.onrender.com"
    : import.meta.env.VITE_API;

  const handleInput = (event) => {
    // assign the variable
    //
    const { name, value } = event.target;

    setRecipe({ ...recipe, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`${api}/recipes`, recipe)
      .then(({ data }) => {
        navigate(`/recipes/${data.payload.id}`);
        console.log(data.payload);
        alert(`${recipe.name} has been added.`);
      })
      .catch((error) => console.warn(error));
  }

  return (
    <div className="new_form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            placeholder="Recipe Name"
            onChange={handleInput}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            type="textarea"
            name="description"
            value={recipe.description}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Ingredients :</label>
          <textarea
            type="textarea"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Prep Time:</label>
          <input
            type="text"
            name="prep_time"
            value={recipe.prep_time}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Cooking Time:</label>
          <input
            type="text"
            name="cooking_time"
            value={recipe.cooking_time}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Serving:</label>
          <input
            type="number"
            min="0"
            max="10"
            name="serving"
            value={recipe.serving}
            onChange={handleInput}
          />
        </div>

        <button type="submit">Create New Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
