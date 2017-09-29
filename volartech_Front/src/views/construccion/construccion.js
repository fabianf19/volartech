import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './construccion.css'
import PrismicDOM from 'prismic-dom';
import Modal from 'react-responsive-modal';
import _ from 'underscore';
export default class ConstruccionVol extends Component{
	constructor(props) {
		super(props)
		this.state = {
			data: {},
			videoEmbed: null
		}
		window.PrismicApi
			.getSingle('produccion')
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
	getEmbed(id) {
		return this.state.data[id] ? this.state.data[id].html : ''
	}
	render(){
		return (
			<div className="background-construccion">
		 		<Modal open={!!this.state.videoEmbed} onClose={() => this.setState({...this.state, videoEmbed: null})}>
					<div style={{minWidth: '80vw'}} className="video-container" dangerouslySetInnerHTML={{__html: this.state.videoEmbed}}></div>
				</Modal>
				<NavbarVolartech />
	 			<div className="first-fond-construccion">
	 				<div className="content-text-dron-const">
		 				<div>
		 					<div className="contenedor-titulo-construccion">
		 						<p className="text-title-construccion">{this.getText('main_title')}</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-const">{this.getText('main_subtitle')}</p>
		 					</div>
		 					{/*<div className="quienes-somos-div-text"></div>*/}
		 				</div>
		 				<div className="imagen-dron-const"></div>
	 				</div>
	 			</div>
	 			<div className="second-fond-construccion">
	 				<div className="content-text-descripcion-cons">
 						<p className="text-descripcion-construccion">{this.getText('main_text')}</p>
 					</div>
	 			</div>
	 			<div className="third-fond-construccion">
	 				<div className="content-info-const-1">
		 				<div className="content-image-play">
		 					<a className="pointer" onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('tour-360_video')})}>
		 						<div className="icono-play-construccion"></div>
		 					</a>
		 					<div className="pointer" onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('tour-360_video')})}>
		 						<p className="text-play-const">Play Video</p>
		 					</div>
		 				</div>
		 				<div>
		 					<div className="content-text-tour">
		 						<p className="text-title-const">{this.getText('tour-360_title1')}</p>
		 					</div>
		 					<div className="division-primeros-textos"></div>
		 					<div className="first-content-text-description">
		 						<p className="text-desc-construccion">{this.getText('tour-360_text1')}</p>
		 					</div>
		 					<div className="contenedor-iconos">
		 						<div className="contenedor-icono-cubo">
		 							<div className="ico-1-const"></div>
		 							<p className="text-icono-const">3D</p>
		 						</div>
		 						<div className="contenedor-icono-time">
		 							<div className="ico-2-const"></div>
		 							<p className="text-icono-const">Time Lapse</p>
		 						</div>
		 					</div>
		 				</div>
	 				</div>
	 			</div>
	 			<div className="fourth-fond-construccion">
	 				<div className="content-info-const-2">
		 				<div className="contenido-text-avance">
		 					<div className="contenido-titulo-const-avance">
		 						<p className="text-title-const">{this.getText('obra_aerea_title1')}</p>
		 					</div>
		 					<div className="content-avance-obra-f-text">
		 						<p className="text-desc-construccion">{this.getText('obra_aerea_text1')}</p>
		 					</div>
		 					<div className="division-primeros-textos"></div>
		 					<div>
		 						<div className="contenedor-text-area">
		 							<p className="second-text-const">{this.getText('obra_aerea_title2')}</p>
		 						</div>
		 						<div className="contenedor-iconos">
		 							<div className="ico-3-const"></div>
		 							<p className="text-desc-construccion otro-width-cons" >{this.getText('obra_aerea_text2')}</p>
		 						</div>
		 					</div>
		 				</div>
		 				<div className="content-image-play pointer" onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('obra_aerea_video')})}>
		 					<a>
		 						<div className="icono-play-construccion"></div>
		 					</a>
		 					<div>
		 						<p className="text-play-const">Play Video</p>
		 					</div>
		 				</div>
	 				</div>
	 			</div>
	 			<div className="fifth-fond-construccion">
	 				<div className="content-info-const-3">
		 				<div className="content-image-play pointer"  onClick={() => this.setState({...this.state, videoEmbed: this.getEmbed('obra_timelapse_video')})}>
		 					<a>
		 						<div className="icono-play-construccion"></div>
		 					</a>
		 					<div>
		 						<p className="text-play-const">Play Video</p>
		 					</div>
		 				</div>
		 				<div>
		 					<div className="contenido-titulo-const-avance">
		 						<p className="text-title-const">{this.getText('obra_timelapse_title1')}</p>
		 					</div>
		 					<div className="contenedor-genere-confianza">
		 						<p className="text-desc-construccion">{this.getText('obra_timelapse_text1')}</p>
		 					</div>
		 					<div className="division-primeros-textos"></div>
		 					<div className="contenedor-time-lapse">
		 						<p className="second-text-const">{this.getText('obra_timelapse_title2')}</p>
		 					</div>
		 					<div className="contenedor-iconos">
		 						<p className="text-desc-construccion otro-width-cons">{this.getText('obra_timelapse_text2')}</p>
		 						<div className="ico-4-const"></div>
		 					</div>
		 				</div>
	 				</div>
	 			</div>
	 			<div className="white-fond-const">
	 				<div className="content-text-nuestrotrabajo-const">
	 					<p className="text-nuestro-trabajo-const">{this.getText('portafolio_title')}</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo-const">
	 					<p className="text-muestras-trabajo-const">{this.getText('portafolio_text')}</p>
	 				</div>
	 				<div className="content-img-const">
						{
							_(this.state.data.portafolio_videos || {}).map(({title}, index) =>
							<div key={index} className="content-1-img-cons">
								<div className="img-1-cons"></div>
								<p className="text-fecha-img-cons">{PrismicDOM.RichText.asText(title)}</p>
							</div>)
						}
	 				</div>
	 				<div className="big-content-ver-const">
		 				<div className="contenedor-ver-mas-cons">
	 						<p className="text-ver-mas-cons">Ver mas</p>
	 					</div>
 					</div>
	 				<div className="contenedor-interes-boton-contacto-const">
	 					<div className="content-info-interes-const">
	 						<p className="text-te-interesa-const">{this.getText('contacto_title')}</p>
	 						<p className="text-text-interes-const">{this.getText('contacto_text')}</p>
	 					</div>
	 					<div>
	 						<a href="/contacto" target="_blank">
		 						<div className="boton-cotizacion-const">
		 							<p className="text-boton-cotizacion-const">Cotizar servicio</p>
		 						</div>
	 						</a>
	 						<div className="content-mail-call-const">
	 							<a href={'mailto: ' + this.getItem('contacto_email')}>
		 							<div className="boton-mail-const">
		 								<p className="text-mail-boton-const">Mail</p>
		 								<p className="text-mail-mail-const">{this.getItem('contacto_email')}</p>
		 							</div>
	 							</a>
	 							<a href="tel:+573173721618">
		 							<div className="boton-llamar-const">
		 								<p className="text-llamar-boton-const">Llamar</p>
		 								<p className="text-llamar-llamar-const">+57 (313) 868 9045</p>
		 							</div>
	 							</a>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="linea-larga-const"></div>
	 			<Footer />
	 		</div>
		)
	}
}