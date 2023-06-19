import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Alldetails() {

const [cosmetics,setCosmatics] = useState([]);

useEffect(()=>{
   function getCosmetics() {
       axios.get("http://localhost:8070/Cosmetic/").then((res)=>{
           setCosmatics(res.data);
       }).catch((err)=>{
           alert(err.message);
       })
   }
    getCosmetics();
}, [])


    return (

        <div className="comtainer">
            <br />
            <br />
            <br />
            <br />
            <br />
          
            
        </div>

    )
          }        
