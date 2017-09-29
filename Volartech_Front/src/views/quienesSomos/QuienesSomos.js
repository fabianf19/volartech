import _ from 'underscore';
import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './QuienesSomos.css';
import Slider from '../../componentes/Slider';
import PrismicDOM from 'prismic-dom';
import Card from '../../inc/Card';

export default class QuienesSomos extends Component{
	constructor(props){
		super(props);

		this.state = {
			selected : 0,
			num_slides : 4,
			data: {}
		}
		window.PrismicApi
			.getSingle('quienes_somo')
			.then(({data}) => {
				console.log(data);
				this.setState({...this.state, data, num_slides: (data.quotes || []).length})
				this.start_timer()
			});
		this.show_card = this.show_card.bind(this);
		this.start_timer = this.start_timer.bind(this);
		this.increment = this.increment.bind(this);
		this.change_selected = this.change_selected.bind(this);
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

	componentDidMount(){
		this.start_timer();
	}

	change_selected(index){
		clearInterval(this.interval);
		this.setState({...this.state, selected: index});
		this.start_timer();
	}

	start_timer(){
		this.interval = setInterval(() => {
			this.increment();
		},5000);
	}

	increment(){
		clearInterval(this.interval);

		let n = this.state.selected;
		var nuevo = -1;

		if (n + 1 > this.state.num_slides - 1){
			nuevo = 0;
		}else{
			nuevo = n + 1;
		}
		this.setState({...this.state, selected: nuevo});
		this.start_timer();
	}
	show_card(event){
		event.preventDefault();

		this.card.show_card();
	}

	render(){

		var slides = _(this.state.data.quotes || []).map(({person, profession, text}) => 
			<div className="content-comentario-cliente">
				<div className="quienes-nosotros-comillas"></div>
				<div>
					<p className="texto-clientes-nombre">{PrismicDOM.RichText.asText(person)}</p>
					<p className="text-clientes-subtitle">{PrismicDOM.RichText.asText(profession)}</p>
					<div className="div-clientes"></div>
					<p className="text-comentario-cliente">{PrismicDOM.RichText.asText(text)}</p>
				</div>
		</div>);

		return (
			<div className="background-who-we-are">
	 			<NavbarVolartech />
	 			<div className="fondo-who-we-are">
	 				<div className="content-quienes-somos-info">
	 					<div className="contentedor-titulo">
	 						<p className="text-title-who-we-are">{this.getText('title')}</p>
	 					</div>
	 					<div className="content-div-line">
	 						<div className="quienes-somos-div-text"></div>
	 					</div>
	 					<div className="content-descripcion-w-w-a">
	 						<p className="text-quienes-somos-descrip">{this.getText('text')}</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="segundo-fondo-w-w-a">
	 				<div className="content-iconos-segundo-fond">
	 					<div className="centrar-contenido-iconos otro-margen-left">
	 						<div className="icono-estadistica"></div>
	 						<p className="texto-icono">{this.getText('benefit_1')}</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2">{this.getText('benefit_text_1')}</p>
	 					</div>
	 					<div className="centrar-contenido-iconos">
	 						<div className="icono-sonido"></div>
	 						<p className="texto-icono">{this.getText('benefit_2')}</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2">{this.getText('benefit_text_2')}</p>
	 					</div>
	 					<div className="centrar-contenido-iconos otro-margen-right">
	 						<div className="icono-video"></div>
	 						<p className="texto-icono">{this.getText('benefit_3')}</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2">{this.getText('benefit_text_3')}</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="tercer-fondo-w-w-a">
	 				<div className="contenedor-texto-imagen-tercero">
	 					<div className="imagen-w-w-a-tercero"></div>
	 					<div className="contenedor-texto-third">
	 						<p className="text-third-fond">{this.getText('uav_title')}</p>
	 						<div className="div-text-line-third"></div>
	 						<p className="text-descripcion-tercero">{this.getText('uav_text')}</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="cuarto-fondo-w-w-a">
	 				<div className="contenedor-info-ideales">
 						<p className="text-ideales">{this.getText('ideals_title')}</p>
	 					<div className="div-text-line-fourth"></div>
	 					<p className="text-descripcion-cuarto">{this.getText('ideals_text')}</p>
	 				</div>
	 			</div>
	 			<div className="quinto-fondo-w-w-a">
	 				<div className="content-text-clientes">
	 					<p className="texto-clientes">{this.getText('quotes_title')}</p>
	 				</div>

	 				<div>
	 					{slides[this.state.selected]}
	 				</div>

	 				<div className="content-puntos-comentarios">
						{_(this.state.data.quotes || []).map((quote, index) =>
							<div key={index} className={(this.state.selected === index) ? "punto-comentario active" : "punto-comentario"} onClick={() => this.change_selected(index)}></div>
							)}
	 				</div>

					<div className="content-nuestro-equipo">
					 	<p className="texto-equipo-accion">{this.getText('images_title')}</p>
	 				</div>
	 				<div>
	 					<Slider images={_(this.state.data.images || []).map(({image: {url} = {}} = {}) => url)}/>
					{/* 							 
							 [
							require('../../img/fondos/man-dron.png'),
							require('../../img/fondos/man-chaleco.png'),
							require('../../img/fondos/grupo.png'),
							require('../../img/fondos/man-dron.png'),
							require('../../img/fondos/man-chaleco.png')]}/> */}
	 				</div>
	 				<div className="contenedor-interes-boton-contacto">
	 					<div className="content-info-interes">
	 						<p className="text-te-interesa">{this.getText('contact_title')}</p>
	 						<p className="text-text-interes">{this.getText('contact_text')}</p>
	 					</div>
	 					<div>
	 						<a href="/contacto" target="_blank" onClick={(event) => this.show_card(event)}>
		 						<div className="boton-contacto">
		 							<p className="text-boton-contacto">Contacto</p>
		 						</div>
	 						</a>
	 						<div className="content-mail-call">
	 							<a href={'mailto: ' + this.getItem('contact_email')}>
		 							<div className="boton-mail">
		 								<p className="text-mail-boton">Mail</p>
		 								<p className="text-mail-mail">{this.getItem('contact_email')}</p>
		 							</div>
	 							</a>
	 							<a href="tel:+573173721618">
		 							<div className="boton-llamar">
		 								<p className="text-llamar-boton">Llamar</p>
		 								<p className="text-llamar-llamar">+57 (313) 868 9045</p>
		 							</div>
	 							</a>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="linea-larga-quienes-somos"></div>
	 			<Footer />
	 			<Card ref={(card) => this.card = card} seccion={"Construccion"}/>
	 		</div>
		)
	}
}