import React from "react";
import "../style/pages.css";
import { useNavigate} from "react-router-dom";


export default function Login(){

    let nav=useNavigate()
    let Register=()=>{nav("/Register")}

    function verification(){
        let name=document.getElementById("Lusername").value;
        let pswd=document.getElementById("Lpassword").value;

        if(name===window.localStorage.getItem("UserName")&&(pswd===window.localStorage.getItem("Password"))){
            window.open("/Home")
        }
        else{
            alert("Enter Valid Credentials")
        }

    }


    return(<>

            <div id="DummyDiv"></div>

            <div id="loginDiv">

            <form action="">
                <h1>Login Page</h1>
                <hr/>
                <input id="Lusername" type="type" placeholder=" 👤 Enter Username " />
                <input id="Lpassword" type="type" placeholder=" 🔐 Enter Password "/>
                <input type="submit" onClick={verification} value="Home"/>
            </form>

                <p onClick={Register}> Register Now</p>

            </div>

    

    </>)

}