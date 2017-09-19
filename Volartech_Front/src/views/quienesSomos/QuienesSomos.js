import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './QuienesSomos.css';

export default class QuienesSomos extends Component{
	render(){
		return (
			<div className="background-who-we-are">
	 			<NavbarVolartech />
	 			<div className="fondo-who-we-are">
	 				<div>
	 					<div>
	 						<p className="text-title-who-we-are">Quienes Somos</p>
	 					</div>
	 					<div className="quienes-somos-div-text"></div>
	 					<div>
	 						<p className="text-quienes-somos-descrip">Empresa conformada por profesionales altamente capacitados con amplia experiencia en la dirección de proyectos de diferente índole y especialmente aquellos vinculados a los servicios de topografia lidar, realidad virtual, fotografia y video terrestre y aéreo puesta al servicio de la ingenieria  y construcción. Además incursionamos en la producción de medios audiovisuales, área en la cual sobresalimos por la innovación y la tecnología utilizada.</p>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="segundo-fondo-w-w-a">
	 				
	 			</div>
	 			<div className="tercer-fondo-w-w-a">
	 				<div className="contenedor-texto-imagen-tercero">
	 					<div className="imagen-w-w-a-tercero"></div>
	 				</div>
	 			</div>
	 			<div className="cuarto-fondo-w-w-a">
	 				
	 			</div>
	 			<Footer />
	 		</div>
		)
	}
}