import React,{useContext, useState,useEffect} from 'react'

import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {
  
//   useEffect(()=>{
// // setLocalStorage()
// getLocalStorage();
//   },[])


const [user,setUser] = useState(null);
const authData = useContext(AuthContext);

useEffect(()=>{
  if(authData){
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    if(loggedInUser){
      if(loggedInUser.role === 'admin'){
        setUser('admin')
      }else if(loggedInUser.role === 'employee'){
        setUser(loggedInUser.data)
      }
    }
  }
},[authData])

const handleLogin = (email,password)=>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  }else if(authData){
    const employee = authData.employees.find((e)=>e.email === email && e.password === password)
    if(employee){
      setUser(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
    }else{
      alert("Invalid Credentials")
    }
  }else {
    alert("Invalid Credentials")
  }
}
   



  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
     {user === 'admin'? <AdminDashboard/> : user ? <EmployeeDashboard data={user} /> : null }

    </>
  )
}

export default App
