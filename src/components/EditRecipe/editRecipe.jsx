import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function editRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    image_url: "",
    description: "",
  });
  const { id } = useParams();

  const api = import.meta.env.VITE_API;

  useEffect(() => {
    axios
      .get(`${api}/recipes/${id}`)
      .then(({ data }) => {
        console.log(data);
        setRecipe(data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleTextChange(event) {
    setRecipe({ ...recipe, [event.target.id]: event.target.value });
  }

  return (
    <div>
      <form>
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
          <label>Image:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={recipe.image_url}
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            textarea="text"
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleTextChange}
          />
        </div>
      </form>
      <button>Submit</button>
    </div>
  );
}

export default editRecipe;
