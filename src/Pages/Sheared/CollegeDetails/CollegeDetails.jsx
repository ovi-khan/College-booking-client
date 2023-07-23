import { useLoaderData, useParams } from "react-router-dom";


const CollegeDetails = () => {
    
    const { id } = useParams()
    const collegeData = useLoaderData()
    console.log(collegeData)
    const {college_name, college_image, events, research_history, sports} = collegeData
    return (
        <div>
            <img src={college_image} alt="" />
            <h1>{college_name}e</h1>
        </div>
    );
};

export default CollegeDetails;