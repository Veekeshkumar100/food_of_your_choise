import Navbar from "./component/navbar/navbar"
import Sidebar from "./component/sidebar/Sidebar"

function App() {
  return (
    <>
     <Navbar/>
     <hr />
     <div className="app-container">
   <Sidebar/>
     </div>
    </>
  )
}

export default App
