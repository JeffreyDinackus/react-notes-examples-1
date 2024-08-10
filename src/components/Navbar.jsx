import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    //jobs navbars with tailwind styling
    //link won't reload page
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <Link to="/">go to home page</Link>

      <Link to="/jobs">go to jobs page</Link>
      <Link to="/add-job">go to jobs page</Link>
    </nav>
  )
}

export default Navbar