import { Outlet } from "react-router-dom"
import Footer from "./Page/Footer/Footer"


function App() {
  

  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
