// import { useState } from 'react'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}  >
      <Route index element={<HomePage />} />,
      <Route path='/jobs' element={<JobsPage />} />,
      <Route path='*' element={<NotFoundPage />} />,
    </Route>,


  )
);


const App = () => {
  // const [count, setCount] = useState(0)




  // <>
  //   <Route path="/" element={<Hero title="title" subtitle="subtitle" />} />
  //   <Route path="/" element={<HomeCards />} />
  //   <Route path="/" element={<JobListings />} />
  //   <Route path="/" element={<ViewAllJobs />} />
  // </>


  return (
    <RouterProvider router={router} />
  )
}

export default App
