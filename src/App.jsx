import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";


import Home from "./Components/home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx"
import Imagepage from "./Components/imagepage.jsx"


 export default function App(){

        return(

            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Imagepage" element={<Imagepage/>}/>

                </Routes>
            </BrowserRouter>

       )
 }


