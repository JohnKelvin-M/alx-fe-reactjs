// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'; // Assuming you have this component
import RecipeDetails from './components/RecipeDetails'; // Component for recipe details
import AddRecipeForm from './components/AddRecipeForm'; // Component for adding recipes

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
