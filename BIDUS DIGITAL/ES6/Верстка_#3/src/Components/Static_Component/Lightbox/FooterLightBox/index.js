import React, {Component} from 'react';
import './style.css';

/**** Store ****/
import {observer} from 'mobx-react';
import lg from '../../../../Lib/Store/langStore';

const FooterLightBox = observer (class extends Component {
    render(){
        return(
            <nav className="footer_light_box">
                <a href="#">© 2019 Profit by Paymon</a>
                <a href="#">{lg.translation.all.privacy_policy}</a>
                <a href="#">{lg.translation.all.terms_of_use}</a>
                <a href="#">{lg.translation.all.public_offer}</a>
            </nav>
        )
    }
});

export default  FooterLightBox;