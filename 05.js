// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle
const blueStyle = { backgroundColor: 'lightblue'  }
const pinkStyle = { backgroundColor: 'lightpink'  }
const orangeStyle = {backgroundColor: 'orange' }


function Box({className ='', size ,style, ...otherProps}){
  const sizeClassName = size ? `box--${size}` : ''
  return <div className={`box ${className} ${sizeClassName}`}
  style={{fontStyle : 'italic' , ...style }} 
  {...otherProps} />
}


function App() {
  return (
    <div>
      <Box size ='small' style={blueStyle}>small lightblue box</Box>
      <Box size ='medium' style={pinkStyle}>medium pink box</Box>
      <Box size = 'large' style={orangeStyle}>large orange box</Box>
      <Box style = {blueStyle}>sizeless</Box>
    </div>
  )
}

export default App
