import React from 'react';
let initialColor ={

    lightColor : '#FFE8CB',
    darkColor : '#FFB861',
    placeholderText : '#FFDDB3'

} 

let colorContext = React.createContext(initialColor);
export default colorContext;