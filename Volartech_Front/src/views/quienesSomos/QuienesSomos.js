import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './QuienesSomos.css';
import Slider from '../../componentes/Slider';

export default class QuienesSomos extends Component{
	constructor(props){
		super(props);

		this.state = {
			selected : 0,
			num_slides : 4
		}

		this.start_timer = this.start_timer.bind(this);
		this.decrement = this.decrement.bind(this);
		this.increment = this.increment.bind(this);
		this.change_selected = this.change_selected.bind(this);
	}

	componentDidMount(){
		this.start_timer();
	}

	change_selected(index){
		clearInterval(this.interval);
		this.setState({selected : index});
		this.start_timer();
	}

	start_timer(){
		this.interval = setInterval(() => {
			this.increment();
		},5000);
	}

	decrement(){
		clearInterval(this.interval);

		let n = this.state.selected;
		var nuevo = -1;

		if (n - 1 < 0){
			nuevo = this.state.num_slides - 1;
		}else{
			nuevo = n - 1;
		}
		this.setState({selected : nuevo});
		this.start_timer();
	}

	increment(){
		clearInterval(this.interval);

		let n = this.state.selected;
		var nuevo = -1;

		if (n + 1 > this.state.num_slides - 3){
			nuevo = 0;
		}else{
			nuevo = n + 1;
		}
		this.setState({selected : nuevo});
		this.start_timer();
	}

	render(){

		var slides = [
			<div className="content-comentario-cliente">
				<div className="quienes-nosotros-comillas"></div>
				<div>
					<p className="texto-clientes-nombre">Carlos Perry 1</p>
					<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
					<div className="div-clientes"></div>
					<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
				</div>
			</div>,
			<div className="content-comentario-cliente">
				<div className="quienes-nosotros-comillas"></div>
				<div>
					<p className="texto-clientes-nombre">Carlos Perry 2</p>
					<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
					<div className="div-clientes"></div>
					<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
				</div>
			</div>,
			<div className="content-comentario-cliente">
				<div className="quienes-nosotros-comillas"></div>
				<div>
					<p className="texto-clientes-nombre">Carlos Perry 3</p>
					<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
					<div className="div-clientes"></div>
					<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
				</div>
			</div>,
			<div className="content-comentario-cliente">
				<div className="quienes-nosotros-comillas"></div>
				<div>
					<p className="texto-clientes-nombre">Carlos Perry 4</p>
					<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
					<div className="div-clientes"></div>
					<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
				</div>
			</div>
		];

		return (
			<div className="background-who-we-are">
	 			<NavbarVolartech />
	 			<div className="fondo-who-we-are">
	 				<div>
	 					<div className="contentedor-titulo">
	 						<p className="text-title-who-we-are">Quienes Somos</p>
	 					</div>
	 					<div className="content-div-line">
	 						<div className="quienes-somos-div-text"></div>
	 					</div>
	 					<div className="content-descripcion-w-w-a">
	 						<p className="text-quienes-somos-descrip">Empresa conformada por profesionales altamente capacitados con amplia experiencia en la dirección de proyectos de diferente índole y especialmente aquellos vinculados a los servicios de topografia lidar, realidad virtual, fotografia y video terrestre y aéreo puesta al servicio de la ingenieria  y construcción. Además incursionamos en la producción de medios audiovisuales, área en la cual sobresalimos por la innovación y la tecnología utilizada.</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="segundo-fondo-w-w-a">
	 				<div className="content-iconos-segundo-fond">
	 					<div className="centrar-contenido-iconos otro-margen-left">
	 						<div className="icono-estadistica"></div>
	 						<p className="texto-icono">Beneficio 1</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut laoreet nulla. </p>
	 					</div>
	 					<div className="centrar-contenido-iconos">
	 						<div className="icono-sonido"></div>
	 						<p className="texto-icono">Beneficio 2</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut laoreet nulla. </p>
	 					</div>
	 					<div className="centrar-contenido-iconos otro-margen-right">
	 						<div className="icono-video"></div>
	 						<p className="texto-icono">Beneficio 3</p>
	 						<div className="div-line-icons"></div>
	 						<p className="texto-icono-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut laoreet nulla. </p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="tercer-fondo-w-w-a">
	 				<div className="contenedor-texto-imagen-tercero">
	 					<div className="imagen-w-w-a-tercero"></div>
	 					<div className="contenedor-texto-third">
	 						<p className="text-third-fond">UAV Drones</p>
	 						<div className="div-text-line-third"></div>
	 						<p className="text-descripcion-tercero">Implementamos equipos y tecnología de punta en todos nustros proceso con el fin de obtener el mejor resultado.</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="cuarto-fondo-w-w-a">
	 				<div className="contenedor-info-ideales">
 						<p className="text-ideales">Nuestros Ideales</p>
	 					<div className="div-text-line-fourth"></div>
	 					<p className="text-descripcion-cuarto">Creemos en una diversa gama de personal para traer habilidades creativas, pensamientos e ideas a nuestros proyectos. Estamos con lo mejor de lo mejor a través de cada paso conforme al flujo de trabajo de producción. Nos asociamos con productores, cineastas, directores de fotografía, operadores de cámaras, ingenieros, editores de vídeo y artistas de efectos visuales para mantener el más alto nivel de valor de producción en todos nuestros proyectos.</p>
	 				</div>
	 			</div>
	 			<div className="quinto-fondo-w-w-a">
	 				<div className="content-text-clientes">
	 					<p className="texto-clientes">Lo que piensan nuestros clientes</p>
	 				</div>

	 				<div>
	 					{slides[this.state.selected]}
	 				</div>

	 				{/*<div className="content-comentario-cliente">
	 					<div className="quienes-nosotros-comillas"></div>
	 					<div>
	 						<p className="texto-clientes-nombre">Carlos Perry</p>
	 						<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
	 						<div className="div-clientes"></div>
	 						<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
	 					</div>
	 				</div>*/}

	 				<div className="content-puntos-comentarios">
	 					<div className={(this.state.selected == 0) ? "punto-comentario active" : "punto-comentario"} onClick={() => this.change_selected(0)}></div>
	 					<div className={(this.state.selected == 1) ? "punto-comentario active" : "punto-comentario"} onClick={() => this.change_selected(1)}></div>
	 					<div className={(this.state.selected == 2) ? "punto-comentario active" : "punto-comentario"} onClick={() => this.change_selected(2)}></div>
	 					<div className={(this.state.selected == 3) ? "punto-comentario active" : "punto-comentario"} onClick={() => this.change_selected(3)} id="ultimo-punto-coment"></div>
	 				</div>

	 				<div>
	 					<p className="texto-equipo-accion">Nuestro equipo en accion</p>
	 				</div>
	 				<div>
	 					<Slider images={[
							require('../../img/fondos/man-dron.png'),
							require('../../img/fondos/man-chaleco.png'),
							require('../../img/fondos/grupo.png'),
							require('../../img/fondos/man-dron.png'),
							require('../../img/fondos/man-chaleco.png')]}
						/>
	 				</div>
	 			</div>
	 			<Footer />
	 		</div>
		)
	}
}