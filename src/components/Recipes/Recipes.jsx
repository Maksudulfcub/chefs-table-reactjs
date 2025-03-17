import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])

    return (
        <div className="w-2/3">
            <h2 className="font-bold px-5 lg:px-0">Total Recipes : {recipe.length}</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    recipe.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;