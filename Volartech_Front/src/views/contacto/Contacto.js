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
			service: 'Seleccionar...',
			comments: '',
			selectorOpen: true
		}
		this.updateProp = this.updateProp.bind(this);
	}
	updateProp(e, prop) {
		let newState = {...this.state};
		newState[prop] = e.target.value;
		this.setState(newState);
	}
	openSelector() {
		if (!this.state.selectorOpen) {
			this.setState({...this.state, selectorOpen: true});
		}
	}
	select(service) {
		this.setState({...this.state, selectorOpen: false, service});
	}
	render(){
		return (
			<div>
				<NavbarVolartech />
				<div className="fondo-contacto">
					<div>
						<div className="content-contactanos">
							<p className="text-contactanos aller">Contáctanos</p>
						</div>
						<div className="div-line-contacto"></div>
						<div className="content-respuesta">
							<p className="text-te-responderemos opacity5">Te responderemos lo más pronto posible.</p>
						</div>
						<div className="content-servicio-interes">
							<p className="servicio-interes">Por cuál servicio estas interesado:</p>
						</div>
						<div layout="row" layout-align="center">
							<div className="contenedor-boton-servicios">
								<div onClick={() => this.openSelector()} className="pointer pickup-servicios padding margin" layout="row" layout-align="start stretch"
										style={{
											height: this.state.selectorOpen
												? 180 + 'px'
												: 60 + 'px'}}>
									{
										!this.state.selectorOpen
											? <div flex="" layout="column" layout-align="space-around center">
													<p className="servicios-pickup">{this.state.service}</p>
												</div>
											: <div flex="" layout="column" layout-align="space-around center">
													<p className="servicios-pickup selector" onClick={() => this.select('Producción de video')}>Producción de video</p>
													<p className="servicios-pickup selector" onClick={() => this.select('Ingenieria')}>Ingenieria</p>
													<p className="servicios-pickup selector" onClick={() => this.select('Construccion')}>Construccion</p>
												</div>
									}
									<div layout="column" layout-align="center">
										{(this.state.selectorOpen
											? ''
											: <div className="icono-pickup" style={{
													transform: this.state.selectorOpen
														? 'rotate(180deg)'
														: ''}}></div>)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fondo-blanco-contacto">
					<div className="content-info-contacto">
						<div className="padding"></div>
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