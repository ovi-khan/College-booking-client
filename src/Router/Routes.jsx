import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Sheared/CollegeDetails/CollegeDetails";
import CollegeSection from "../Pages/Home/CollegeSection/CollegeSection";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'college',
                element: <CollegeSection></CollegeSection>
            },
            {
                path: '/collegedetails/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({params}) => fetch(`collegeData.json/${params.id}`)
            }
        ]
    }
])