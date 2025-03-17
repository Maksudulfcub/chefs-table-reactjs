const Recipe = ({ recipe }) => {

    const { recipe_img, recipe_title, recipe_description, calories, preparing_time, ingredients } = recipe;

    return (
        <div className="px-5 lg:px-0 mt-10">
            <div className="space-y-4 p-6 border border-green-500 rounded-xl shadow-lg hover:shadow-green-500">
                <img className="lg:w-[300px] md:w-[200px] rounded-lg" src={recipe_img} alt="" />
                <h4 className="text-2xl font-semibold">{recipe_title}</h4>
                <p className="text-gray-400 text-sm">{recipe_description}</p>
                <hr className="text-gray-600 border-dashed" />
                <div>
                    <p className="font-semibold mb-2">Ingredients : {ingredients.length}</p>
                    {
                        ingredients.slice(0, 3).map((ingredient, idx) => <li
                            className="text-gray-400 text-sm"
                            key={idx} ingredient={ingredient}>
                            {ingredient}
                        </li>)
                    }
                </div>
                <div className="flex justify-between text-sm font-semibold">
                    <p><span>{preparing_time}</span> minutes</p>
                    <p><span>{calories}</span> calories</p>
                </div>
                <button className="px-4 py-2 text-sm text-black font-bold hover:bg-purple-300 bg-green-400 rounded-full">Want to cook</button>
            </div>
        </div>
    );
};

export default Recipe;