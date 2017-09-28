import React, { Component } from 'react';
import Footer from '../../inc/Footer';
import './Home.css';

let bg1 = require('../../img/fondos/imagen-inicio-volartech.png');
let bg2 = require('../../img/fondos/imagen-page-prod.png');
let bg3 = require('../../img/fondos/plano-aereo.png');
let bg4 = require('../../img/fondos/imagen-page-ing.png');

export default class HelloWorld extends Component{
	constructor(props){
		super(props);

		this.state = {
			'selected' : 0
		}
	}

	componentDidMount(){
		{/*this.id_interval = setInterval(() => {
			let anterior = this.state.selected;
			var nuevo = -1;

			if (anterior + 1 > 3){
				nuevo = 0;
			}else{
				nuevo = anterior + 1;
			}

			this.setState({selected : nuevo});			
		},9000);*/}
	}

	render(){

		let secciones = [
			<div className="contentedor-texto-perspectiva">
				<p className="volartech-title">Conoce el mundo</p>
				<p className="volartech-sub-title1">desde otra</p>
				<p className="volartech-sub-title1">perspectiva</p>
				<p className="volartech-sub-title2">Nosotros te lo mostramos!</p>
				<div className="content-play">
					<a href="https://www.youtube.com/watch?v=EUzyY2Z5fCs" target="_blank">
						<div className="icono-play-volartech"> </div>
					</a>
					<p className="text-play">Play Video</p>
				</div>
			</div>,
			<div className="contentedor-texto-produccion">
				<p className="volartech-title">Produccion de video</p>
				<p className="volartech-sub-title2-prod">Hacemos que tus historias sean reales.</p>
				<p className="volartech-description-prod">Generamos emociones, innovando y haciendo realidad tus ideas para que se conecten con tu marca, introduciendo todo el empeño y corazón a nuestra producción audiovisual.</p>
				<div className="content-play">
					<a href="/produccion" target="_blank">
						<div className="boton-product-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>,
			<div className="contentedor-texto-construccion">
				<p className="volartech-title-construccion">CONSTRUCCIÓN</p>
				<p className="volartech-sub-title2-const">Siga paso a paso sus proyectos.</p>
				<p className="volartech-description-ing">Fotografía y vídeo aéreo, time-lapse y realidad virtual enfocada a la construcción, infraestructura y arquitectura a nivel nacional e internacional. Gestione de forma innovadora su empresa.</p>
				<div className="content-play">
					<a href="/construccion" target="_blank">
						<div className="boton-construccion-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>,

			<div className="contentedor-texto-ingenieria">
				<p className="volartech-title">Ingeniería</p>
				<p className="volartech-sub-title2-prod">Líderes en adquisición y procesamiento de datos.</p>
				<p className="volartech-description-ing">A través de nuestros equipos de última tecnología proporcionamos datos de alta calidad y factibles, que ayudan a aumentar la eficiencia y la toma de decisiones de su empresa. </p>
				<div className="content-play">
					<a href="/ingenieria" target="_blank">
						<div className="boton-ingenieria-page"> 
							<p className="text-ver-mas">Ver más</p>
						</div>
					</a>
					
				</div>
			</div>
		];		

		let bg = (this.state.selected == 0) ? bg1 : (this.state.selected == 1) ? bg2 : (this.state.selected == 2) ? bg3 : bg4;

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
				 					<div className={(this.state.selected == 0) ? "circulo-cambio active" : "circulo-cambio"} onClick={() => this.setState({selected : 0})}></div>
				 					<div className={(this.state.selected == 1) ? "circulo-cambio active2" : "circulo-cambio"} onClick={() => this.setState({selected : 1})}></div>
				 					<div className={(this.state.selected == 2) ? "circulo-cambio active3" : "circulo-cambio"} onClick={() => this.setState({selected : 2})}></div>
				 					<div className={(this.state.selected == 3) ? "circulo-cambio active4 otro-margen-puntos" : "circulo-cambio otro-margen-puntos"} onClick={() => this.setState({selected : 3})}></div>
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