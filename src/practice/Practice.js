import React, { useMemo, useState } from "react";
 
export const Practice=()=>{
    const [count,setCount]=useState(0);
    const [isDarkMode,setIsDarkMode]=useState(false);

    const doubleCount=useMemo(()=>expensiveFunction(count),[count])

    const handleIncrement = () =>{
        setCount((c)=> c + 1);
    }
    const handleDecrement = () =>{
        setCount((c)=> c - 1);
    }
    
    return(
        <div 
        style={{
            height:"90vh",
            backgroundColor:isDarkMode ? "black" : "white",
            color:!isDarkMode ? "black" : "white",
        }}>
        <h1>counter</h1>
        <h2>doubleCounter:{doubleCount}</h2>
        <button onClick={handleDecrement}>Decrement</button>
        <input value={count}></input>
        <button onClick={handleIncrement}>Increment</button>

        <br></br>
        <button onClickCapture={()=>setIsDarkMode(!isDarkMode)}>ChangeTheme</button>
        </div>
    )
}
 export const expensiveFunction=(count)=>{
    for( let index = 0; index < 100; index++){
        console.log(index)
    }
    return count + 2;
 }