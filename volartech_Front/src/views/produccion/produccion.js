import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './produccion.css'
import PrismicDOM from 'prismic-dom';
import _ from 'underscore';
export default class ProduccionVol extends Component{
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
		window.PrismicApi
			.getSingle('video_production')
			.then(({data}) => {
				console.log(data);
				this.setState({...this.state, data})
			});
	}
	getText(id) {
		return this.state.data[id] ? PrismicDOM.RichText.asText(this.state.data[id]) : ''
	}
	getItem(id) {
		return this.state.data[id] || ''
	}
	getUrl(id) {
		return this.state.data[id] ? this.state.data[id].url : ''
	}
	render(){
		return (
			<div className="background-produccion">
	 			<NavbarVolartech />
	 			<div className="first-fond">
	 				<div className="content-text-dron">
		 				<div className="conten-textos-dron">
		 					<div>
		 						<p className="text-title-produccion">{this.getText('main_title')}</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-produccion">{this.getText('main_subtitle')}</p>
		 					</div>
		 					{/*<div className="quienes-somos-div-text"></div>*/}
		 					<div className="imagen-dron"></div>
		 				</div>
		 				
	 				</div>
	 			</div>
	 			<div className="second-fond">
	 				<div className="content-text-descripcion">
 						<p className="text-descripcion-produccion">{this.getText('main_text')}</p>
 					</div>
	 			</div>
	 			<div className="third-fond">
	 				<div>
	 					<div className="content-pre-produccion">
	 						<p className="p-p-p-aproduccion">{this.getText('pre_title')}</p>
	 						<p className="text-p-p-p-aproduccion">{this.getText('pre_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion1">
	 						<div className="conten-icono-prod other-margin-icon-left">
	 							<div className="icono1-prod"></div>
	 							<p className="text-icon-prod">Briefing</p>
	 						</div>
	 						<div  className="conten-icono-prod">
	 							<div className="icono2-prod"></div>
	 							<p className="text-icon-prod">Guión</p>
	 						</div>
	 						<div  className="conten-icono-prod">
	 							<div className="icono3-prod"></div>
	 							<p className="text-icon-prod">Permisos</p>
	 						</div>
	 						<div  className="conten-icono-prod other-margin-icon">
	 							<div className="icono4-prod"></div>
	 							<p className="text-icon-prod">Cronograma</p>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fourth-fond">
	 				<div>
	 					<div className="content-produccion">
	 						<p className="p-p-p-aproduccion">{this.getText('produccion_title')}</p>
	 						<p className="text-p-p-p-aproduccion">{this.getText('produccion_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion2">
	 						<div  className="conten-icono-prod">
	 							<div className="icono5-prod"></div>
	 							<p className="text-icon-prod">Documentales</p>
	 						</div>
	 						<div  className="conten-icono-prod">
	 							<div className="icono6-prod"></div>
	 							<p className="text-icon-prod">Institucionales</p>
	 						</div>
	 						<div  className="conten-icono-prod other-margin-right">
	 							<div className="icono7-prod"></div>
	 							<p className="text-icon-prod">Entrevistas</p>
	 						</div>
	 						<div  className="conten-icono-prod other-margin-icon">
	 							<div className="icono8-prod"></div>
	 							<p className="text-icon-prod">Comerciales</p>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fifth-fond">
	 				<div>
	 					<div className="content-post-produccion">
	 						<p className="p-p-p-aproduccion">{this.getText('post_title')}</p>
	 						<p className="text-p-p-p-aproduccion">{this.getText('post_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion3">
	 						<div  className="conten-icono-prod other-margin-icon-left">
	 							<div className="icono9-prod"></div>
	 							<p className="text-icon-prod">Montaje</p>
	 						</div>
	 						<div  className="conten-icono-prod">
	 							<div className="icono10-prod"></div>
	 							<p className="text-icon-prod">Corrección de color</p>
	 						</div>
	 						<div  className="conten-icono-prod">
	 							<div className="icono11-prod"></div>
	 							<p className="text-icon-prod">Edición de sonido</p>
	 						</div>
	 						<div  className="conten-icono-prod other-margin-icon">
	 							<div className="icono12-prod"></div>
	 							<p className="text-icon-prod">Musicalización</p>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="sixth-fond">
	 				<div>
	 					<div className="content-animacion">
	 						<p className="p-p-p-aproduccion">{this.getText('animacion_title')}</p>
	 						<p className="text-p-p-p-aproduccion">{this.getText('animacion_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion4">
	 						<div  className="conten-icono-prod">
	 							<div className="icono13-prod"></div>
	 							<p className="text-icon-prod">Presentación Interactiva</p>
	 						</div>
	 						<div className="conten-icono-prod other-margin-icon">
	 							<div className="icono14-prod"></div>
	 							<p className="text-icon-prod">Motion graphics (2D y 3D)</p>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="ultimo-fondo-produccion">
	 				<div className="content-text-nuestrotrabajo">
	 					<p className="text-nuestro-trabajo">{this.getText('portafolio_title')}</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo">
<<<<<<< HEAD
	 					<p className="text-muestras-trabajo">{this.getText('portafolio_text')}</p>
=======
	 					<p className="text-muestras-trabajo">Te mostramos a continuación algunos de nuestros trabajos más recientes correspondiente a PRODUCCIÓN DE VIDEO. </p>
	 				</div>
	 				<div className="content-videos-product">
	 					<div className="content-1-video">
	 						<div className="video-1"></div>
	 						<p className="text-fecha-video">Lorem ipsum / 00-00-2017 Cliente: Empresas del Tal y Cual</p>
	 					</div>
	 					<div className="content-2-video">
	 						<div className="video-2"></div>
	 						<p className="text-fecha-video">Lorem ipsum / 00-00-2017 Cliente: Empresas del Tal y Cual</p>
	 					</div>
	 					<div className="content-3-video">
	 						<div className="video-3"></div>
	 						<p className="text-fecha-video">Lorem ipsum / 00-00-2017 Cliente: Empresas del Tal y Cual</p>
	 					</div>
>>>>>>> f8089026a5169c6bbef879b8b5886ce3cd121ddb
	 				</div>
	 				<div className="content-videos-product">{
						_(this.state.data.portafolio_videos || []).map(({title}, index) =>
						<div key={index} className={`content-${index}-video`}>
							<div className="video-1"></div>
							<p className="text-fecha-video">{PrismicDOM.RichText.asText(title)}</p>
						</div>)
					}</div>
	 				<div className="contenedor-interes-boton-contacto-prod">
	 					<div className="content-info-interes-prod">
	 						<p className="text-te-interesa-prod">{this.getText('contacto_title')}</p>
	 						<p className="text-text-interes-prod">{this.getText('contacto_text')}</p>
	 					</div>
	 					<div>
	 						<a href="/contacto" target="_blank">
		 						<div className="boton-cotizacion">
		 							<p className="text-boton-cotizacion">Cotizar servicio</p>
		 						</div>
	 						</a>
	 						<div className="content-mail-call-prod">
	 							<a href={'mailto:' + this.getItem('contacto_email')}>
		 							<div className="boton-mail-prod">
		 								<p className="text-mail-boton-prod">Mail</p>
		 								<p className="text-mail-mail-prod">{this.getItem('contacto_email')}</p>
		 							</div>
	 							</a>
	 							<a href="tel:+573173721618">
		 							<div className="boton-llamar-prod">
		 								<p className="text-llamar-boton-prod">Llamar</p>
		 								<p className="text-llamar-llamar-prod">+57 (313) 868 9045</p>
		 							</div>
	 							</a>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="linea-larga-product"></div>
	 			<Footer />
	 		</div>
		)
	}
}