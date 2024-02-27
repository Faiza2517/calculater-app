import React, { useState } from 'react'
import './style.css';

export const C = () => {
    const [first,setFirst]= useState('');
    const [second,setSecond]=useState('');
    const [history, setHistory] = useState([]);
    let result;
let operator;
    const handleClick=(value)=>{
        handleButton();
        first=parseFloat(value);
        second=parseFloat(value)
        if(operator == '*'){
          result=  first * second;
        }
        else if(operator == '+'){
          result=  first + second;
        }
        else if(operator == '-'){
          result=  first - second;
        }
    
    const handleEqual=()=>{
      try{
        let result;
        const firstnum=parseFloat(num1);
        const secondnum=parseFloat(num2);
        switch(operator){
          case '+':
            result=firstnum + secondnum;
          break;
          case '-':
            result=firstnum - secondnum;
          break;
          case '*':
            result=firstnum * secondnum;
          break;
          case '/':
            result=firstnum / secondnum;
          break;
          default:
            return;

      const handleAddition = () => {
        setFirst(prevInput => prevInput + '+');
      };
    
      const handleSubtraction = () => {
        setFirst(prevInput => prevInput + '-');
      };
    
    
      const handleDivision = () => {
        setFirst(prevInput => prevInput + '/');
      };
      const handleButton = (value) => {
        if (value === 'clear') {
          handleClear();
        } else if (value === 'delete') {
          handleDelete();
        } else if (value === '+') {
          handleAddition();
        } else if (value === '-') {
          handleSubtraction();
        } else if (value === '*') {
          handleMultiplication();
        } else if (value === '/') {
          handleDivision();
        } else if (value === '=') {
          handleClick();
        } else {
          setFirst(prevInput => prevInput + value);
        }
      };
  return (
    <div className='container'>
  <div className='card'>
    <div className='display'>
      <input value={first} readOnly />
    </div>
    <table className='buttons'>
      <tbody>
        <tr>
          <td><button onClick={() => handleButton('clear')} className='button clear'>C</button></td>
          <td><button onClick={() => handleButton('delete')} className='button clear'>x</button></td>
          <td><button onClick={() => handleButton('/')} className='button'>/</button></td>
          <td><button onClick={() => handleButton('*')} className='button'>*</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButton('7')} className='button'>7</button></td>
          <td><button onClick={() => handleButton('8')} className='button'>8</button></td>
          <td><button onClick={() => handleButton('9')} className='button'>9</button></td>
          <td><button onClick={() => handleButton('+')} className='button'>+</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButton('4')} className='button'>4</button></td>
          <td><button onClick={() => handleButton('5')} className='button'>5</button></td>
          <td><button onClick={() => handleButton('6')} className='button'>6</button></td>
          <td><button onClick={() => handleButton('-')} className='button'>-</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButton('1')} className='button'>1</button></td>
          <td><button onClick={() => handleButton('2')} className='button'>2</button></td>
          <td><button onClick={() => handleButton('3')} className='button'>3</button></td>
          <td><button onClick={() => handleButton('.')} className='button'>.</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButton('0')} className='button'>0</button></td>
          <td><button onClick={() => handleButton('=')} className='button'>=</button></td>
        </tr>
        
      </tbody>
    </table>
  </div>
  <div className='history'>
    <div className='card'>
      <h3>History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.expression} = {item.result}</li>
        ))}
      </ul>
    </div>
  </div>
</div>

  )
}
