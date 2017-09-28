import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
	render(){
		return (
			<div>
				<div className="responsive-footer">
				 	<div className="footer-volartech">
				 		<div className="content-footer-info">
				 			<div className="content-first-div">
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
				 			<div className="content-second-div">
								<p className="second-div-txt-title">Nuestras líneas</p>
				 				<div className="first-line-div"></div>
				 				<a href="/produccion" target="_blank"><p className="second-div-txt">Producción</p></a>
				 				<a href="/construccion" target="_blank"><p className="second-div-txt">Construcción</p></a>
				 				<a href="/ingenieria" target="_blank"><p className="second-div-txt">Ingeniería</p></a>
				 			</div>
				 			<div className="content-third-div">
								<p className="third-div-txt-title">Sobre Volartech</p>
				 				<div className="second-line-div"></div>
				 				<p className="third-div-txt">Quienes Somos</p>
				 				<p className="third-div-txt">Nuestro Equipo</p>
				 			</div>
				 			<div className="content-fourth-div">
								<p className="fourth-div-txt-title">Te interesa?</p>
				 				<div className="third-line-div"></div>
				 				<p className="fourth-div-txt" id="no-cursor">Contactanos</p>
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
				 			<div className="content-fifth-div">
				 				<p className="fifth-div-txt-title">Siguenos</p>
				 				<div className="fifth-line-div"></div>
				 				<div className="content-iconos-redes">
				 					<div className="logo-facebook"></div>
				 					<div className="logo-youtube"></div>
				 					<div className="logo-pinterest"></div>
				 					<div className="logo-instagram"></div>
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