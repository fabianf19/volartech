import React, { Component } from 'react';
import Footer from '../../inc/Footer';
import PrismicDOM from 'prismic-dom';
import './Home.css';

let bg1 = require('../../img/fondos/imagen-inicio-volartech.png');
let bg2 = require('../../img/fondos/imagen-page-prod.png');
let bg3 = require('../../img/fondos/plano-aereo.png');
let bg4 = require('../../img/fondos/imagen-page-ing.png');

export default class Home extends Component{
	constructor(props){
		super(props);

		this.state = {
			selected: 0,
			data: {}
		}
		window.PrismicApi
			.getSingle('home')
			.then(({data}) => {
				console.log(data);
				this.setState({...this.state, data})
			});
	}

	getText(id) {
		return this.state.data[id] ? PrismicDOM.RichText.asText(this.state.data[id]) : ''
	}
	getUrl(id) {
		return this.state.data[id] ? this.state.data[id].url : ''
	}

	render(){

		let secciones = [
			<div className="contentedor-texto-perspectiva">
				<p className="volartech-title">{this.getText('main_title')}</p>
				<p className="volartech-sub-title2">{this.getText('main_subtitle')}</p>
				<div className="content-play">
					<a href={this.getUrl('main_url')} target="_blank" rel="noopener noreferrer">
						<div className="icono-play-volartech"> </div>
					</a>
					<p className="text-play">Play Video</p>
				</div>
			</div>,
			<div className="contentedor-texto-produccion">
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
			<div className="contentedor-texto-ingenieria">
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

			<div className="contentedor-texto-ingenieria">
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
				
			 	<div className="background-inicio-page" style={{backgroundImage : 'url(' + bg +')'}}>
			 		<div className="background-inicio-imagen">
			 			<div className="contenedor-navbar">
				 			<div className="navbar-volartech">
				 				<div></div>
				 				<div className="logo-navbar-volartech"></div>
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
				 				<a href="/contacto">
					 				<div className="boton-contact-v">
					 					<p className="text-navbar-volartech">Contacto</p>
					 				</div>
				 				</a>
				 			</div>
			 			</div>
			 			<div className="content-textos-play">
			 				<div className="contenedor-contenidos-home">
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