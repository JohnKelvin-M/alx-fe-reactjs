// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe
    navigate('/'); // Redirect to the home page (or recipe list)
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
