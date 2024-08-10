import '../jobs.json'
import { useState } from 'react'

import { FaMapMarker } from 'react-icons/fa';

import { Link } from 'react-router-dom';
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
          <div>

            <FaMapMarker className="inline-block text-gray-500 text-lg mb-1 mr-1" />

            {job.location}</div>


          <button onClick={() => setShowFullDescription((prevState) => (!prevState))} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? "Less" : "More"}</button><br />
          <Link className="cursor-pointer text-blue-500" to={`/job/${job.id}`}>Show full job</Link>

        </div>
      </div>




    </>
  )
}

export default Job