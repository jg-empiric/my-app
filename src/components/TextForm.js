import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () =>{ 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase..!", "success");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase..!", "success");

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("text box clered..!", "success");

    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("text copied..!", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra spaces..!", "success");

    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

   
    
    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-5" style={{color: props.mode === 'dark' ? '#fff' : '#212529'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark' ? '#4f5760' : '#fff',color: props.mode === 'dark' ? '#fff' : '#212529'}}></textarea>
            </div>

          
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? '#fff' : '#212529'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} charectors</p>
            <p>{0.008 * text.split(" ").length}  Minutes Read</p>

            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to priview.."}</p>
        </div>
        </>
    ) 
}
