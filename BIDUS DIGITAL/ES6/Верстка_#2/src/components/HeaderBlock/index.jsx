import React, { Component } from 'react';
import { Container, CardDeck, Card, Form, Button } from 'react-bootstrap';
import '../../../node_modules/magnific-popup/dist/magnific-popup.css';
import '../../../node_modules/magnific-popup/dist/_magnific-custom.css';
import './HeaderBlock.sass';
import '../../js/common';
import Pic1 from '../../img/Rectangle 1.jpg';
import Pic2 from '../../img/Rectangle 2.jpg';
import Pic3 from '../../img/Rectangle 3.jpg';
import Pic4 from '../../img/Rectangle 4.jpg';
import Pic5 from '../../img/Rectangle 5.jpg';
import Pic6 from '../../img/Rectangle 6.jpg';

var date = new Date(); 
var sunset_date = date.getDay() + "." + /*date.getMonth()*/6 + "." + date.getFullYear();

export default class HeaderBlock extends Component{
	render(){
		return(
			<>
				<div className="main">

					<div className="d-none">
						<Container id="callback" className="popup-form callback zoom-anim-dialog">

							{/*
								<form id="callback" className="popup-form callback zoom-anim-dialog"> 
									<p>Somthing text...</p>
								</form>
							*/}
													
							<CardDeck className="m-2">
								<Card className="TextForm">
									<Card.Img
										src="https://images.pexels.com/photos/2265082/pexels-photo-2265082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									/>
									<Form>
										<Form.Group controlId="formBasicEmail"> 
											<Form.Control type="text" placeholder="Ваше имя"></Form.Control>
											<Form.Control type="text" placeholder="Ваше комментарий"></Form.Control>
										</Form.Group>
										<Button variant="primary" type="submit">Оставить комментарий</Button>
									</Form>
								</Card>
								<Card className="TextInfo">
									<Form>
										<Form.Label>{'' + sunset_date}</Form.Label>
										<Form.Text>
											Отличное фото
										</Form.Text>
										<Form.Label>{'' + sunset_date}</Form.Label>
										<Form.Text>
											Я тут был, очень понравилось
										</Form.Text>
										<Form.Label>{'' + sunset_date}</Form.Label>
										<Form.Text>
											Впечатляющее место
										</Form.Text>
									</Form>
								</Card>
							</CardDeck>
						</Container>
					</div>

					<Container>

							<h2 className="headcaption text-center" /*className="m-4"*/>Test App</h2>

							<CardDeck className="m-3">
								<Card>
									<a href="#callback">
										<Card.Img
											src={ Pic1 }
										/>
									</a>	
								</Card>
								<Card>
									<a href="#callback">
										<Card.Img
											src={ Pic2 }
										/>
									</a>	
								</Card>
								<Card>
									<a href="#callback">
										<Card.Img
											src={ Pic3 }
										/>
									</a>	
								</Card>
							</CardDeck>
							<CardDeck className="m-3">
								<Card>
									<a href="#callback">
										<Card.Img
											src={ Pic4 }
										/>
									</a>	
								</Card>
								<Card>
									<a href="#callback">
										<Card.Img
											src={ Pic5 }
										/>
									</a>	
								</Card>
								<Card>
									<a href="#callback">
										<Card.Img
											src={ Pic6 }
										/>
									</a>	
								</Card>
							</CardDeck>

							<div className="line"></div>
							<p>©2018 - 2019</p>
							
					</Container>
					
				</div>	
			</>
		);
	}
}		