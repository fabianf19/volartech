import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component{
	constructor(props){
		super(props);

		this.state = {
			'show' : false
		}

		this.show_card = this.show_card.bind(this);
		this.hide_card = this.hide_card.bind(this);
		this.click_event = this.click_event.bind(this);
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

	render(){

		if (!this.state.show)
			return null;

		var seccion = (this.props.seccion) ? this.props.seccion : "Elegir";

		return (
			<div className="card_back" onClick={(event) => this.click_event(event)} id="fondo">
				<div className="card_container">
					<div className="fondo-contacto">
						<div>
							<div className="content-contactanos">
								<p className="text-contactanos">Contáctanos</p>
							</div>
							<div className="div-line-contacto"></div>
							<div className="content-respuesta">
								<p className="text-te-responderemos">Te responderemos lo más pronto posible.</p>
							</div>
							<div className="content-servicio-interes">
								<p className="servicio-interes">Por cuál servicio estas interesado:</p>
							</div>
							<div className="contenedor-boton-servicios">
								<div className="dropdown">
									<button className="dropbtn">{seccion}</button>
									<div className="dropdown-content">
										<a href="#">Produccion de video</a>
										<a href="#">Ingenieria</a>
										<a href="#">Construccion</a>
									</div>
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
								<input type="text" placeholder="Nombre" className="input-1" />
							</div>
							<div className="content-input-1" id="otro-margen-mail">
								<input type="text" placeholder="Mail" className="input-1"/>
							</div>
							<div className="content-texarea">
								<textarea type="text" placeholder="Escribe tus inquietudes aqui.."  max-length="350" className="input-2"/>
							</div>
							<div className="content-boton">
		 						<a href="/contacto" target="_blank">
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
		 							<a href="mailto:contacto@volartech.com">
			 							<div className="boton-mail-contacto">
			 								<p className="text-mail-boton-contacto">Mail</p>
			 								<p className="text-mail-mail-contacto">contacto@volartech.com.co</p>
			 							</div>
		 							</a>
		 							<a href="tel:+573173721618">
			 							<div className="boton-llamar-contacto">
			 								<p className="text-llamar-boton-contacto">Llamar</p>
			 								<p className="text-llamar-llamar-contacto">+57 (313) 868 9045</p>
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