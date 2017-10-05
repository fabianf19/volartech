import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import Card from '../../inc/Card';
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

		this.show_card = this.show_card.bind(this);
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

	show_card(event){
		event.preventDefault();

		this.card.show_card();
	}

	render(){
		return (
			<div className="background-produccion">
	 			<NavbarVolartech />
	 			<div className="first-fond" layout="row" layout-align="center">
	 				<div className="content-text-dron" layout="column" layout-align="start stretch" layout-gt-sm="row" flex="">
					 <div flex-gt-sm="50" flex-order-gt-sm="2" layout="row" layout-align="center">
							<div flex-sm="70" flex="100">
								<div className="imagen-dron"></div>
							</div>
						</div>
						<div className="conten-textos-dron padding" flex-gt-sm="" layout="column" layout-align="end">
		 					<div>
		 						<p className="text-title-produccion">{this.getText('main_title')}</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-produccion">{this.getText('main_subtitle')}</p>
		 					</div>
							<div show-gt-md="" className="padding"></div>
						</div>
	 				</div>
	 			</div>
	 			<div className="second-fond" layout="row" layout-align="center">
	 				<div className="content-text-descripcion padding-v" layout="row">
 						<p className="text-descripcion-produccion padding" flex-gt-sm="50" flex="100">{this.getText('main_text')}</p>
 					</div>
	 			</div>
	 			<div className="third-fond" layout="row" layout-align="center">
	 				<div className="container" layout="column" layout-align="start end">
						<div className="padding"></div>
	 					<div className="content-pre-produccion padding" layout="column" layout-align="start end">
	 						<p className="p-p-p-aproduccion">{this.getText('pre_title')}</p>
	 						<p className="text-p-p-p-aproduccion container-half">{this.getText('pre_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion1 padding-half" layout-align="end" layout="row">
	 						<div className="conten-icono-prod margin-half">
	 							<div className="icono1-prod"></div>
	 							<p className="text-icon-prod">Briefing</p>
	 						</div>
	 						<div  className="conten-icono-prod margin-half">
	 							<div className="icono2-prod"></div>
	 							<p className="text-icon-prod">Guión</p>
	 						</div>
	 						<div  className="conten-icono-prod margin-half">
	 							<div className="icono3-prod"></div>
	 							<p className="text-icon-prod">Permisos</p>
	 						</div>
	 						<div  className="conten-icono-prod margin-half">
	 							<div className="icono4-prod"></div>
	 							<p className="text-icon-prod">Cronograma</p>
	 						</div>
	 					</div>
						<div className="padding"></div>
	 				</div>
	 			</div>
	 			<div className="fourth-fond" layout="row" layout-align="center">
	 				<div className="container padding-v" layout="column" layout-align="start start">
					 	<div className="padding"></div>
						<div className="content-produccion padding">
	 						<p className="p-p-p-aproduccion">{this.getText('produccion_title')}</p>
	 						<p className="text-p-p-p-aproduccion container-half">{this.getText('producction_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion2 padding-half" layout="row" layout-wrap="">
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono5-prod"></div>
	 							<p className="text-icon-prod">Documentales</p>
	 						</div>
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono6-prod"></div>
	 							<p className="text-icon-prod">Institucionales</p>
	 						</div>
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono7-prod"></div>
	 							<p className="text-icon-prod">Entrevistas</p>
	 						</div>
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono8-prod"></div>
	 							<p className="text-icon-prod">Comerciales</p>
	 						</div>
	 					</div>
						 <div className="padding"></div>
	 				</div>
	 			</div>
	 			<div className="fifth-fond" layout="row" layout-align="center">
					<div className="container" layout="column" layout-align="start end">
						<div className="padding"></div>
	 					<div className="content-post-produccion padding " layout="column" layout-align="start end">
	 						<p className="p-p-p-aproduccion">{this.getText('post_title')}</p>
	 						<p className="text-p-p-p-aproduccion container-half">{this.getText('post_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion3 padding-half"  layout="row" layout-wrap="">
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono9-prod"></div>
	 							<p className="text-icon-prod">Montaje</p>
	 						</div>
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono10-prod"></div>
	 							<p className="text-icon-prod">Corrección de color</p>
	 						</div>
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono11-prod"></div>
	 							<p className="text-icon-prod">Edición de sonido</p>
	 						</div>
	 						<div  className="conten-icono-prod padding-half">
	 							<div className="icono12-prod"></div>
	 							<p className="text-icon-prod">Musicalización</p>
	 						</div>
	 					</div>
						 <div className="padding"></div>
	 				</div>
	 			</div>
	 			<div className="sixth-fond" layout="row" layout-align="center">
				 	<div className="container" layout="column" layout-align="start start">
					 	<div className="padding"></div>
	 					<div className="content-animacion padding">
	 						<p className="p-p-p-aproduccion">{this.getText('animacion_title')}</p>
	 						<p className="text-p-p-p-aproduccion">{this.getText('animacion_text')}</p>
	 						<div className="div-produccion-line"></div>
	 					</div>
	 					
	 					<div className="conten-iconos-produccion4 padding-half" layout="row" layout-wrap="">
	 						<div  className="conten-icono-prod">
	 							<div className="icono13-prod padding-half"></div>
	 							<p className="text-icon-prod">Presentación Interactiva</p>
	 						</div>
	 						<div className="conten-icono-prod">
	 							<div className="icono14-prod padding-half"></div>
	 							<p className="text-icon-prod">Motion graphics (2D y 3D)</p>
	 						</div>
	 					</div>
						 <div className="padding"></div>
	 				</div>
	 			</div>
	 			<div className="ultimo-fondo-produccion" layout="column" layout-align="start stretch">
	 				<div className="content-text-nuestrotrabajo" layout="row" layout-align="center">
	 					<p className="text-nuestro-trabajo">{this.getText('portafolio_title')}</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo" layout="row" layout-align="center">
	 					<p className="text-muestras-trabajo">{this.getText('portafolio_text')}</p>
					</div>
	 				<div className="content-videos-product" layout="row" layout-align="center">
						 <div className="container padding-quarter" layout="row" layout-align="center" layout-wrap="">{
							_(this.state.data.portafolio_videos || []).map(({title}, index) =>
								<div key={index} className="content-video padding-quarter" flex="" flex-xs="100" flex-sm="50">
									<div className="video"></div>
									<p className="text-fecha-video">{PrismicDOM.RichText.asText(title)}</p>
								</div>)
					}</div>
					</div>
					<div layout="row" layout-align="center">
						<div className="container margin-v padding-v" layout-gt-sm="row">
							<div className="content-info-interes-prod padding" flex-gt-sm="">
								<p className="text-te-interesa-prod">{this.getText('contacto_title')}</p>
								<p className="text-text-interes-prod">{this.getText('contacto_text')}</p>
							</div>
							<div className="padding">
								<a href="/contacto" target="_blank" onClick={(event) => this.show_card(event)}>
									<div className="boton-cotizacion">
										<p className="text-boton-cotizacion">Cotizar servicio</p>
									</div>
								</a>
								<div layout="row" className="content-mail-call-prod">
									<a flex="" href={'mailto:' + this.getItem('contacto_email')}>
										<div className="boton-mail-prod">
											<p className="text-mail-boton-prod">Mail</p>
											<p className="text-mail-mail-prod">{this.getItem('contacto_email')}</p>
										</div>
									</a>
									<a flex="" href="tel:+573173721618">
										<div className="boton-llamar-prod">
											<p className="text-llamar-boton-prod">Llamar</p>
											<p className="text-llamar-llamar-prod">+57 (313) 868 9045</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
	 			</div>
	 			<div className="linea-larga-product"></div>
	 			<Footer />
	 			<Card ref={(card) => this.card = card} seccion={"Produccion de video"}/>
	 		</div>
		)
	}
}