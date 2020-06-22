//////////////////////////////////////////////////////////////
///////////// RunMapper Entry File ///////////////////////////
//////////////////////////////////////////////////////////////

// Once DOM is loaded, renders full app (Root component)
// Hooks into the #root component on static page "root.html.erb"

///////////////// Imports ////////////////////////////////
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import React from 'react'; 
import Root from './components/root'
import configureStore from './store/store'
//////////////////////////////////////////////////////////////



/////////////// Callback to mount app to root ///////////////

document.addEventListener("DOMContentLoaded", ()=>{
    let root = document.getElementById("root");
    let store = configureStore();
    
    // Test Functions /////////////////
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //////////////////////////////////

    ReactDOM.render(<Root store={store}/> ,root)
});



