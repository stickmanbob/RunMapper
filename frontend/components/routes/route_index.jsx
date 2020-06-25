/////////////////// Route Index ///////////////////////////
// Displays all routes in state
// Props: 
//  - routes: array of routes from state
//  - user: currentUser from state (id)
//  - fetchUserRoutes: function(userId) - fetches all of user's routes
//  - deleteRoute: function(id) - deletes route 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
    import React from "react";
/// Components
    


/////////////////////// Main ////////////////////////////////////////////

export default class RouteIndex extends React.Component{
    constructor(props){
        super(props);

        // Function bindings
            this.handleDelete = this.handleDelete.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUserRoutes(this.props.user);
    }

    handleDelete(id){
        return (e)=>{
            e.preventDefault();
            this.props.deleteRoute(id);
        }
    }

    convertUrl(url) {
         let newurl =url.replace(/(\r\n|\n|\r)/gm, "");
        console.log(newurl);
        return newurl;
    }

    convertDateTime(date){
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    }

    renderTableRows() {
           return this.props.routes.map((route,i) => {
                return (
                    <tr key={i}>
                        <td>
                            <img className="route-thumb" src={route.imageUrl} alt="" />
                        </td>
                        <td>
                            {this.convertDateTime(route.createdAt)}
                        </td>
                        <td>
                            {route.distance}
                        </td>
                        <td>
                            {route.name}
                        </td>
                        <td>
                            <a className="options-button" 
                                onClick={this.handleDelete(route.id)}>
                                
                                Delete
                            </a>
                        </td>
                    </tr>
                )
            }); 
    }

    render() {

        return(
            <div className="route-index-container">
                <table className="route-index" >
                    <thead>
                        <tr >
                            <th>Route</th> <th>Created</th> <th>Distance</th> <th>Name</th> <th>Description</th> <th>Options</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderTableRows()} 
                    </tbody>

                </table>
            </div>
        )
    }
}