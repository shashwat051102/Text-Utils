import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!", "success")
  }
  const handleloClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!", "success")

  }
  const handleClearClick = () => {
    let newText = " "
    setText(newText)
    props.showAlert("Text cleared", "success")

  }
  const handleOnChange = (event) => {
    setText(event.target.value)
    
  }

  const handleCopy = () => {
    // console.log("I am a copy")
    var text = document.getElementById("myBox")
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("copied to Clipboard", "success")

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Cleared", "success")

  }

const [text, setText] = useState("Enter text here")
// setText is upgradation method used in react
// setText("Its set text")
  return (
    <>
    <div className='container' style = {{color: props.mode=== 'light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="mybox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode=== 'light'?'white':'grey', color: props.mode=== 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
      
    </div>

    <div className="container" style = {{color: props.mode=== 'light'?'black':'white'}}>
      <h1>Your text summary</h1>
      {/*  text.split(" ") will split the text and make it into array and .length will tell the length of the array and return as the number of words */}
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
