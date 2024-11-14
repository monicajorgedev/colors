

function BoxColor ({color, value}) {
  
  return (
    <>
    <li 
    className={`box ${color}`} 
    style={value !== color ? {color: `${color}`, border: `1px solid ${color}`} : {background: `${color}`, color: 'black'}}>
    {value !== color ? `No, I'm not a ${value} color` :`Yes, I am ${color} color` }
    </li>
    </>
  )
}
export default BoxColor;  
