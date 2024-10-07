import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl p-3">
                <figure>
                    <img
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className='flex gap-4'>
                        <button className="btn border-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='flex gap-2'><GrLocation className='text-2xl' /> {location}</h2>
                        <h2 className='flex gap-2'><TbCoinTaka className='text-2xl' /> Salary : {salary}</h2>

                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/jobs/${id}`} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ...">View Details</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

Job.propTypes = {
    job: PropTypes.object,
};

export default Job;