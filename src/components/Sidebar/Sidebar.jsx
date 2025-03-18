import WantToCook from "../WantToCook/WantToCook";

const Sidebar = ({ wantToCook, cookItem }) => {
    return (
        <div className="lg:w-1/3 mt-3 lg:mt-16 border border-green-500 rounded-xl p-5">
            <h1 className="text-2xl font-semibold text-center mb-4">Want to cook : {cookItem}</h1>
            <hr className="border-dashed text-gray-600" />
            <div className="flex justify-around gap-3 lg:gap-0 font-semibold text-sm text-gray-400 py-5">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div>
                {
                    wantToCook.map((recipe, idx) => <WantToCook key={idx} recipe={recipe}></WantToCook>)
                }
            </div>
        </div>
    );
};

export default Sidebar;