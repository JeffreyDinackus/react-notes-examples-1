import jobs from '../jobs.json'


import Job from './Job'
const ViewAllJobs = () => {



  return (
    <>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}

    </>
  )
}

export default ViewAllJobs