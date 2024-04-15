import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function editRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
  });
  console.log(recipe)
  const { id } = useParams();
  const navigate = useNavigate();

  const api = import.meta.env.VITE_API;

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
      .then(({ data }) => {
        navigate(`/recipes/${data.payload}`);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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
          <input
            type="textarea"
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleTextChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default editRecipe;
