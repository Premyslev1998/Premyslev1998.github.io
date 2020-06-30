import React, { Component } from 'react';
import './style.css';

/**** MODULE ****/
import SlickSlider from 'react-slick';

/**** COMPONENTS ****/
import BoxProduct from '../Static_Component/BoxProduct/';

/**** STORE ****/
import { observer } from 'mobx-react';
import lg from "../../Lib/Store/langStore";
import mainStore from "../../Lib/Store/mainStore";
import dataStore from "../../Lib/Store/dataStore";

const Main = observer(class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider_setting: {
                speed: 500,
                dots: true,
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{ breakpoint: 750, settings: { arrows: false } }]
            },
            tab_panel: {
                array: [
                    lg.translation.main.tab_panel.tab_1,
                    lg.translation.main.tab_panel.tab_2,
                    lg.translation.main.tab_panel.tab_3
                ],
                active: 1
            },
            array_rand: dataStore.array_rand.slice(11, 22),
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(index) {
        this.setState(prevState => ({
            tab_panel: {
                ...prevState.tab_panel,
                active: index
            }
        }));

        switch (index) {
            case 0: this.setState({
                array_rand: dataStore.array_rand.slice(0, 8)
            }); break;
            case 1: this.setState({
                array_rand: dataStore.array_rand.slice(11, 23)
            }); break;
            case 2: this.setState({
                array_rand: dataStore.array_rand.slice(24, 33)
            }); break;
            default: this.setState({
                array_rand: dataStore.array_rand.slice(16, 33)
            });
        }
    }

    componentWillMount() {
        mainStore.openNewPage("home");
    }

    render() {
        const { slider_setting, tab_panel } = this.state;
        return (
            <article>
                <div className="slider_container">
                    <SlickSlider {...slider_setting} className="main_slider">
                        <div className="back slider_1"/>
                        <div className="back slider_2"/>
                    </SlickSlider>
                </div>

                <div className="btn_panel">
                    {tab_panel.array.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => this.changeTab(index)}
                                className={tab_panel.active === index ? "blue_button" : ""}>
                                {item}
                            </button>
                        )
                    })}
                </div>

                <div className="container">
                    <div className="product_box">
                        <BoxProduct value={this.state.array_rand.length ?
                            this.state.array_rand :
                            dataStore.array_rand.slice(11, 23)}
                        />
                    </div>
                </div>
            </article>
        )
    }
});

export default Main;