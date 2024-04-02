import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
        //  console.log(data.payload)
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleEditRecipe = () => {
    navigate(`/recipes/${id}/edit`);
  };

  const handleDeleteRecipe = () => {
    axios.delete(`${api}/recipes/${id}`).then({ data });
  };

  return (
    <div>
      <div>
        <img src={recipeData.image_url} />
        <h1>{recipeData.name}</h1>
        <h3>{recipeData.description}</h3>
        <div>
          <button onClick={handleEditRecipe}>Edit</button>
          <button onClick={handleDeleteRecipe}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default recipeDetail;
