import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'


const NotFoundPage = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <FaExclamationTriangle className='text-yellow-400 text-6xl' />
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">go home</Link>



    </>
  )
}

export default NotFoundPage