import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage.js';
import User from './Components/User/User.js';
import UserSignup from './Components/User/UserSignup.js';
import UserLogin from './Components/User/UserLogin';
import { useState } from 'react';
import AdminSignup from './Components/Admin/AdminSignup';
import AdminLogin from './Components/Admin/AdminLogin';
import Admin from './Components/Admin/Admin';
import UserSite from './Components/User/UserSite';
import UserForget from './Components/User/UserForget';
import UserReset from './Components/User/UserReset';
import AdminSite from './Components/Admin/AdminSite';
import AdminForget from './Components/Admin/AdminForget';
import AdminReset from './Components/Admin/AdminReset';
import Billing from './Components/User/Billing';
 
function App() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [adminEmail,setAdminEmail] = useState();
  const [adminPassword,setAdminPassword] = useState();
  return (
    <div className="App">
      <Routes>
 <Route exact path = "/"
 element={<FirstPage/>}/>
 <Route path="/user"
 element={<User/>}/>
 <Route
 path="/usersignup"
 element={<UserSignup
 email={email}
 setEmail={setEmail}
 password={password}
 setPassword={setPassword}
 />}
 />
 <Route
 path="/userlogin"
 element={<UserLogin
  email={email}
  setEmail={setEmail}
  password={password}
  setPassword={setPassword}
 />}
 />
 <Route
 path='/userforget'
 element={<UserForget
  email={email}
 />}
 />
 <Route
 path='userreset/:id/:token'
 element={<UserReset
 email={email}
 />}
 />
 <Route
 path='/admin'
 element={<Admin/>}
 />
  <Route
 path="/adminsignup"
 element={<AdminSignup
  adminEmail={adminEmail}
  setAdminEmail={setAdminEmail}
  adminPassword={adminPassword}
  setAdminPassword={setAdminPassword}
 />}
 />
  <Route
 path="/adminlogin"
 element={<AdminLogin
  adminEmail={adminEmail}
  setAdminEmail={setAdminEmail}
  adminPassword={adminPassword}
  setAdminPassword={setAdminPassword}
 />}
 />
 <Route
 path='/adminforget'
 element={<AdminForget
 adminEmail={adminEmail}
 />}
 />
 <Route
 path='adminreset/:id/:token'
 element={<AdminReset
 adminEmail={adminEmail}
 />}
 />
 <Route
 path='adminsite'
 element={<AdminSite/>}
 />
 <Route
 path='usersite'
 element={<UserSite/>}
 />
 <Route
 path='userbill'
 element={<Billing/>}
 />
 </Routes>
    </div>
  );
}

export default App;
