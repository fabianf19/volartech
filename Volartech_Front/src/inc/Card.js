import React, { Component } from 'react';
import './Card.css';
import axios from 'axios';

export default class Card extends Component{
	constructor(props){
		super(props);

		this.state = {
			'show' : false,
			displayName: '',
			email: '',
			comments: ''
		}

		this.show_card = this.show_card.bind(this);
		this.hide_card = this.hide_card.bind(this);
		this.click_event = this.click_event.bind(this);
		this.updateProp = this.updateProp.bind(this);
	}

	show_card(){
		this.setState({show : true});
	}

	hide_card(){
		this.setState({show : false});	
	}

	click_event(event){
		// console.log(event.target.id);
		if (event.target.id === 'fondo')
			this.hide_card();

	}
	updateProp(e, prop) {
		let newState = {...this.state};
		newState[prop] = e.target.value;
		this.setState(newState);
	}
	render(){

		if (!this.state.show)
			return null;

		var seccion = (this.props.seccion) ? this.props.seccion : "Elegir";

		return (
			<div className="card_back" onClick={(event) => this.click_event(event)} id="fondo">
				<div className="card_container">
					<div className="cerrar" onClick={() => this.hide_card()}>X</div>
					<div className="fondo-contacto padding-v">
						<div className="relative">
							<div className="content-contactanos">
								<p className="text-contactanos">Contáctanos</p>
							</div>
							<div className="div-line-contacto"></div>
							<div className="content-respuesta">
								<p className="text-te-responderemos">Te responderemos lo más pronto posible.</p>
							</div>
							<div className="contenedor-boton-servicios margin-v">
								<div className="dropdown">
									<button className="dropbtn">{seccion}</button>
								</div>
							</div>
						</div>
					</div>
					<div className="fondo-blanco-contacto">
						<div className="content-info-contacto">
							<div>
								<p className="text-tu-informacion">Tu información:</p>
							</div>
							<div className="content-input-1">
								<input onChange={(e) => this.updateProp(e, 'displayName')} value={this.state.displayName} type="text" placeholder="Nombre" className="input-1" />
							</div>
							<div className="content-input-1" id="otro-margen-mail">
								<input onChange={(e) => this.updateProp(e, 'email')} value={this.state.email} type="text" placeholder="Mail" className="input-1"/>
							</div>
							<div className="content-texarea">
								<textarea onChange={(e) => this.updateProp(e, 'comments')} value={this.state.comments} type="text" placeholder="Escribe tus inquietudes aqui.."  max-length="350" className="input-2"/>
							</div>
							<div className="content-boton">
		 						<a 	onClick={() =>
									 		axios({
												method: 'get',
												url: 'https://volartech.co/contactForm',
												params: {
													displayName: this.state.displayName,
													email: this.state.email,
													comments: this.state.comments || '',
													service: this.props.seccion || ''
												}
											})
											.then(() => {
												alert('Mensaje enviado');
												this.setState({
													'show' : false,
													displayName: '',
													email: '',
													service: '',
													comments: ''
												});
											})
											.catch(() => alert('Error enviando mensaje'))}
										target="_blank">
			 						<div className="boton-enviar">
			 							<p className="text-boton-enviar">Enviar</p>
			 						</div>
		 						</a>
		 						<div className="content-o">
		 							<div className="linea-o1"></div>
		 							<p className="letra-o">ó</p>
		 							<div className="linea-o2"></div>
		 						</div>
		 						<div className="content-mail-call-enviar">
		 							<a href="mailto:info@volartech.co">
			 							<div className="boton-mail-contacto">
			 								<p className="text-mail-boton-contacto">Mail</p>
			 								<p className="text-mail-mail-contacto">info@volartech.co</p>
			 							</div>
		 							</a>
		 							<a href="tel:+573173721618">
			 							<div className="boton-llamar-contacto">
			 								<p className="text-llamar-boton-contacto">Llamar</p>
			 								<p className="text-llamar-llamar-contacto">+57 (317) 372 1618</p>
			 							</div>
		 							</a>
		 						</div>
		 					</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}