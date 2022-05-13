import { useState } from "react";
import React from 'react';



export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")
  }

  const handleloClick = ()=>{
    // console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }
 
  const handleclrClick = ()=>{
    // console.log('Uppercase was clicked' + text);
    let newText = "";
    setText(newText)
    props.showAlert("Screen cleared","success")
  }
  
  const handlecopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clip board ","success")
  }
  const handlermvSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
  }

  const handleOnChange = (event)=>{
    // console.log('on change')
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here');
  return (
          <>
          <div className="container" style={{color:props.mode==='dark'?'white':'#01212c'}}> 
             <h3>{props.heading}</h3>
              <div className="mb-3">
                  <label htmlFor="myBox" className="form-label">Enter Text</label>
                  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
               </div>
                 <button className=" btn  btn-primary" onClick={handleUpClick}>Convert to Upper case</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button className=" btn  btn-primary" onClick={handleloClick}>Convert to Lower case</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button className=" btn  btn-primary " onClick={handlecopy}>Copy text</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button className=" btn  btn-primary " onClick={handlermvSpace}>Remove Extra Space</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button className=" btn  btn-primary " onClick={handleclrClick}>Clear Screen</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                 
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#01212c'}}>
              <h3>Your text Summary</h3>
              <p>{text.split(" ").length} words and {text.length} characters </p>
            </div>
          </>
  )
} 
