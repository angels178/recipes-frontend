import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Api/Api";
import "./editRecipe.css";

function editRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    prep_time: "",
    cooking_time: "",
    serving: 0,
  });
  console.log(recipe);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${api}/recipes/${id}`)
      .then(({ data }) => {
        setRecipe(data.payload);
      })
      .catch((error) => console.warn(error));
  }, [id]);

  function handleTextChange(event) {
    setRecipe({ ...recipe, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`${api}/recipes/${id}`, recipe)
      .then(() => {
        navigate(`/recipes/${id}`);
      })
      .catch((error) => console.warn(error));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            placeholder="Recipe Name"
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            type="textarea"
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleTextChange}
            required
          />
        </div>

        <div>
          <label>Ingredients:</label>
          <textarea
            type="textarea"
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleTextChange}
            required
          />
        </div>

        <div>
          <label>Prep Time:</label>
          <input
            type="text"
            id="prep_time"
            name="prep_time"
            value={recipe.prep_time}
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label>Cooking Time:</label>
          <input
            type="text"
            id="cooking_time"
            name="cooking_time"
            value={recipe.cooking_time}
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label>Serving:</label>
          <input
            type="number"
            id="serving"
            name="serving"
            min="0"
            max="10"
            value={recipe.serving}
            onChange={handleTextChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default editRecipe;
