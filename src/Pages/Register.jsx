import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages.css";

export default function Register(){

    let nav=useNavigate();
    let login=()=>{nav("/")}

    function collectedData(){

        let name = document.getElementById("Rusername").value;
        let key = document.getElementById("Rpassword").value;


        // storing in localStorage 

        window.localStorage.setItem("UserName",name);
        window.localStorage.setItem("Password",key);

        alert("registered Successfully")


    }


    return(<>

            <div id="DummyDiv"></div>

            <div id="loginDiv">

                <form action="">

                <h1>Register Page</h1>
                <input id="Rusername" type="type"  placeholder= " 👤 Enter Username " />
                <input id="Rpassword" type="type"  placeholder= " 🔐 Enter Password "/>
       
                <input type="submit" value="Register"  onClick={collectedData}/>

                </form>

                <p onClick={login}> Login Now </p>

            </div>

    </>)

}