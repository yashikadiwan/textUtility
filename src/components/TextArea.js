import React, { useState } from 'react';

export default function TextArea(props) {

    const handleUpClick=(event)=>{
        event.preventDefault();
        let newtext=Text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick=(event)=>{
        event.preventDefault();
        let newtext=Text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [Text, setText] = useState("Paste your text here");

    return (
        <div className='container my-4'>
            <form>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>To Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>To Lowercase</button>
                </div>
            </form>

            <div className='container'>
                <h2>Text Summary</h2>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes Read  </p>
            </div>
        </div>
    );
}
