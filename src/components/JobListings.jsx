import jobs from '../jobs.json'


const JobListings = () => {
  return (
    <>
      {jobs.map((job, id) => (
        <div key={id} className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{job.description}</p>
          </div>
        </div>
      ))}

    </>
  )
}

export default JobListings