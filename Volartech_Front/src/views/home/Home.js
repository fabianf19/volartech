import React, { Component } from 'react';
import Footer from '../../inc/Footer';
import PrismicDOM from 'prismic-dom';
// import {dialogPolyfill} from 'dialog-polyfill';
import './Home.css';

let bg1 = require('../../img/fondos/imagen-inicio-volartech.jpg');
let bg2 = require('../../img/fondos/imagen-page-prod.jpg');
let bg3 = require('../../img/fondos/plano-aereo.jpg');
let bg4 = require('../../img/fondos/imagen-page-ing.jpg');

export default class Home extends Component{
	
	constructor(props){
		super(props);

		this.state = {
			selected: 0,
			data: {},
			videoEmbed: null
		}
		window.PrismicApi
			.getSingle('home')
			.then(({data}) => {
				console.log(data);
				this.setState({...this.state, data})
			});
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	getText(id) {
		return this.state.data[id] ? PrismicDOM.RichText.asText(this.state.data[id]) : ''
	}
	getUrl(id) {
		return this.state.data[id] ? this.state.data[id].url : ''
	}
	getEmbed(id) {
		return this.state.data[id] ? this.state.data[id].html : ''
	}

	onCloseModal() {
		this.setState({...this.state, videoEmbed: null})
	}

	render(){

		let secciones = [
			<div className="contentedor-texto-perspectiva" layout-xs="column" layout-align-xs="center centetr">
				<div className="container-half">
					<p className="volartech-title aller-display">
						{this.getText('main_title')}
					</p>
					<p className="volartech-sub-title2 container-half">{this.getText('main_subtitle')}</p>
				</div>
				<div className="content-play pointer">
					<a onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('video_url')})}>
						<div className="icono-play-volartech"> </div>
					</a>
					<p className="text-play pointer">
						<a onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('video_url')})}>Play Video
						</a>
						</p>
				</div>
			</div>,
			<div className="container">
				<p className="volartech-title aller-display">{this.getText('video_title')}</p>
				<p className="volartech-sub-title2-prod">{this.getText('video_subtitle')}</p>
				<p className="volartech-description-prod container-half opacity75">{this.getText('video_text')}</p>
				<div className="content-play">
					<a href="/produccion" >
						<div className="boton-product-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>,
			<div className="container">
				<p className="volartech-title-construccion aller-display">{this.getText('construction_title')}</p>
				<p className="volartech-sub-title2-const">{this.getText('construction_subtitle')}</p>
				<p className="volartech-description-ing container-half opacity75">{this.getText('construction_text')}</p>
			<div className="content-play">
					<a href="/construccion" >
						<div className="boton-construccion-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>,

			<div className="container">
				<p className="volartech-title aller-display">{this.getText('engineering_title')}</p>
				<p className="volartech-sub-title2-prod">{this.getText('engineering_subtitle')}</p>
				<p className="volartech-description-ing container-half opacity75">{this.getText('engineering_text')}</p>
				<div className="content-play">
					<a href="/ingenieria" >
						<div className="boton-ingenieria-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>
		];		

		let bg = (this.state.selected === 0) ? bg1 : (this.state.selected === 1) ? bg2 : (this.state.selected === 2) ? bg3 : bg4;

		return (
			<div>

				<div className={'embed-dialog ' + (this.state.videoEmbed ? 'active' : '')}>
					<div className="overlay" onClick={() => this.setState({...this.state, videoEmbed: null})}></div>
					<div className="inner-wrapper">
						<div style={{minWidth: 'calc(8s0vw -68psx)'}} className="video-container" dangerouslySetInnerHTML={{__html: this.state.videoEmbed}}></div>
					</div>
				</div>
			 	<div className="background-inicio-page relative" style={{backgroundImage : 'url(' + bg +')'}}>
			 		<div className="background-inicio-imagen absolute-fill" layout="column">
			 			<div className="contenedor-navbar">
				 			<div className="navbar-volartech padding-h contenedor-menu-vol" layout="row" layout-xs="column" layout-align-xs="start stretch">
								<div layout="row" layout-align="center">
									<div className="logo-navbar-volartech logo-volartech-home"></div>
								</div>
								<div flex="" className="padding-half"></div>
								<div className="md-content" layout="row"></div>
									<div className="content-selector-sections-home">
										<a href="/quienes">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Quiénes Somos</p>
											</div>
										</a>
										<a href="/produccion">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Producción</p>
											</div>
										</a>
										<a href="/construccion">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Construcción</p>
											</div>
										</a>
										<a href="/ingenieria">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Ingeniería</p>
											</div>
										</a>
										<a href="/contacto" hide-xs="">
											<div className="boton-contact-v padding-v-quarter padding-h">
												<p className="text-navbar-volartech">Contacto</p>
											</div>
										</a>
									</div>
				 			</div>
			 			</div>
						<div className="padding" hide-gt-xs=""></div>
			 			<div className="content-textos-play padding-v" flex="" layout="row" layout-align="center">
			 				<div className="contenedor-contenidos-home container" layout="row" layout-xs="column">
								<div className="padding" flex-gt-xs="">
									{secciones[this.state.selected]}
								</div>
				 				<div className="contenedor-circulos padding-half">
				 					<div className={(this.state.selected === 0) ? "circulo-cambio active" : "circulo-cambio"} onClick={() => this.setState({...this.state, selected : 0})}></div>
				 					<div className={(this.state.selected === 1) ? "circulo-cambio active2" : "circulo-cambio"} onClick={() => this.setState({...this.state, selected : 1})}></div>
				 					<div className={(this.state.selected === 2) ? "circulo-cambio active3" : "circulo-cambio"} onClick={() => this.setState({...this.state, selected : 2})}></div>
				 					<div className={(this.state.selected === 3) ? "circulo-cambio active4 otro-margen-puntos" : "circulo-cambio otro-margen-puntos"} onClick={() => this.setState({...this.state, selected : 3})}></div>
				 				</div>
			 				</div>
			 			</div>
			 		</div>
			 	</div>

				<Footer />
			</div>
		)
	}
}