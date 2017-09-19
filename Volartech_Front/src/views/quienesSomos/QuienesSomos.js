import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './QuienesSomos.css';
import Slider from '../../componentes/Slider';

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
	 				<div className="content-comentario-cliente">
	 					<div className="quienes-nosotros-comillas"></div>
	 					<div>
	 						<p className="texto-clientes-nombre">Carlos Perry</p>
	 						<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
	 						<div className="div-clientes"></div>
	 						<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
	 						<div className="content-puntos-comentarios">
			 					<div className="punto-comentario active"></div>
			 					<div className="punto-comentario"></div>
			 					<div className="punto-comentario"></div>
			 					<div className="punto-comentario" id="ultimo-punto-coment"></div>
			 				</div>
	 					</div>
	 				</div>
	 				{/*<div className="content-comentario-cliente">
	 					<div className="quienes-nosotros-comillas"></div>
	 					<div>
	 						<p className="texto-clientes-nombre">Carlos Perry</p>
	 						<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
	 						<div className="div-clientes"></div>
	 						<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
	 					</div>
	 				</div>
	 				<div className="content-comentario-cliente">
	 					<div className="quienes-nosotros-comillas"></div>
	 					<div>
	 						<p className="texto-clientes-nombre">Carlos Perry</p>
	 						<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
	 						<div className="div-clientes"></div>
	 						<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
	 					</div>
	 				</div>
	 				<div className="content-comentario-cliente">
	 					<div className="quienes-nosotros-comillas"></div>
	 					<div>
	 						<p className="texto-clientes-nombre">Carlos Perry</p>
	 						<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
	 						<div className="div-clientes"></div>
	 						<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
	 					</div>
	 				</div>
	 				<div className="content-comentario-cliente">
	 					<div className="quienes-nosotros-comillas"></div>
	 					<div>
	 						<p className="texto-clientes-nombre">Carlos Perry</p>
	 						<p className="text-clientes-subtitle">Gerente Comercial / Constructora Capital Bogota SAS</p>
	 						<div className="div-clientes"></div>
	 						<p className="text-comentario-cliente">Volartech ha sido nuestro proveedor de videos y fotografías aceras para varios proyectos. Siempre cumpliéndonos con calidad y compromiso; reflejando su seriedad y profesionalismo. </p>
	 					</div>
	 				</div>*/}
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