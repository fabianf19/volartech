import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './produccion.css'
export default class ProduccionVol extends Component{
	render(){
		return (
			<div className="background-produccion">
	 			<NavbarVolartech />
	 			<div className="first-fond">
	 				<div className="content-text-dron">
		 				<div>
		 					<div>
		 						<p className="text-title-produccion">Producción de video</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-produccion">Crea una historia para engrandecer su empresa.</p>
		 					</div>
		 					{/*<div className="quienes-somos-div-text"></div>*/}
		 				</div>
		 				<div className="imagen-dron"></div>
	 				</div>
	 			</div>
	 			<div className="second-fond">
	 				<div className="content-text-descripcion">
 						<p className="text-descripcion-produccion">Realizamos videos corporativos y publicitarios de gran calidad, aplicando las última tecnología, innovación y estándares del lenguaje audiovisual.  Te entregamos el mejor resultado para tu marca, negocio o proyecto.</p>
 					</div>
	 			</div>
	 			<div className="third-fond">
	 				<div></div>
	 			</div>
	 			<div className="fourth-fond">
	 				
	 			</div>
	 			<div className="fifth-fond">
	 				
	 			</div>
	 			<div className="sixth-fond">
	 				
	 			</div>
	 			<Footer />
	 		</div>
		)
	}
}