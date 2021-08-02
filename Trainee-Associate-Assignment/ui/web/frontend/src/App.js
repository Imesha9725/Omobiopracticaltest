import React, { Component } from "react";
import './App.css';


function App() {
  return (
           
<div className="Basic">
<form action='index.php' method='post'>
<div className="container">
    <center><h1>Login</h1></center>
    
    <hr></hr>

    <label htmlFor=""><h3>User name</h3></label>
    <input type="text" placeholder="Enter your user name" name="username" id="" required></input>

    <label htmlFor="psw"><h3>Password</h3></label>
    <input type="text" placeholder="Enter your password" name="password" id="" required></input>

    
    
    <hr></hr>

    <button type="submit" className="registerbtn1">Login</button>
    <br></br>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>

</form>
</div>
  );
}

export default App;
