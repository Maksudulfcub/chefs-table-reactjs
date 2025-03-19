import { useState } from "react";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import TotalAmount from "../TotalAmount/TotalAmount";

const Sidebar = ({ wantToCook, cookItem }) => {

    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleAddCurrentlyCooking = (currentlyCook, time) => {
        const newCooking = [...currentlyCooking, currentlyCook];
        setCurrentlyCooking(newCooking);
        setCurrentItem(currentItem + 1);
        setTotalTime(totalTime + time);
    }

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
                    wantToCook.map((recipe, idx) => <WantToCook
                        key={idx}
                        recipe={recipe}
                        handleAddCurrentlyCooking={handleAddCurrentlyCooking}
                    ></WantToCook>)
                }
            </div>

            <div className="mt-20">
                <h1 className="text-2xl font-semibold text-center mb-4">Currently cooking : {currentItem}</h1>
                <hr className="border-dashed text-gray-600" />
                <div className="flex justify-around gap-3 lg:gap-0 font-semibold text-sm text-gray-400 py-5">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <div>
                    {
                        currentlyCooking.map((currentlyCook, idx) => <CurrentlyCooking
                            key={idx}
                            currentlyCook={currentlyCook}
                            totalTime={totalTime}
                        ></CurrentlyCooking>)
                    }
                </div>
            </div>
            <TotalAmount totalTime={totalTime}></TotalAmount>
        </div>
    );
};

export default Sidebar;