import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import CollegeCard from "../CollegeCard/CollegeCard";

const CollegeSection = () => {
    const [collegeData, setCollegeData] = useState([]);
    const location = useLocation(); // Get the current location object

    useEffect(() => {
        fetch('collegeData.json')
            .then(res => res.json())
            .then(data => setCollegeData(data));
    }, []); // Fetch data only once on initial mount

    // Function to filter the data based on the route
    const filterDataByRoute = () => {
        if (location.pathname === '/home') {
            return collegeData.slice(0, 3); // Display the first 3 cards for the "home" route
        } else {
            return collegeData;
        }
    };

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    filterDataByRoute().map(data => (
                        <CollegeCard
                            key={data.id}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CollegeSection;
