/////////////////////////// ROOT FILE //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Renders app component wrapped in router and provider

//Imports
import React from "react";
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './app'
/////////////////////////////////////////////////


export default function Root ({store}) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}