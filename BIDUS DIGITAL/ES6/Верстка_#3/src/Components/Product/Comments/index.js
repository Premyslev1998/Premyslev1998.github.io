import React, { Component } from 'react';
import './style.css'

/**** STORE ****/
import { observer } from "mobx-react";
import dataStore from "../../../Lib/Store/dataStore";

/**** IMG ****/
import StarOnImg from '../../../Static/img/product/star_b.svg';
import StarOffImg from '../../../Static/img/product/star.svg';

const Comments = observer(class Comments extends Component {
    render() {
        return (
            <section>
                <ol className="comments_list">
                    {dataStore.current_product_coments && dataStore.current_product_coments.map((el, i) => {
                        return (
                            <li key={i}>
                                <div className="comment_header">
                                    <div className="rating_comment">
                                        {
                                            [...Array(el.stars)].map((el,i)=>{
                                             return <img key={i} src={StarOnImg} alt="rating" className="star" />
                                            })
                                        }
                                        {
                                            el.stars < 5 ? [...Array(5-el.stars)].map((el,i)=>{
                                                return <img key={i} src={StarOffImg} alt="rating" className="star" />
                                               }):''
                                        }
                                        <span className="blue_color">{el.login}</span>
                                    </div>
                                    <span>{el.timestamp}</span>
                                </div>
                                <p>{el.msg}</p>
                            </li>
                        )
                    })}
                </ol>
                {/*<div className="add_comment_box">*/}
                    {/*<button className="blue_button add_comment">Оставить отзыв</button>*/}
                    {/*<p>Оставьте свой комментарий о товаре, чтобы другие пользователи могли правильно выбрать товар</p>*/}
                {/*</div>*/}
            </section>
        )
    }
});

export default Comments;