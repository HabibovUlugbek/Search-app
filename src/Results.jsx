import React, { Component } from 'react';
import Result from "./Result";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            foundProducts: props.products,
            searchtext: ""
         }
    }
    
    componentWillReceiveProps(nextProps) {
        var foundProducts = nextProps.products.filter(product => {
            return product.name.toLowerCase().match(nextProps.query.toLowerCase()) || 
                   product.description.toLowerCase().match(nextProps.query.toLowerCase());
        });
        this.setState({ foundProducts: foundProducts  });
        this.setState({ searchtext: nextProps.query });
        
    }
     

    render() { 
        var {searchtext} = this.state
        return (  
            <div className="results">
                {this.state.foundProducts.map(function(product, i ) {
                    return (
                        <Result product={product} key={i} searchtext={searchtext}/>
                    )
                })}
                
            </div>
        );
    }
}
 
export default Results;