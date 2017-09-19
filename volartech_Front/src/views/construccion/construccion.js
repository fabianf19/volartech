import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './construccion.css'

export default class ConstruccionVol extends Component{
	render(){
		return (
			<div className="background-construccion">
		 		<NavbarVolartech />
	 			<div className="first-fond-construccion">
	 				<div className="content-text-dron-const">
		 				<div>
		 					<div>
		 						<p className="text-title-const">Construcción</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-const">Captura al instante el proceso de tu obra.</p>
		 					</div>
		 					{/*<div className="quienes-somos-div-text"></div>*/}
		 				</div>
		 				<div className="imagen-dron-const"></div>
	 				</div>
	 			</div>
	 			<div className="second-fond-construccion">
	 				<div className="content-text-descripcion-cons">
 						<p className="text-descripcion-construccion">Impulse sus ventas a través de herramientas de monitoreo para sus proyectos de construcción e infraestructura y la mejor forma de mostrar su casa, apartamento o empresa por medio de un enlace que sus clientes podrán observar desde su celular o navegador de manera precisa las características de su proyecto en realidad virtual.</p>
 					</div>
	 			</div>
	 			<div className="third-fond-construccion">
	 				<div></div>
	 			</div>
	 			<div className="fourth-fond-construccion">
	 				
	 			</div>
	 			<div className="fifth-fond-construccion">
	 				
	 			</div>
	 			<Footer />
	 		</div>
		)
	}
}