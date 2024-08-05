import jobs from '../jobs.json'
import Job from './Job'


const JobListings = () => {




  const recentJobs = jobs.slice(0, 3)



  return (
    <>
      {recentJobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}

    </>
  )
}

export default JobListings