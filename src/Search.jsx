import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import Results from "./Results";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: ''
         };
    }

    handleQuery(query) {
        this.setState({ 'query': query.toLowerCase().trim()  });
    }

    render() { 
        return ( 
            <div className="search">
                    <h1 className="heading" >Search app</h1>
                    <SearchBar onQuery={this.handleQuery.bind(this)} />
                    <Results products={this.props.products} query={this.state.query}/>
            </div>
            );
    }
}
 
export default Search;