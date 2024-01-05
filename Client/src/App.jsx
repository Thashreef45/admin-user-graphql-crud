import { Route, Routes } from "react-router-dom"
import UserRoutes from "./routes/UserRoutes"
import AdminRoutes from "./routes/AdminRoutes"


function App() {

  return (
    <>
      <Routes>

        <Route path="/user/*" element={<UserRoutes />} />
        <Route  path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </>
  )
}

export default App
