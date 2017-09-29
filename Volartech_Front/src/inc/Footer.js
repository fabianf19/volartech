import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
	constructor(props) {
		super(props)
		window.PrismicApi
		.getSingle('footer')
		.then(({data}) => {
			console.log(data);
			this.setState({...this.state, data})
		});
		this.state = {
			data: {}
		}
	}
	render(){
		return (
			<div>
				<div className="responsive-footer">
				 	<div className="footer-volartech">
				 		<div className="content-footer-info" layout-xs="column" layout-align-xs="start center">
				 			<div className="content-first-div padding-half">
				 				<div className="logo-footer-volarteck"></div>
				 				<div>
				 					<p className="first-div-txt othe-font-size1">Perspectiva desde lo alto</p>
				 				</div>
				 				<div>
				 					<p className="first-div-txt">© 2017 Volartech All Rights Reserved</p>
				 				</div>
				 				<div className="content-terms-and-conditions">
				 					<p className="first-div-txt" id="first-div-txt-margin">Terminos y condiciones</p>
				 					<div className="linea-div-terms"></div>
				 					<p className="first-div-txt">Politicas de Privacidad</p>
				 				</div>
				 			</div>
				 			<div className="content-second-div padding-half">
								<p className="second-div-txt-title">Nuestras líneas</p>
				 				<div className="first-line-div"></div>
				 				<a href="/produccion"><p className="second-div-txt">Producción</p></a>
				 				<a href="/construccion"><p className="second-div-txt">Construcción</p></a>
				 				<a href="/ingenieria"><p className="second-div-txt">Ingeniería</p></a>
				 			</div>
				 			<div className="content-third-div padding-half">
								<p className="third-div-txt-title">Sobre Volartech</p>
				 				<div className="second-line-div"></div>
				 				<p href="/quienes" className="third-div-txt">Quienes Somos</p>
				 				<p href="/quienes" className="third-div-txt">Nuestro Equipo</p>
				 			</div>
				 			<div className="content-fourth-div padding-half">
								<p className="fourth-div-txt-title">Te interesa?</p>
				 				<div className="third-line-div"></div>
				 				<a href="/contacto"><p className="fourth-div-txt" id="no-cursor">Contactanos</p></a>
				 				<div className="content-fourth-div-1-image">
				 					<div className="logo-mail"></div>
				 					<a href="mailto:contacto@volartech.com"><p className="fourth-div-txt">contacto@volartech.com</p></a>
				 				</div>
				 				<div className="content-fourth-div-2-image">
				 					<div className="logo-whatsapp"></div>
				 					<a href="tel:+573173721618"><p className="fourth-div-txt">+(57) 317 372 1618</p></a>
				 				</div>
				 				<p className="fourth-div-txt">Bogotá, Colombia</p>
				 			</div>
				 			<div className="content-fifth-div padding-half">
				 				<p className="fifth-div-txt-title">Siguenos</p>
				 				<div className="fifth-line-div"></div>
				 				<div className="content-iconos-redes">
				 					<a href={(this.state.data.facebook || {}).url} target="_blank"><div className="logo-facebook"></div></a>
				 					<a href={(this.state.data.youtube || {}).url} target="_blank"><div className="logo-youtube"></div></a>
				 					<a href={(this.state.data.pinterest || {}).url} target="_blank"><div className="logo-pinterest"></div></a>
				 					<a href={(this.state.data.instagram || {}).url} target="_blank"><div className="logo-instagram"></div></a>
				 				</div>
				 				<p className="fifth-div-txt">@volartechco</p>
				 				<p className="fifth-div-txt">#perspectivadesdeloat</p>
				 			</div>
				 		</div>
				 	</div>
			 	</div>
			</div>
		)
	}
}