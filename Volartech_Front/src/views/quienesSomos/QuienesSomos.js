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
					<p className="text-comentario-cliente opacity5">{PrismicDOM.RichText.asText(text)}</p>
				</div>
		</div>);

		return (
			<div className="background-who-we-are">
	 			<NavbarVolartech current={0} />
	 			<div className="fondo-who-we-are" layout="row" layout-align="center center">
					<div className="container padding" layout="column" layout-align="start start">
						<div className="content-quienes-somos-info">
							<div className="contentedor-titulo">
								<p className="text-title-who-we-are margin-v padding-v aller-display">{this.getText('title')}</p>
							</div>
							<div className="content-div-line">
								<div className="quienes-somos-div-text"></div>
							</div>
							<div className="content-descripcion-w-w-a padding-v margin-v container-half opacity5">
								<p className="text-quienes-somos-descrip">{this.getText('text')}</p>
							</div>
						</div>
					</div>
	 			</div>
				<div className="icon-wrapper" layout="row" layout-align="center">
					<img src={require('../../img/icos/triangle_up_black.png')} alt="" />
				</div>
	 			<div className="segundo-fondo-w-w-a" layout="row" layout-align="center">
	 				<div className="content-iconos-segundo-fond padding" layout-gt-sm="row" layout="column">
	 					<div className="centrar-contenido-iconos" layout="column">
	 						<div className="icono-tecnologia"></div>
	 						<p className="texto-icono">{this.getText('benefit_1')}</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2 opacity5">{this.getText('benefit_text_1')}</p>
	 					</div>
	 					<div className="centrar-contenido-iconos" layout="column">
	 						<div className="icono-creatividad"></div>
	 						<p className="texto-icono">{this.getText('benefit_2')}</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2 opacity5">{this.getText('benefit_text_2')}</p>
	 					</div>
	 					<div className="centrar-contenido-iconos" layout="column">
	 						<div className="icono-personalizamos"></div>
	 						<p className="texto-icono">{this.getText('benefit_3')}</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2 opacity5">{this.getText('benefit_text_3')}</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="cuarto-fondo-w-w-a" layout="row" layout-align="center center">
	 				<div flex="" className="container padding margin-v" layout="column" layout-align="start end">
 						<p className="text-ideales aller bold">{this.getText('ideals_title')}</p>
	 					<div className="div-text-line-fourth"></div>
	 					<p className="text-descripcion-cuarto ideals-text opacity5">{this.getText('ideals_text')}</p>
	 				</div>
	 			</div>
				<div className="black-background" layout="row" layout-align="center center">
	 				<div flex="" className="container padding margin-v" layout="column" layout-align="start center">
 						<p className="quote-text aller bold center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum odio eleifend viverra placerat. </p>
	 				</div>
	 			</div>
				<div className="icon-wrapper" layout="row" layout-align="center">
					<img src={require('../../img/icos/triangle_up_white.png')} alt="" />
				</div>
	 			<div className="quinto-fondo-w-w-a padding-h" layout="column" layout-align="start center">
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
					<div className="md-divider margin-v-double"></div>
					<div className="content-nuestro-equipo">
					 	<p className="texto-equipo-accion">{this.getText('images_title')}</p>
	 				</div>
	 				<div>
						{
							this.state.data.images ? <Slider images={_(this.state.data.images || []).map(({image: {url} = {}} = {}) => url)}/> : ''
						}
									
	 				</div>
				</div>
				<div layout="row" layout-align="center center" className="quienes-contact">
					<div className="contenedor-interes-boton-contacto margin-v padding container" layout="column" layout-gt-sm="row" layout-align-gt-sm="center center">
						<div className="content-info-interes padding-v" flex="">
							<p className="text-te-interesa">{this.getText('contact_title')}</p>
							<p className="text-text-interes container-half opacity5">{this.getText('contact_text')}</p>
						</div>
						<div layout="column" layout-align="start stretch">
							<a href="/contacto" target="_blank" onClick={(event) => this.show_card(event)}>
								<div className="boton-contacto">
									<p className="text-boton-contacto">Contacto</p>
								</div>
							</a>
							<div layout="row" className="content-mail-call">
								<a flex="" href={'mailto: ' + this.getItem('contact_email')}>
									<div className="boton-mail">
										<p className="text-mail-boton">Mail</p>
										<p className="text-mail-mail" hide-xs="">{this.getItem('contact_email')}</p>
									</div>
								</a>
								<a flex="" href="tel:+573173721618">
									<div className="boton-llamar">
										<p className="text-llamar-boton">Llamar</p>
										<p className="text-llamar-llamar" hide-xs="">+57 (313) 868 9045</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
	 			<div className="linea-larga-quienes-somos"></div>
	 			<Footer />
	 			<Card ref={(card) => this.card = card} seccion={"General"}/>
	 		</div>
		)
	}
}