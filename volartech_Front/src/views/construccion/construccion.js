import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './construccion.css'
import PrismicDOM from 'prismic-dom';
import _ from 'underscore';
import Card from '../../inc/Card';

export default class ConstruccionVol extends Component{
	constructor(props) {
		super(props)
		this.state = {
			data: {},
			videoEmbed: null,
			isExpanded: false
		}
		window.PrismicApi
			.getSingle('produccion')
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
	getEmbed(id) {
		return this.state.data[id] ? this.state.data[id].html : ''
	}
	render(){
		return (
			<div className="background-construccion">

				<div className={'embed-dialog ' + (this.state.videoEmbed ? 'active' : '')}>
					<div className="overlay" onClick={() => this.setState({...this.state, videoEmbed: null})}></div>
					<div className="inner-wrapper">
						<div style={{minWidth: 'calc(8s0vw -68psx)'}} className="video-container" dangerouslySetInnerHTML={{__html: this.state.videoEmbed}}></div>
					</div>
				</div>
				<NavbarVolartech current={2} />
				<div className="first-fond-construccion" layout="row" layout-align="center">
	 				<div className="content-text-dron-const" layout="column" layout-align="start stretch" layout-gt-sm="row" flex="">
					 <div flex-gt-sm="60" flex-order-gt-sm="2" layout="row" layout-align="center">
							<div flex-sm="70" flex="100">
								<div className="imagen-dron-const ratio-4-3"></div>
							</div>
						</div>
						<div className="contenedor-titulo-construccion content-titulo-resp" flex-gt-sm="" layout="column" layout-align="end">
		 					<div>
		 						<p className="text-title-construccion aller-display aller">{this.getText('main_title')}</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-const aller">{this.getText('main_subtitle')}</p>
		 					</div>
							<div show-gt-md="" className="padding"></div>
						</div>
	 				</div>
	 			</div>
	 			<div className="second-fond-construccion" layout="row" layout-align="center">
	 				<div className="content-text-descripcion-cons padding-v contenedor content-special" layout="row">
 						<p className="text-descripcion-construccion container-half margin-v opacity75 clase-especial">{this.getText('main_text')}</p>
 					</div>
	 			</div>
	 			<div className="fourth-fond-construccion min-height-fond" layout="row" layout-align="center center">
	 				<div className="background-fondo-responsive">
		 				<div className="content-info-const-2 container padding" layout-gt-sm="row" layout="column">
		 					<div layout-xs="column" layout-align-xs="start center" className="content-image-play pointer margin-v padding-v" onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('obra_aerea_video')})}>
			 					<a>
			 						<div className="icono-play-construccion"></div>
			 					</a>
			 					<div>
			 						<p className="text-play-const">Play Tour</p>
			 					</div>
			 				</div>
			 				<div className="contenido-text-avance">
			 					<div className="contenido-titulo-const-avance">
			 						<p className="text-title-const aller">{this.getText('obra_aerea_title1')}</p>
			 					</div>
			 					<div className="division-primeros-textos"></div>
								<div className="content-avance-obra-f-text container-half">
			 						<p className="text-desc-construccion opacity5">{this.getText('obra_aerea_text1')}</p>
			 					</div>
			 					<div className="container-half">
			 						{/* <div className="contenedor-text-area">
			 							<p className="second-text-const aller">{this.getText('obra_aerea_title2')}</p>
			 						</div> */}
			 						<div layout="row" className="contenedor-iconos">
										<div flex="30">
											<div className="ico-3-const"></div>
										</div>
										{/* <div className="padding-quarter"></div> */}
			 							{/* <p className="text-desc-construccion otro-width-cons left opacity5" >{this.getText('obra_aerea_text2')}</p> */}
			 						</div>
			 					</div>
			 				</div>
		 				</div>
	 				</div>
					<div className="padding"></div>
	 			</div>
	 			<div className="fifth-fond-construccion min-height-fond-ing" layout="row" layout-align="center center">
	 				<div className="content-info-const-3 container padding" layout-gt-sm="row" layout="column">
		 				<div className="container-half">
		 					<div className="contenido-titulo-const-avance">
		 						<p className="text-title-const aller">{this.getText('obra_timelapse_title1')}</p>
		 					</div>
		 					<div className="division-primeros-textos"></div>
		 					<div className="contenedor-genere-confianza">
		 						<p className="text-desc-construccion opacity5">{this.getText('obra_timelapse_text1')}</p>
		 					</div>
		 					<div className="contenedor-iconos" layout="row" layout-align="end">
		 						<div layout-align="end" layout="row">
									<div className="padding-half"></div>
									<div className="ico-4-const"></div>
								</div>
		 					</div>
		 				</div>
						<div layout-xs="column" layout-align-xs="start center" className="content-image-play pointer"  onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('obra_timelapse_video')})}>
		 					<a>
		 						<div className="icono-play-construccion"></div>
		 					</a>
		 					<div>
		 						<p className="text-play-const">Play Tour</p>
		 					</div>
		 				</div>
	 				</div>
					<div className="padding"></div>
	 			</div>
	 			<div className="third-fond-construccion min-height-fond" layout="row" layout-align="center center">
	 				<div className="content-info-const-1 container padding" layout-gt-sm="row" layout="column">
		 				<div layout="column">
		 					<div className="content-text-tour">
		 						<p className="text-title-const aller">{this.getText('tour-360_title1')}</p>
		 					</div>
		 					<div className="division-primeros-textos"></div>
		 					<div className="first-content-text-description container-half">
		 						<p className="text-desc-construccion opacity5">{this.getText('tour-360_text1')}</p>
		 					</div>
		 					<div className="contenedor-iconos">
		 						<div className="contenedor-icono-cubo">
		 							<div className="ico-1-const"></div>
		 							<p className="text-icon-prod">3D</p>
		 						</div>
		 						<div className="contenedor-icono-time">
		 							<div className="ico-2-const"></div>
		 							<p className="text-icon-prod">Time Lapse</p>
		 						</div>
		 					</div>
		 				</div>
						<div className="content-image-play" flex-order-gt-sm="-1" layout-xs="column" layout-align-xs="start center" >
		 					<a className="pointer" onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('tour-360_video')})}>
		 						<div className="icono-play-construccion"></div>
		 					</a>
		 					<div className="pointer" onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('tour-360_video')})}>
		 						<p className="text-play-const">Play Tour</p>
		 					</div>
		 				</div>
	 				</div>
	 			</div>
				<div className="icon-wrapper" layout="row" layout-align="center">
					<img src={require('../../img/icos/triangle_up_white.png')} alt="" />
				</div>
	 			<div className="white-fond-const">
	 				<div className="content-text-nuestrotrabajo-const">
	 					<p className="text-nuestro-trabajo-const aller">{this.getText('portafolio_title')}</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo-const">
	 					<p className="text-muestras-trabajo-const opacity75">{this.getText('portafolio_text')}</p>
	 				</div>
					<div layout="row" layout-align="center">
						<div className="content-img-const container" id="imagenes-extendida" layout="row" layout-wrap="true" layout-align="center">
							{
								_(this.state.data.portafolio_videos || []).chain().first(this.state.isExpanded ? 99 : 3).map(({text, image: {url}}, index) =>
								<div key={index} className="content-1-img-cons padding-half" flex-gt-sm="33" flex-sm="50" flex-xs="100">
									<div className="ratio-16-9 background-image" style={{backgroundImage: `url(${url})`}}></div>
									<p className="text-fecha-img-cons">{PrismicDOM.RichText.asText(text)}</p>
								</div>).value()
							}
						</div>
						
					</div>
					<div className="big-content-ver-const" id="ver-mas">
						<div className="contenedor-ver-mas-cons" id="underline-size">
							<p className="color-ver-mas" onClick={() => {this.setState({...this.state, isExpanded: !this.state.isExpanded})}}>Ver {this.state.isExpanded ? 'Menos' : 'Más'}</p>
						</div>
					</div>
				</div>
				<div>
	 				<div className="contenedor-interes-boton-contacto-const" layout="row" layout-align="center center">
	 					<div className="container padding"  layout-gt-sm="row" layout="column" layout-align-gt-sm="center center">
							<div className="content-info-interes-const" flex-gt-sm="">
								<p className="text-te-interesa-const">{this.getText('contacto_title')}</p>
								<p className="text-text-interes-const opacity75">{this.getText('contacto_text')}</p>
							</div>
							<div>
								<a href="/contacto" target="_blank" onClick={(event) => this.show_card(event)}>
									<div className="boton-cotizacion-const">
										<p className="text-boton-cotizacion-const">Cotizar servicio</p>
									</div>
								</a>
								<div className="content-mail-call-const" layout="row">
									<a href={'mailto: ' + this.getItem('contacto_email')} flex="" className="padding-quarter">
										<div className="boton-mail-const">
											<p className="text-mail-boton-const">Mail</p>
											<p className="text-mail-mail-const" hide-xs="">{this.getItem('contacto_email')}</p>
										</div>
									</a>
									<a href="tel:+573173721618" flex="" className="padding-quarter">
										<div className="boton-llamar-const">
											<p className="text-llamar-boton-const">Llamar</p>
											<p className="text-llamar-llamar-const" hide-xs="">+57 (317) 372 1618</p>
										</div>
									</a>
								</div>
							</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="linea-larga-const"></div>
	 			<Footer />
	 			<Card ref={(card) => this.card = card} seccion={"Construccion"}/>
	 		</div>
		)
	}
}