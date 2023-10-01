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
    const handleSenClick = (event) => {
        event.preventDefault();
        let sentences = Text.split('.'); // Split text into sentences
        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].trim(); // Remove leading/trailing whitespace
            if (sentences[i]) { // Check if sentence is not empty
                sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1); // Capitalize first letter
            }
        }
        let newText = sentences.join('. '); // Join sentences back together with periods and spaces
        setText(newText);
    }
    const handleSpaces = (event) => {
        event.preventDefault();
        let newText = Text.replace(/\s+/g, ' '); // Replace consecutive spaces with a single space
        setText(newText);
    }
    const handleClear=(event)=>{
        event.preventDefault();
        var newtext='';
        setText(newtext);
    }
    const speak = (event) => {                                          //text to speech api
        event.preventDefault();
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
      }
    const handleCopy=(event)=>{                                            //clipboard api
        event.preventDefault();
        var text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

    }
    
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [Text, setText] = useState("Paste your text here");
    const[areamode,setAreamode]=useState("white");
   const dark = () => {
  return {
    backgroundColor: props.mode === 'light' ? 'white' : 'black',
    color: props.mode === 'light' ? 'black' : 'white',
  };
};


    return (
        <div className='container my-4'>
            <form>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>To Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>To Lowercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleSenClick}>To Sentencecase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleSpaces}>Remove Spaces</button>
                    <button className="btn btn-success my-3 mx-3" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-warning my-3 mx-3" onClick={speak}>Speak Text</button>
                    <button className="btn btn-danger my-3 mx-3" onClick={handleClear}>Clear All</button>

                </div>
            </form>

            <div className='container'>
                <h2>Text Summary</h2>
                <p>{Text.trim() === "" ? "0" : Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes Read  </p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"type something to preview"}</p><br></br><br></br>
            </div>
        </div>
    );
}
