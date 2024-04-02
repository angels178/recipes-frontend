import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes/recipes";
import RecipeDetail from "./components/RecipeDetail/recipeDetail";
import EditRecipe from "./components/EditRecipe/editRecipe";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
