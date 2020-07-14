import React, {Component} from 'react';
import './style.css';

/**** COMPONENTS ****/
import StaticHeader from './Static';
import FixedHeader from './Fixed';
import MobileHeader from './Mobile';
import BasketHeader from './Basket';

/**** STORE ****/
import mainSore from '../../../Lib/Store/mainStore';

export default class Header extends Component{
    render(){
        return(
            <div>
                <div className="full_screen_header">
                    {mainSore.currentPage !== "basket" ?
                        <div>
                            <StaticHeader/>
                            <FixedHeader/>
                        </div>
                        :
                        <BasketHeader/>
                    }
                </div>
                <MobileHeader/>
            </div>
        )
    }
}