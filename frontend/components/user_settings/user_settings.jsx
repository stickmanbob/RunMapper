/////////////////// User Settings ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
import { connect } from 'react-redux';

import { fetchUser, updateUser } from "../../actions/user_session_actions"
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

    componentDidMount(){
        this.props.fetchUser(this.props.userId)
            .then(()=> {
                
                this.propsLoaded = true;
                this.setState({
                    user:this.props.users[this.props.userId]
                });

            });
    }

    handleSubmit() {
        let formData = new FormData();
        let user = this.state.user;
        Object.keys(user).forEach((key) => {
            formData.append(`user[${key}]`,user[key]);
        });

        this.props.updateUser(this.props.userId,formData);
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
        console.log(this.state); 
        if(!this.propsLoaded){
            return <div>Loading...</div>
        }

        let user = this.state.user;
        return(
        <div className="account-settings">
            <img className="profile-picture" src={user.photoUrl} alt={window.defaultAvatar}/>
            <h1>Account Settings</h1>

            <div className="settings-form">
                <label>Upload Profile Picture
                    <input type="file" onChange={this.handleFile("profile_picture")}/>
                </label>
                    <label >First Name
                        <input className="session-form-input" type="text" placeholder="First Name" onChange={this.handleChange("fname")} />
                        <ErrorMessage errors={this.props.errors} field="fname" />
                    </label>
                    
                    <label>
                        <input className="session-form-input" type="text" placeholder="Last Name" onChange={this.handleChange("lname")} />
                        <ErrorMessage errors={this.props.errors} field="lname" />
                    </label>

                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        </div>
        )
    }
}

function mSTP(state){
    return {
        users: state.entities.users,
        userId: state.session.currentUser,
        errors: state.errors.session 
    }
}

function mDTP(dispatch){
    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        updateUser: (id,formData) => dispatch(updateUser(id,formData))
    }
}

export default connect(mSTP,mDTP)(UserSettings);