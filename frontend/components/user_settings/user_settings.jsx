/////////////////// User Settings ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
import { connect } from 'react-redux';

import { fetchUser, updateUser } from "../../actions/user_session_actions";
import { toggleButtons } from "../../actions/button_actions";
/// Components

import ErrorMessage from "../error_message";



/////////////////////// Main ////////////////////////////////////////////

class UserSettings extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user: this.props.user
        };
        this.propsLoaded = false;
        
        //Function Bindings
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleSubmit() {
        let formData = new FormData();
        let user = this.state.user;
        Object.keys(user).forEach((key) => {
            formData.append(`user[${key}]`,user[key]);
        });

        if(!this.props.hideButtons){
            this.props.toggleButtons();
            this.props.updateUser(this.props.userId,formData)
                .then(()=> this.props.toggleButtons())
                .fail(()=>this.props.toggleButtons());
        }
    }

    handleChange(field){
       return (e) => {  
            this.setState({
                user: Object.assign({},this.state.user,{
                    [field]: e.target.value
                })
            })
        }
    }

    handleFile(field){
        return (e) => {
            this.setState({
                user: Object.assign({}, this.state.user, {
                    [field]: e.target.files[0]
                })
            })
        }
    }


    render(){
        
        
        let user = this.state.user;
        let photoUrl = this.props.user.photoUrl || window.defaultAvatar
        let submitText = this.props.hideButtons ? "" : "Submit Changes";
        let disableSubmit = this.props.hideButtons ? "disabled" : ""
        return(
        <div className="account-settings">
            <img className="profile-picture" src={photoUrl} />
            <h1>Account Settings</h1>

            <div className="settings-form">
                <label>Upload Profile Picture
                    <input type="file" onChange={this.handleFile("profile_picture")}/>
                </label>
                    <label className="field-label" >First Name
                        <input className="session-form-input" type="text" value={user.fname} onChange={this.handleChange("fname")} />
                        <ErrorMessage errors={this.props.errors} field="fname" />
                    </label>
                    
                    <label className="field-label"> Last Name 
                        <input className="session-form-input" type="text" value={user.lname} onChange={this.handleChange("lname")} />
                        <ErrorMessage errors={this.props.errors} field="lname" />
                    </label>

                    <button className={`submit-route ${disableSubmit}`} onClick={this.handleSubmit}>
                        <img className={`button-spinner ${disableSubmit}`} src={window.loadingSpinner} />
                        {submitText}
                    </button>
            </div>
        </div>
        )
    }
}

function mSTP(state){
    return {
        user: state.entities.users[state.session.currentUser],
        userId: state.session.currentUser,
        errors: state.errors.session,
        hideButtons: state.ui.buttons.hideButtons,
    }
}

function mDTP(dispatch){
    return {
        updateUser: (id,formData) => dispatch(updateUser(id,formData)),
        toggleButtons: () => dispatch(toggleButtons()),
    }
}

export default connect(mSTP,mDTP)(UserSettings);