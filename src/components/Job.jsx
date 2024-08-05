import '../jobs.json'
import { useState } from 'react'

/* eslint-disable react/prop-types */


const Job = ({ job }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);



  let description = job.description;

  if (!showFullDescription) {

    description = description.substring(0, 90) + '...';
  }


  return (
    <>

      <div key={job.id} className="flex items-center justify-between p-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{description}</p>
          <button onClick={() => setShowFullDescription((prevState) => (!prevState))} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? "Less" : "More"}</button>
        </div>
      </div>




    </>
  )
}

export default Job