import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './ingenieria.css'
import PrismicDOM from 'prismic-dom';
import _ from 'underscore';
import Card from '../../inc/Card';

export default class IngenieriaVol extends Component{
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
		window.PrismicApi
			.getSingle('ingenieria')
			.then(({data}) => {
				console.log(data);
				this.setState({...this.state, data})
			});
			this.show_card = this.show_card.bind(this);
	}
	getText(id) {
		return this.state.data[id] ? PrismicDOM.RichText.asText(this.state.data[id]) : ''
	}
	getHtml(id) {
		return this.state.data[id] ? PrismicDOM.RichText.asHtml(this.state.data[id]) : ''
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
			<div className="background-ingenieria">
		 		<NavbarVolartech />
				 <div className="first-fond-ingenieria" layout="row" layout-align="center">
	 				<div className="content-text-dron-ing" layout="column" layout-align="start stretch" layout-gt-sm="row" flex="">
					 <div flex-gt-sm="50" flex-order-gt-sm="2" layout="row" layout-align="center">
							<div flex-sm="70" flex="100">
								<div className="imagen-dron-ing"></div>
							</div>
						</div>
						<div className="conten-texto-up padding" flex-gt-sm="" layout="column" layout-align="end">
		 					<div>
		 						<p className="text-title-ing aller-display">{this.getText('main_title')}</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-ing aller">{this.getText('main_subtitle')}</p>
		 					</div>
							<div show-gt-md="" className="padding"></div>
						</div>
	 				</div>
	 			</div>
	 			
	 			<div className="second-fond-ingenieria padding-v" layout="row" layout-align="center">
	 				<div className="content-text-descripcion container padding-v">
 						<p className="text-descripcion-produccion container-half padding">{this.getText('main_text')}</p>
 					</div>
	 			</div>
	 			<div className="third-fond-ingenieria min-height-fond">
	 				<div>
	 					<div className="content-text-dron-ingenieria min-height-fond" layout="column" layout-gt-sm="row" layout-align="start stretch">
		 					<div flex-gt-sm="">
		 						<div className="img-droncito ratio-4-3"></div>
		 					</div>
		 					<div className="size-responsive-content container-third padding" layout="column" layout-align="center">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria aller">{this.getText('lidar_title1')}</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="conetenedor-subtitulos">
		 							<p className="subtitle-text-ing aller">{this.getText('lidar_title2')}</p>
		 						</div>
		 						<div className="content-info-ing">

		 							<p className="text-info-ing opacity5" dangerouslySetInnerHTML={{__html: this.getHtml('lidar_text2')}}></p>
		 							{/* <p className="text-info-ing">- Multirotor confiable y robusto de última tecnología.</p>
		 							<p className="text-info-ing">- Levantamientos topográficos con lidar, permite generar modelos digitales de terreno y elevación con gran densidad de puntos.</p>
		 							<p className="text-info-ing">- Hasta 300,000 puntos por segundo.</p> */}
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fourth-fond-ingenieria min-height-fond">
	 				<div>
	 					<div className="content-text-dron-ingenieria min-height-fond" layout="column" layout-align="center">
		 					<div className="container-third padding">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria aller">{this.getText('lidar_movil_title1')}</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="conetenedor-subtitulos">
		 							<p className="subtitle-text-ing aller">{this.getText('lidar_movil_title2')}</p>
		 						</div>
		 						<div className="content-info-ing opacity5">
		 							<p className="text-info-ing">{this.getText('lidar_movil_text2')}</p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fifth-fond-ingenieria min-height-fond">
	 				<div>
	 					<div className="content-text-dron-ingenieria" layout="column" layout-gt-sm="row" layout-align="start stretch">
		 					<div flex-gt-xs="">
		 						<div className="img-droncito-2 ratio-4-3"></div>
		 					</div>
		 					<div className="size-responsive-content container-third padding">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria aller">{this.getText('topografia_title')}</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="content-info-ing opacity5">
		 							<p className="text-info-ing" dangerouslySetInnerHTML={{__html: this.getHtml('topografia_text')}}></p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="background-ing-white" layout="column" layout-align="start center">
	 				<div className="content-text-nuestrotrabajo-ing">
	 					<p className="text-nuestro-trabajo-ing aller">{this.getText('portafolio_title')}</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo-ing">
	 					<p className="text-muestras-trabajo-ing">{this.getText('portafolio_text')}</p>
	 				</div>
	 				<div className="content-img-ing container padding-half" layout="row" layout-align="center" layout-wrap="">
						{
							_(this.state.data.portafolio_videos || []).map(({title}, index) => 
							<div key={index} className={`content-${index}-img padding-half`} flex-gt-sm="33" flex-sm="50" flex-xs="100">
								<div className="img-1 ratio-4-3"></div>
								<p className="text-fecha-img">{PrismicDOM.RichText.asText(title)}</p>
							</div>)
						}
	 				</div>
	 				<div className="big-content-ver-ing">
		 				<div className="contenedor-ver-mas-ing">
	 						<p className="text-ver-mas-ing">Ver mas</p>
	 					</div>
 					</div>
				</div>
				<div>
	 				<div className="contenedor-interes-boton-contacto-ing" layout="row" layout-align="center">
					 	<div className="container padding" layout-gt-sm="row" layout="column">
							<div className="content-info-interes-ing padding" flex-gt-sm="">
								<p className="text-te-interesa-ing aller">{this.getText('contacto_title')}</p>
								<p className="text-text-interes-ing">{this.getText('contacto_subtitle')}</p>
							</div>
							<div className="padding">
								<a href="/contacto" target="_blank" onClick={(event) => this.show_card(event)}>
									<div className="boton-cotizacion-ing">
										<p className="text-boton-cotizacion-ing">Cotizar servicio</p>
									</div>
								</a>
								<div className="content-mail-call-ing">
									<a href={`mailto:${this.getItem('contacto_email')}`}>
										<div className="boton-mail-ing">
											<p className="text-mail-boton-ing">Mail</p>
											<p className="text-mail-mail-ing">{this.getItem('contacto_email')}</p>
										</div>
									</a>
									<a href="tel:+573173721618">
										<div className="boton-llamar-ing">
											<p className="text-llamar-boton-ing">Llamar</p>
											<p className="text-llamar-llamar-ing">+57 (313) 868 9045</p>
										</div>
									</a>
								</div>
							</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="linea-larga-ing"></div>
	 			<Footer />
	 			<Card ref={(card) => this.card = card} seccion={"Ingeniería"}/>
	 		</div>
		)
	}
}