import React, { Component } from 'react';
import './Contacto.css';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import axios from 'axios';


export default class Contacto extends Component{
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			service: '',
			comments: ''
		}
		this.updateProp = this.updateProp.bind(this);
	}
	updateProp(e, prop) {
		let newState = {...this.state};
		newState[prop] = e.target.value;
		this.setState(newState);
	}
	render(){
		return (
			<div>
				<NavbarVolartech />
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
							<div className="pickup-servicios">
								<p className="servicios-pickup">Producción de video</p>
								{/*<p className="servicios-pickup">Ingenieria</p>
								<p className="servicios-pickup">Construccion</p>*/}
								<div className="icono-pickup"></div>
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
	 						<a onClick={() => axios({
								 method: 'get',
								 url: 'https://volartech.co/contactForm',
								 params: {
									displayName: this.state.displayName,
									email: this.state.email,
									comments: this.state.comments || '',
									service: this.state.service || ''
								 }
							}).then(() => alert('Mensaje enviado')).catch(() => alert('Error enviando mensaje'))} target="_blank">
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
				<Footer />
			</div>
		)
	}
}