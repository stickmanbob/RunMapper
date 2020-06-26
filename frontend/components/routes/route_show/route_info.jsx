/////////////////// Route Info ///////////////////////////
// Renders a Panel containing info about the current route
// Props:
//  - route: object containing data about a route 
//  - creator: object with creator data 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
    import { fetchUser } from "../../../util/session_api_util";
import { connect } from "react-redux";
/// Components



/////////////////////// Main ////////////////////////////////////////////

function mSTP(state,ownProps){
    return {
        creator: state.users[ownProps.route.creatorId]
    }
}

function mDTP(dispatch){
    return{
        fetchCreator: (id) => dispatch(fetchUser(id))
    }
}

class RouteInfo extends React.Component() {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCreator(this.props.route.creatorId); 
    }

    render(){
        if (this.props.route && this.props.creator){
            return(
                <section className="route-info">

                    <div>
                        <h3>{creator.fname} {creator.lname}</h3>
                    </div>
                        
                    <div>
                        <span> {route.distance}</span>
                    </div>

                    <h1>{route.name}</h1>
                    <p>{route.description}</p>

                </section>
            )
        } else {
            return(
                <div>Loading Data...</div>
            )
        }

    }
}

export default connect(mSTP,mDTP)(RouteInfo);