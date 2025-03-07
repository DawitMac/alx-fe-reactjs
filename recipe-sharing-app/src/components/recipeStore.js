import { create } from "zustand";

 const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (newRecipe) =>{
    set((state) => ({ recipes: [...state.recipes, newRecipe] }))
  },

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  deleteRecipe: (id) => {
    set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) }))
  },
  updateRecipe : (id, updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) => {
        if (recipe.id === id) {
          return { ...recipe, ...updatedRecipe };
        }
        return recipe;
      }),
    }));
  },
  setRecipes: (recipes) =>{ 
    set({ recipes })
  },

  // setSearchTerm: (term) => {
  //   console.log("term", term)
  //   set({ searchTerm: term })
  // },
  
  // filteredRecipes: () => {
  //   const { recipes, searchTerm } = get();
  //   return recipes.filter((recipe) =>
  //     recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // },
}));

export default useRecipeStore;