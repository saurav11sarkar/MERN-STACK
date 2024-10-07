import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedJobApplicaton } from "../../utility/localStroes";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    };

    useEffect(() => {
        const storedJobIds = getStroedJobApplicaton();
        if (jobs.length > 0) {
            const jobsApplied = storedJobIds.map(id => jobs.find(job => job.id === id)).filter(job => job);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <h2>Applied Jobs: {appliedJobs.length}</h2>

            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {displayJobs.map(job => (
                    <li key={job.id}>{job.job_title} at {job.company_name} ({job.remote_or_onsite})</li>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJobs;
