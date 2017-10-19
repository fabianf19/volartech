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
				 	<div className="footer-volartech" layout="row" layout-align="center">
				 		<div className="content-footer-info container padding-h" layout="row" layout-align="end start" layout-wrap="">
				 			<div className="content-first-div padding" flex-xs="100" flex-sm="100" flex-md="50" flex="">
				 				<div className="logo-footer-volarteck"></div>
				 				<div>
				 					<p className="first-div-txt">© 2017 Volartech All Rights Reserved</p>
				 				</div>				 				
				 			</div>
				 			<div className="content-second-div padding" flex-xs="100" flex-sm="50" flex-md="25">
								<p className="second-div-txt-title">Nuestras líneas</p>
				 				<div className="first-line-div"></div>
				 				<a href="/produccion"><p className="second-div-txt">Producción</p></a>
				 				<a href="/construccion"><p className="second-div-txt">Construcción</p></a>
				 				<a href="/ingenieria"><p className="second-div-txt">Ingeniería</p></a>
				 			</div>
				 			<div className="content-third-div padding" flex-xs="100" flex-sm="50" flex-md="25">
								<p className="third-div-txt-title">Sobre Volartech</p>
				 				<div className="second-line-div"></div>
				 				<p href="/quienes" className="third-div-txt">Quienes Somos</p>
				 				{/*<p href="/quienes" className="third-div-txt">Nuestro Equipo</p>*/}
				 			</div>
				 			<div className="content-fourth-div padding" flex-xs="100" flex-sm="50" flex-md="25">
								<p className="fourth-div-txt-title">Te interesa?</p>
				 				<div className="third-line-div"></div>
				 				<a href="/contacto"><p className="fourth-div-txt" id="no-cursor">Contactanos</p></a>
				 				<div className="content-fourth-div-1-image">
				 					<div className="logo-mail"></div>
				 					<a href="mailto:info@volartech.co"><p className="fourth-div-txt">info@volartech.co</p></a>
				 				</div>
				 				<div className="content-fourth-div-2-image" layout="row">
				 					<div className="logo-whatsapp"></div>
									<div>
										<a href="tel:+573173721618"><p className="fourth-div-txt">+(57) 317 372 1618</p></a>
										<p className="fourth-div-txt">Bogotá, Colombia</p>
									</div>
				 				</div>
								<div className="content-fourth-div-2-image" layout="row">
				 					<div className="logo-whatsapp"></div>
									<div>
										<a href="tel:+13053050972"><p className="fourth-div-txt">+(1) 305 305 0972</p></a>
										<p className="fourth-div-txt">Miami, USA</p>
									</div>
				 				</div>
				 			</div>
				 			<div className="content-fifth-div padding" flex-xs="100" flex-sm="50" flex-md="25">
				 				<p className="fifth-div-txt-title">Siguenos</p>
				 				<div className="fifth-line-div"></div>
				 				<div className="content-all-icons-redes">
					 				<div className="content-iconos-redes">
					 					<a href="https://www.facebook.com/dronesvolartech/" target="_blank" rel="noopener noreferrer"><div className="logo-facebook"></div></a>
					 					<a href="https://www.youtube.com/channel/UCjU0SosEDU69f10iw-y3xsQ" target="_blank" rel="noopener noreferrer"><div className="logo-youtube"></div></a>
					 					<a href="https://twitter.com/Volartech_Col" target="_blank" rel="noopener noreferrer"><div className="logo-twitter"></div></a>
					 					<a href="https://www.instagram.com/volartech/" target="_blank" rel="noopener noreferrer"><div className="logo-instagram"></div></a>
					 					<a href="https://plus.google.com/u/0/100568545316383432225" target="_blank" rel="noopener noreferrer"><div className="logo-google-mas"></div></a>
					 					<a href="https://www.linkedin.com/company/6427504/" target="_blank" rel="noopener noreferrer"><div className="logo-in"></div></a>
					 				</div>
					 				<div>
					 					<a href="https://vimeo.com/user69318545" target="_blank" rel="noopener noreferrer"><div className="logo-vimeo"></div></a>
					 				</div>
				 				</div>
				 				<p className="fifth-div-txt">@volartechco</p>
				 				<p className="fifth-div-txt">#volartech</p>
				 			</div>
				 		</div>
				 	</div>
			 	</div>
			</div>
		)
	}
}