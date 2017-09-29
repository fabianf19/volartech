import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './ingenieria.css'
import PrismicDOM from 'prismic-dom';
import _ from 'underscore';
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
	render(){
		return (
			<div className="background-ingenieria">
		 		<NavbarVolartech />
	 			<div className="first-fond-ingenieria">
	 				<div className="content-text-dron-ing">
		 				<div className="content-texto-up">
		 					<div>
		 						<p className="text-title-ing">{this.getText('main_title')}</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-ing">{this.getText('main_subtitle')}</p>
		 					</div>
		 					{/*<div className="quienes-somos-div-text"></div>*/}
		 				</div>
		 				<div className="imagen-dron-ing"></div>
	 				</div>
	 			</div>
	 			<div className="second-fond-ingenieria">
	 				<div className="content-text-descripcion">
 						<p className="text-descripcion-produccion">{this.getText('main_text')}</p>
 					</div>
	 			</div>
	 			<div className="third-fond-ingenieria">
	 				<div>
	 					<div className="content-text-dron-ingenieria">
		 					<div>
		 						<div className="img-droncito"></div>
		 					</div>
		 					<div className="size-responsive-content">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria">{this.getText('lidar_title1')}</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="conetenedor-subtitulos">
		 							<p className="subtitle-text-ing">{this.getText('lidar_title2')}</p>
		 						</div>
		 						<div className="content-info-ing">

		 							<p className="text-info-ing" dangerouslySetInnerHTML={{__html: this.getHtml('lidar_text2')}}></p>
		 							{/* <p className="text-info-ing">- Multirotor confiable y robusto de última tecnología.</p>
		 							<p className="text-info-ing">- Levantamientos topográficos con lidar, permite generar modelos digitales de terreno y elevación con gran densidad de puntos.</p>
		 							<p className="text-info-ing">- Hasta 300,000 puntos por segundo.</p> */}
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fourth-fond-ingenieria">
	 				<div>
	 					<div className="content-text-dron-ingenieria">
		 					<div>
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria">{this.getText('lidar_movil_title1')}</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="conetenedor-subtitulos">
		 							<p className="subtitle-text-ing">{this.getText('lidar_movil_title2')}</p>
		 						</div>
		 						<div className="content-info-ing">
		 							<p className="text-info-ing">{this.getText('lidar_movil_text2')}</p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fifth-fond-ingenieria">
	 				<div>
	 					<div className="content-text-dron-ingenieria">
		 					<div>
		 						<div className="img-droncito-2"></div>
		 					</div>
		 					<div className="size-responsive-content">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria">{this.getText('topografia_title')}</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="content-info-ing">
		 							<p className="text-info-ing" dangerouslySetInnerHTML={{__html: this.getText('topografia_text')}}></p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="background-ing-white">
	 				<div className="content-text-nuestrotrabajo-ing">
	 					<p className="text-nuestro-trabajo-ing">{this.getText('portafolio_title')}</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo-ing">
	 					<p className="text-muestras-trabajo-ing">{this.getText('portafolio_text')}</p>
	 				</div>
	 				<div className="content-img-ing">
						{
							_(this.state.data.portafolio_videos || []).map(({title}, index) => 
							<div key={index} className={`content-${index}-img`}>
								<div className="img-1"></div>
								<p className="text-fecha-img">{PrismicDOM.RichText.asText(title)}</p>
							</div>)
						}
	 				</div>
	 				<div className="big-content-ver-ing">
		 				<div className="contenedor-ver-mas-ing">
	 						<p className="text-ver-mas-ing">Ver mas</p>
	 					</div>
 					</div>
	 				<div className="contenedor-interes-boton-contacto-ing">
	 					<div className="content-info-interes-ing">
	 						<p className="text-te-interesa-ing">{this.getText('contacto_title')}</p>
	 						<p className="text-text-interes-ing">{this.getText('contacto_subtitle')}</p>
	 					</div>
	 					<div>
	 						<a href="/contacto" target="_blank">
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
	 			<div className="linea-larga-ing"></div>
	 			<Footer />
	 		</div>
		)
	}
}