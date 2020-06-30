import React, {Component} from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import { observer } from 'mobx-react';
import lg from "../../../../Lib/Store/langStore";

const LgHeader = observer(class extends Component {

    constructor(props){
        super(props);
        this.state = {
            lang:[
                {
                    id: 0,
                    title: 'Ru',
                    selected: false,
                    key: 'lang'
                },
                {
                    id: 1,
                    title: 'En',
                    selected: false,
                    key: 'lang'
                },
            ],
        }
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        lg.changeLang(temp[id].title.toLowerCase());
        this.setState({
            [key]: temp
        });
    };

    render(){
        return(
            <Dropdown
                title={lg.translation.header.language}
                list={this.state.lang}
                resetThenSet={this.resetThenSet}
            />

        )
    }
});

export default LgHeader;