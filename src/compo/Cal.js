import React, { useState,useEffect } from 'react'
import './style.css';
import { Button } from './Button';
import { Input } from './Input';
import * as math from 'mathjs';



export const Cal = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const buttoncolor = '#f2a23c';

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            if (/\d/.test(key) || ['+', '-', '*', '/', '='].includes(key)) {
                handleText(key);
            } else if (key === 'Enter') {
                handleResult('=');
            } else if (key === 'Escape') {
                handleClear();
            } else if (key === 'Backspace') {
                handleBackspace();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [text]);

 

    const handleText = (value) => {
        setText((prevText) => prevText + value);
    };

    const handleResult = () => {
        try {
            const input = text || '0'; // Ensure input is never empty
            setResult(math.evaluate(input));
        } catch (error) {
            setResult('Error'); // Handle error during evaluation
        }
    };

    const handleClear = () => {
        setText('');
        setResult('');
    };

    const handleBackspace = () => {
        setText((prevText) => prevText.slice(0, -1));
    };

    return (
        <div className='App'>
            <div className='card'>
            <div className='calculater-wraper'>
                {/* Assuming Input and Button components are defined elsewhere */}
                <Input text={text} result={result} />
                
                <div className='row'>
                    <Button symbol='7' handleClick={handleText} />
                    <Button symbol='8' handleClick={handleText} />
                    <Button symbol='9' handleClick={handleText} />
                    <Button symbol='/' color={buttoncolor} handleClick={handleText} />
                </div>
                <div className='row'>
                    <Button symbol='4' handleClick={handleText} />
                    <Button symbol='5' handleClick={handleText} />
                    <Button symbol='6' handleClick={handleText} />
                    <Button symbol='*' color={buttoncolor} handleClick={handleText} />
                </div>
                <div className='row'>
                    <Button symbol='1' handleClick={handleText} />
                    <Button symbol='2' handleClick={handleText} />
                    <Button symbol='3' handleClick={handleText} />
                    <Button symbol='-' color={buttoncolor} handleClick={handleText} />
                </div>
                <div className='row'>
                    <Button symbol='0' handleClick={handleText} />
                    <Button symbol='.' handleClick={handleText} />
                    <Button symbol='+' handleClick={handleText} />
                    <Button symbol='=' color={buttoncolor} handleClick={handleResult} />
                </div>
                <div className='row'>
                    <Button symbol='clear' color='red' handleClick={handleClear} />
                    <Button symbol='x' color='red' handleClick={() => setText(prevDisplay => prevDisplay.slice(0, -1))} className='button clear'></Button>
                </div>
</div>
            </div>
        </div>
    );
};

