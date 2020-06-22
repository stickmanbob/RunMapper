///////////// RunMapper Entry File ///////////////////////////

import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import React from 'react'; 



/////////////// Callback to mount app to root ///////////////

document.addEventListener("DOMContentLoaded", ()=>{
    let root = document.getElementById("root");
    
    ReactDOM.render(<h1>mounted!</h1>,root)
});



