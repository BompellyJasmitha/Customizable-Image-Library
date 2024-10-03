import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";


import Home from "./Components/home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx"


 export default function App(){

        return(

            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Register" element={<Register/>}/>

                </Routes>
            </BrowserRouter>

       )
 }


