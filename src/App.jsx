import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes/recipes";
import RecipeDetail from "./components/RecipeDetail/recipeDetail";
import EditRecipe from "./components/EditRecipe/editRecipe";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        <Route path="/recipes/new" element={<RecipeForm />} />
      </Routes>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
