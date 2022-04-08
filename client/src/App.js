import React from 'react'
import "./App.css"
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Cookie from './Components/Cookie'
import Terms from './Components/Terms'
import History from './Components/History'
import Upload from './Components/Upload'
import Aproduct from './Components/Aproduct'
import NavbarUser from './Components/NavbarUser'
import Userhome from './Components/Userhome'
import Adminhome from './Components/Adminhome'
import NavbarAdmin from './Components/NavAdmin'
import Display from './Components/Display'
import Result from './Components/Result'

const App = () => {
  return(
    <div>

      {/* <Navbar /> */}
      {/* <Aproduct/> */}
      {/* <Home/> */}
      <Route exact path="/">
      <Navbar />
        <Home />
      </Route>

      <Route path="/signup">
      <Navbar />
        <Signup />
      </Route>

      <Route path="/signin">
      <Navbar />
        <Signin />
      </Route>

      <Route exact path="/contact">
      <NavbarUser />
        <Contact />
      </Route>

      <Route exact path="/cookie">
        <Cookie />
      </Route>

      <Route exact path="/terms">
        <Terms />
      </Route>

      <Route exact path="/history">
      <NavbarUser/>
        <History />
      </Route>

      <Route exact path="/upload">
      <NavbarUser/>
        <Upload />
      </Route>

      <Route exact path="/aproduct">
      <NavbarAdmin/>
        <Aproduct/>
      </Route> 

      <Route exact path="/userhome">
      <NavbarUser/>
        <Userhome/>
      </Route>

      <Route exact path="/adminhome">
      <NavbarAdmin/>
        <Adminhome/>
      </Route>

       <Route exact path="/display">
       <NavbarUser/>
         <Display/>
       </Route>

       <Route exact path="/result">
       <NavbarUser/>
         <Result/>
       </Route>
      
      {/* <Footer/> */}
    </div>
  )
}

export default App