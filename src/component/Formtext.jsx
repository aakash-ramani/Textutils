import React from "react";
import { useState, useEffect } from "react";

export default function Formtext({mode }) {
  // set the value of val
  // const [val, setval] = useState(null);  
  // const [person, setPerson] = useState("aks");
  // const [value, setValue] = useState(true);
  const [txtval ,setTxtval] = useState("")
  const[alrtmsg , setAlrtrmsg] =useState()
  const[cn , setCn]= useState()
  const[wrd , setWrd]=useState(0)
  const[theme , setTheme] = useState("light")


  useEffect(()=>{
    setTheme(`${mode === 'light'?"dark":"light "}`)
    // console.log(setTheme)
  })


  const handleClick = () => {
    let newText = txtval.toLocaleUpperCase()
    setTxtval(newText)
    setAlrtrmsg("Text Cnvert in to Upper Case")
    setCn("alert alert-primary")
    setTimeout(() => {
      setAlrtrmsg()
      setCn("")
    }, 1000);
  };
  const handleClk = () => {
    let newText = txtval.toLocaleLowerCase()
    setTxtval(newText)
    setAlrtrmsg("Text Change in Lower Case")
    setCn("alert alert-primary")
    setTimeout(() => {
      setAlrtrmsg()
      setCn("")
    }, 1000);
  };
  const handleClear = () => {
    setTxtval('')
    setAlrtrmsg("Text Box Cleared")
    setCn("alert alert-primary")
    setTimeout(() => {
      setAlrtrmsg()
      setCn("")
    }, 1000);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(txtval)
    setAlrtrmsg("copied")
    setCn("alert alert-primary")
    setTimeout(() => {
      setAlrtrmsg()
      setCn("")
    }, 1000);
  };
  
  
  // const handleText =(event)=>{
  //   setTxtval(event.target.value)
  //   setWrd(txtval.replace(/\s+/g," ").trim().split(" ").length)
  // }


  return (
    <div>
        <div className={cn} role={"alert"}>{alrtmsg}</div>
      <div className="mb-3">
        <h2 className={`text-${theme}`}>Textform</h2>
      
      </div>
      <textarea className={`box bg-${mode === 'light'?"light":"dark "} my-3`} placeholder="enter text here" style={{color:mode === 'light'?"black":"white "}} value={txtval} cols={80} rows={5} onChange={(e)=> {setTxtval(e.target.value);setWrd(txtval.replace(/\s+/g," ").trim().split(" ").length)}}></textarea><br></br>

        <p className={`text-${theme}`}>
          <b>Number of Character:-{txtval.length}  and Number of words:- {txtval.length>0?txtval.replace(/\s+/g," ").trim().split(" ").length:0}</b>
        </p>

        <h2 className={`text-${theme}`}>Preview</h2>

        <p className={`text-${theme}`}>{txtval.length>0?txtval:"Enter Somthing To Privew"}
        </p>

        {/* <p className={`text-${theme}`}>
          <b>name :-{person}</b>
        </p> */}

        <button type="button" className={`btn btn-danger ${txtval.length<=0?"disabled":""}`} onClick={handleClick}> change into UpperCase </button>
        <button type="button" className={`btn btn-danger ${txtval.length<=0?"disabled":""}`} onClick={handleClk}> change into LowerCase </button> 
        <button type="button" className={`btn btn-danger ${txtval.length<=0?"disabled":""}`} onClick={handleClear}> Clear </button> 
        <button type="button" className={`btn btn-danger ${txtval.length<=0?"disabled":""}`}  onClick={handleCopy}> Copy </button> 
        {/* <button type="button" className="btn btn-danger" onClick={() => setPerson("AAKASH")}>changeName</button> */}
   
    </div>
  );
}
