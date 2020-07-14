import React, {Component} from 'react';
import './style.css';
import SlickSlider from 'react-slick';

import img1 from '../../../Static/img/main_slider/slider_1.jpg';
import img2 from '../../../Static/img/main_slider/slider_2.jpg';
import img3 from '../../../Static/img/main_slider/slider_3.jpg';

export default class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            settings : {
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 800, settings: { arrows: false}},
                    { breakpoint: 550, settings: { dots: false, arrows: false}},
                ]
            },
            arrayImg: [img1,img2,img3]
        }
    }

    render(){
        const {arrayImg, settings} = this.state;
        return(
            <SlickSlider {...settings}>
                {arrayImg.map((el, i) => {
                    return (
                        <div key={i}>
                            <img src={el} alt="sliderImage" className="slider_images"/>
                        </div>
                    )
                })}
            </SlickSlider>
        )
    }
}