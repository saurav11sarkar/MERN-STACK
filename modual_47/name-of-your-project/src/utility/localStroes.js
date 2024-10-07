const getStroedJobApplicaton = () => {
    const stroedJobApplication = localStorage.getItem('job-applications');
    if (stroedJobApplication) {
        return JSON.parse(stroedJobApplication)
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStroedJobApplicaton();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export { getStroedJobApplicaton, saveJobApplication };