import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Sheared/CollegeDetails/CollegeDetails";
import CollegeSection from "../Pages/Home/CollegeSection/CollegeSection";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Admission from "../Pages/Admission/Admission";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/collegedetails/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/collegeData/${params.id}`)
            }
        ]
    }
])