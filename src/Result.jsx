import React, { Component } from 'react';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
         this.write = this.write.bind(this)
         this.searchHighlight = this.searchHighlight.bind(this)

    }

    searchHighlight(searchText) {
        if(searchText){
            var content = this.props.product.description;
           
            var searchExp = new RegExp(searchText,"ig");
            var matches = content.match(searchExp);
            
            if(matches){ 
            return this.write(content, searchExp)
           
          }else {
            return this.props.product.description}
          
        } else {
           return this.props.product.description
                } 
   }

    write(content, searchExp) {
            return    content.replace(searchExp ,function(match){
                                return match
        });
    }
    render() { 
        return ( 
            <div className="in-stock">
                    <h2 className="heading"><a href={this.props.product.url} className="link">{this.props.product.name}</a></h2>
                    <p className="price">${this.props.product.price / 100}</p>
                    <p className="description"> 
                        {(this.searchHighlight(this.props.searchtext)) }
                    </p>
                </div> 
         );
    }
}
 
export default Result;