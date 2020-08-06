/////////////////// User Settings ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
import { connect } from 'react-redux';
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class UserSettings extends React.Component{

    render(){
        return(
        <div class="user_settings.jsx">
            <h1>Account Settings</h1>

            <div class="setting">
                <label>Upload Profile Picture
                    <input type="file" name="user[profile_picture]" id=""/>
                </label>
            </div>
        </div>
        )
    }
}