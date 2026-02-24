import Navbar from "./components/Navbar"
import './App.css'
import Footer from "./components/Footer"
import IssueManagement from "./components/IssueManagement"
import { Suspense } from "react"


const fetchData = async () => {
  const response = await fetch("/data.json");
  return response.json();
}



function App() {

const fetchPromise = fetchData();

  return (
    <>
  
    <Navbar />

     {/* issue management  */}
      <Suspense fallback={<div className="h-screen w-screen flex justify-center items-center"><span className="loading loading-spinner text-neutral"></span></div>}>
        <IssueManagement fetchPromise={fetchPromise} />
      </Suspense>


    <Footer />


    </>
  )
}

export default App
