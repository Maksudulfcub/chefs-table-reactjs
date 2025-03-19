const CurrentlyCooking = ({ currentlyCook }) => {

    const { recipe_title, id, preparing_time, calories } = currentlyCook;

    return (
        <div>
            <div className="lg:flex justify-between gap-5 p-4 bg-green-100 text-black items-center rounded-lg text-xs font-semibold mb-4">
                <p>{id}</p>
                <p>{recipe_title}</p>
                <p>{preparing_time} minutes</p>
                <p>{calories} calories</p>
            </div>
        </div>
    );
};

export default CurrentlyCooking;