import React, {Component} from 'react';
import './style.css';

/**** Components ****/
import Account from './Account';
import Address from './Address';
import Order from './Order';
import Favorites from './Favorites';
import Help from './Help';

/**** Route ****/
import {Route, HashRouter} from 'react-router-dom';

/**** Store ****/
import {observer} from 'mobx-react';
import mainStore from '../../Lib/Store/mainStore';

const Profile = observer(class extends Component{

    componentWillMount() {
        mainStore.openNewPage("profile");
    }

    render(){
        return(
            <HashRouter>
                <div className="container profile_main">
                    <section className="tab_profile_panel">
                        <a className="tab_profile tab_profile_active" href="#/profile">Профиль</a>
                        <a className="tab_profile" href="#/profile/address">Адреса</a>
                        <a className="tab_profile" href="#/profile/order">Мои заказы</a>
                        <a className="tab_profile" href="#/profile/favorites">Избранное</a>
                        <a className="tab_profile" href="#/profile/help">Помощь</a>
                    </section>
                    <Route exact path="/profile" component={Account}/>
                    <Route path="/profile/address" component={Address}/>
                    <Route path="/profile/order" component={Order}/>
                    <Route path="/profile/favorites" component={Favorites}/>
                    <Route path="/profile/help" component={Help}/>
                </div>
            </HashRouter>
        )
    }
});

export default Profile;