
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import StatSection from './Components/StatSection'
import Tab from './Components/Tab'
import Cards from './Components/Cards'

function App() {
  const fetchData= async ()=>{
    const res=await fetch("/Tools.json");
    return res.json()
  }
  const dataPromise=fetchData();

  return (
    <>
      <Navbar/>
      <Banner/>
      <StatSection/>
      <Tab/>
      <Suspense>
        <Cards dataPromise={dataPromise}/>
      </Suspense>
      
    </>
  )
}

export default App
