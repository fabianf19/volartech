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
	 				
	 			</div>
	 			<Footer />
	 		</div>
		)
	}
}