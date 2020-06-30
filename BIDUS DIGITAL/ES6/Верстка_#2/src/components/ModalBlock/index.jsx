import React, { Component } from 'react';
import { Container, CardDeck, Card, Form, Button } from 'react-bootstrap';
import '../../../node_modules/magnific-popup/dist/magnific-popup.css';
import '../../../node_modules/magnific-popup/dist/_magnific-custom.css';
import './HeaderBlock.sass';
import '../../js/common';

var date = new Date(); 
var sunset_date = date.getDay() + "." + /*date.getMonth()*/6 + "." + date.getFullYear();

const ModalBlock = ({ image }) => {
	<>

		<div className="d-none">
			<Container id="callback" className="popup-form callback zoom-anim-dialog">
				<CardDeck className="m-2">
					<Card className="TextForm">
						<Card.Img
							src={ image }
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
		
	</>
}

export default ModalBlock;
