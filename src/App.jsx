// import { useState } from 'react'



import './App.css'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hero title="title" subtitle="subtitle" />
      <HomeCards />
      <JobListings />

      <ViewAllJobs />
    </>
  )
}

export default App
