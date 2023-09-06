
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger"



function App() {

  const {user} = useContext(AuthContext);
  
  return (
  
    <Router>
    <Routes>
        <Route   path="/social-app" element={user ? <Home /> : <Register /> }>  </Route>
        <Route  exact path="/social-app/login" element={user ? <Navigate to ="/social-app" /> : <Login />} />
        <Route  exact path="/social-app/register" element={user ? <Navigate to ="/social-app"/> : <Register />} />
        <Route  exact path="/social-app/messenger" element={ !user ? <Navigate to ="/social-app"/> : <Messenger />} />
        <Route  exact path="/social-app/profile/:username" element={<Profile />} />
    </Routes>
  </Router>
  
     

  );
}

export default App;
