const WantToCook = ({ recipe }) => {
    const { recipe_title, id, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="flex justify-between gap-5 p-4 bg-green-100 text-black items-center rounded-lg text-xs font-semibold mb-4">
                <p>{id}</p>
                <p>{recipe_title}</p>
                <p>{preparing_time} minutes</p>
                <p>{calories} calories</p>
                <button className="px-2 py-1 text-xs text-black hover:bg-purple-300 bg-green-400 rounded-full">Preparing</button>
            </div>
        </div>
    );
};

export default WantToCook;