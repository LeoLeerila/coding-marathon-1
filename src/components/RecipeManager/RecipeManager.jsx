import React, { useState } from "react";
import Recipe from "./Recipe";
import './RecipeManager.css'

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", cuisine: "", difficulty: "", cookTime: "", servings: "", allergens: "" });

  //take the target, and apply any possible changes on the already existing array without overwriting any other inputs.
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  }

  function addRecipe() {
    //checks to make sure the name or the ingredients fields are not empty before proceeding.
    if (newRecipe.name.trim() !== "" && newRecipe.ingredients.trim() !== "") {
      setRecipes((r) => [...r, newRecipe]);
      setNewRecipe({ name: "", ingredients: "", cuisine: "", difficulty: "", cookTime: "", servings: "", allergens: "" });
    }
  }

  function deleteRecipe(index) {
    //filters out the clicked element from the recipes array
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter recipe name..."
          name="name"
          value={newRecipe.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter ingredients..."
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter cuisine..."
          name="cuisine"
          value={newRecipe.cuisine}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter difficulty..."
          name="difficulty"
          value={newRecipe.difficulty}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter cooking time..."
          name="cookTime"
          value={newRecipe.cookTime}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter servings..."
          name="servings"
          value={newRecipe.servings}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter allergens..."
          name="allergens"
          value={newRecipe.allergens}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol className="recipe-output">
        {/* Map out each item within 'recipes' array*/}
        {recipes.map((recipe, index) => (
          //An arrow function seemed to work wonders to make the delete function actually function. Before that, 
          // 'deleteRecipe' would not be able to take parameters without bricking the entire website.
          <Recipe key={index} recipe={recipe} onDel={() => deleteRecipe(index)}/>
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;