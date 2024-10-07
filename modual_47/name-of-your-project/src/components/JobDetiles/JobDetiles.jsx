import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStroes";


const JobDetiles = () => {
    

    const jobs = useLoaderData();
    const { id } = useParams();
    console.log(id, jobs);
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }
    return (
        <div>
            <h2>Job detalis of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border grid md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                </div>
                <div className="border grid md:col-span-1">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ...">Apply Now</button>
                </div>


            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetiles;