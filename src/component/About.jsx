import React from 'react'
import { useState,useEffect } from 'react';

export default function About(props)
{
  const[theme , setTheme] = useState("light")


  useEffect(()=>{
    setTheme(`${props.mode === 'light'?"dark":"light "}`)
  })

  return (
    <>
    <div className="home">
      <center>
        <h1>About</h1>
      </center>
      <p className={`text-${theme}`}>
        This Application is created in React js
      </p>

      <p className={`text-${theme}`}>
       This Application help user to convert larger or smaller paragraph , count the words and characters , user can copy text which is written in textbox, user can clear all text by click the clear button
      </p>

      <div className="container">
      <div style={{ marginbottom: "10px" }}>
      <center>
        <div style={{marginTop:"55px" , fontSize:"25px" , fontWeight:"bolder", fontStyle:"italic" ,fontFamily:"cursive" , letterSpacing:"0.05em"}}  className={`text-${theme}`}>
          Copyright | All Rights Reserved By Aks Ramani. 

        </div>
      </center>
    </div>
      </div>

    </div>
    </>
  )
}