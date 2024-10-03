import React from 'react';
import {useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../style/index.css"



export default function Home(){
    
    let [api,setapi]=useState([]);
    let [search,updatedsearch]=useState([]);

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=46193762-045d446c2ae43534f6e21c4bb&q=${search}&image_type=photo&pretty=true`)
        
        .then(x=>x.json())
        .then( x=>{setapi(x.hits)})
        .catch((error)=>{console.log("API Failed in home.jsx",error)});    
    })                                                                 

    let change=(e)=>{updatedsearch(e.target.value)
    }

    let navigate=useNavigate()
    let logout=()=>{navigate("/")}

    // console.log(search)

    return(<>

        <div id="homeDiv" >

            <div id="navDiv">
                
                <i onClick={logout} className="fa-solid fa-right-to-bracket" id="login"></i>

                <h1>SEFDO</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolore beatae ullam rerum ipsum asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, explicabo.</p>

                <input type="search" onChange={change} placeholder="Search for more images" />

               <div>
                <i className="fa-brands fa-instagram" ></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                </div>
            </div> 
            <div id="dummyDiv"></div>
            <div id="imageDiv">
                 {
                     api.map((x,a)=>
                         {return(
                         <img key={a} src={x.webformatURL}  ></img>
                         )})
                 }
            </div>
    </div>
    </>)
    }

