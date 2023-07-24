import { useEffect, useState } from "react";
import AdmissionCard from "./AdmissionCard";

const MyCollege = () => {
    const [admissions, setAdmissions] = useState([])
    useEffect( () => {
        fetch('https://college-booking-server-ovi-khan.vercel.app/collegeData')
        .then(res => res.json())
        .then(data => setAdmissions(data))
    } ,[])
    
    return (
        <div className="mt-10">
            <h1 className="text-4xl text-center text-green-600">Admitted <span className="text-orange-500">Students</span></h1>
            <div className="grid lg:grid-cols-2 mt-20 gap-10">
                {
                    admissions.map(admission => <AdmissionCard
                        key={admission._id}
                        admission={admission}
                    ></AdmissionCard>)
                }
            </div>
        </div>
    );
};

export default MyCollege;