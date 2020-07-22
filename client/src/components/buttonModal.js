import React from 'react';




const CustomButton = (props) => (
    
   <button onClick= {props.clickHandler}> {props.children} </button>
)

export default CustomButton;