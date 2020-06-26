/////////////////// Location Search ///////////////////////////
// 
// 
// 

/////////////////// Imports /////////////////////////////////////////

/// Utilities
import React from "react";
/// Components



/////////////////////// Main ////////////////////////////////////////////

export default class LocationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.centerMap = this.props.centerMap;
        this.state={
            input:""
        }

        this.handleChange=this.handleChange.bind(this);
        // this.findLocation = this.findLocation.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    generateRequest() {
        let baseurl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"
        let key = `key=${window.googleAPIKey}`;
        let input = `input=${this.state.input}`; 
        let inputtype = `inputtype=textquery`;
        let fields = `fields=geometry`
        let url = [baseurl,key,input,inputtype,fields];
        url = url.join("&");
        return url;  
    }

    makeRequest(url) {
        var json = ""
        $.ajax({
            url:url,
            method:"GET",
            dataType: 'jsonp'
        }).then((res) => json=res)
        .fail((res)=> console.log(res));
        console.log (json); 
        return json; 
        
    }

    handleSubmit(e){
        e.preventDefault();

        let url = this.generateRequest(e.target.value)
        this.makeRequest(url); 
    }

    render(){
        return (
            
                <section className="location-search-container">
                    <div>
                        <label> Choose Map Location</label>
                        <form onSubmit={this.handleSubmit} className="location-search">
                            <input onChange={this.handleChange("input")} type="text" className="search-bar" />
                            <input className="search-button" type="submit" value="Search" />
                        </form>
                    </div>
                </section>
        
        )
    }
}

