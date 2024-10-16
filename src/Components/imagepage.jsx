import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../style/index.css'


const Imagepage = () => {
    let location=useLocation();
    let navigate=useNavigate()


    console.log(location)

    let image=location.state.x.webformatURL;
    let imagesdata=location.state.api

    let [touchimage,setTouchimage]=useState(image)

  return (
   <>
    <div id="DummyDiv"></div>
    <div id="imagesdiv">
    <div onClick={()=>navigate("/Home")}> GO BACK TO HOME</div>
      <img id='images' src={touchimage} alt="imagepage images are failed"  />
    </div>
    <div id="categorieimagesdiv2" >
       {imagesdata.map(x=><img onClick={()=>setTouchimage(x.webformatURL)} src={x.webformatURL} style={{height:"97vh"}}/>)}
    </div>
    </>
  )
}

export default Imagepage
