import React, {Component} from 'react';

/**** STORE ****/
import dataStore from "../../../Lib/Store/dataStore";

export default class Description extends Component{
    render(){
        return(
            <p>{dataStore.current_product.description}</p>
        )
    }
}