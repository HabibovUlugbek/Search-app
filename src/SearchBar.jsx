import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleSearch(event) {
        this.props.onQuery(event.target.value)
    }

    render() { 
        return ( 
            <div className="search-bar">
                <input onChange={this.handleSearch.bind(this)} type="text" placeholder="Search"/>
            </div>
         );
    }
}
 
export default SearchBar;