import React, { Component } from 'react';
import './navbarInside.css';

export default class NavbarVolartech extends Component{
	render(){
		return (
			<div>
	 			<div className="contenedor-navbar-inside" layout="row" layout-align="center">
		 			<div className="navbar-volartech-inside" layout-gt-sm="row" layout="column" layout-align-gt-sm="center">
		 				<a href="/">
		 					<div className="logo-navbar-volartech-inside"></div>
		 				</a>
						<div flex=""></div>
		 				<div className="content-select-service">
			 				<a href="/quienes">
				 				<div className="contenedor-textos-navb-inside">
				 					<p className="text-navbar-volartech-inside">Quienes Somos</p>
				 				</div>
			 				</a>
			 				<a href="/produccion">
			 				<div className="contenedor-textos-navb-inside">
			 					<p className="text-navbar-volartech-inside">Produccion</p>
			 				</div>
			 				</a>
			 				<a href="/construccion">
				 				<div className="contenedor-textos-navb-inside">
				 					<p className="text-navbar-volartech-inside">Construccion</p>
				 				</div>
			 				</a>
			 				<a href="/ingenieria">
				 				<div className="contenedor-textos-navb-inside">
				 					<p className="text-navbar-volartech-inside">Ingenieria</p>
				 				</div>
			 				</a>
			 				{/* <a href="/contacto" hide-xs="" hide-sm="">
				 				<div className="boton-contact-v-inside">
				 					<p className="text-navbar-volartech-inside">Contacto</p>
				 				</div>
			 				</a> */}
		 				</div>
		 			</div>
		 		</div>
 			</div>
		)
	}
}