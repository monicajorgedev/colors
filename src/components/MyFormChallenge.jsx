import { useState, useEffect, useRef } from "react";
import BoxColor from './BoxColor'

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  
  const [value, setValue] = useState('')
  const inputRef = useRef(null)


  return (
    <>
      <input 
      type="text"
      placeholder="choose a color"
      onChange={()=> setValue(inputRef.current.value)}
      ref={inputRef}
      value={value}
      />
      <ul className="container">
        {colors.map(color => (
        <BoxColor color={color} key={color} value={value}/>
      ))}
      </ul>
      </>
  );
}

export default MyForm;