import React, { Component } from 'react';
import Footer from '../../inc/Footer';
import PrismicDOM from 'prismic-dom';
import {Dialog} from 'react-mdl';
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
		this.onCloseModal = this.onCloseModal.bind(this)
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
			<div className="contentedor-texto-perspectiva">
				<div className="container-half">
					<p className="volartech-title">
						{this.getText('main_title')}
					</p>
					<p className="volartech-sub-title2">{this.getText('main_subtitle')}</p>
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
				<p className="volartech-title">{this.getText('video_title')}</p>
				<p className="volartech-sub-title2-prod">{this.getText('video_subtitle')}</p>
				<p className="volartech-description-prod">{this.getText('video_text')}</p>
				<div className="content-play">
					<a href="/produccion" target="_blank">
						<div className="boton-product-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>,
			<div className="container">
				<p className="volartech-title-construccion">{this.getText('construction_title')}</p>
				<p className="volartech-sub-title2-const">{this.getText('construction_subtitle')}</p>
				<p className="volartech-description-ing">{this.getText('construction_text')}</p>
			<div className="content-play">
					<a href="/construccion" target="_blank">
						<div className="boton-construccion-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>,

			<div className="container">
				<p className="volartech-title">{this.getText('engineering_title')}</p>
				<p className="volartech-sub-title2-prod">{this.getText('engineering_subtitle')}</p>
				<p className="volartech-description-ing">{this.getText('engineering_text')}</p>
				<div className="content-play">
					<a href="/ingenieria" target="_blank">
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

				<Dialog style={{top: '2rem', width: '80vw'}} open={!!this.state.videoEmbed} onCancel={() => this.setState({...this.state, videoEmbed: null})}>
					
						<div layout="row" layout-align="end" className="padding pointer" style={{marginTop: '-1rem'}}>
							<div onClick={() => this.setState({...this.state, videoEmbed: null})}>Cerrar</div>
						</div>
						<div style={{minWidth: 'calc(80vw -68px)'}} className="video-container" dangerouslySetInnerHTML={{__html: this.state.videoEmbed}}></div>
					
				</Dialog>

			 	<div className="background-inicio-page" style={{backgroundImage : 'url(' + bg +')'}}>
			 		<div className="background-inicio-imagen">
			 			<div className="contenedor-navbar">
				 			<div className="navbar-volartech padding-h" layout="row" layout-xs="column" layout-align-xs="start stretch">
								<div className="logo-navbar-volartech"></div>
								<div flex=""></div>
								<div className="md-content" layout="row"></div>
									<div className="content-selector-sections-home">
										<a href="/quienes">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Quienes Somos</p>
											</div>
										</a>
										<a href="/produccion">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Produccion</p>
											</div>
										</a>
										<a href="/construccion">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Construccion</p>
											</div>
										</a>
										<a href="/ingenieria">
											<div className="contenedor-textos-navb">
												<p className="text-navbar-volartech">Ingenieria</p>
											</div>
										</a>
										{/* <a href="/contacto">
											<div className="boton-contact-v">
												<p className="text-navbar-volartech">Contacto</p>
											</div>
										</a> */}
									</div>
				 			</div>
			 			</div>
			 			<div className="content-textos-play padding" layout="row" layout-align="center">
			 				<div className="contenedor-contenidos-home container padding">
				 				{secciones[this.state.selected]}
				 				<div className="contenedor-circulos">
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