import React, { Component } from 'react';
import './navbarInside.css';

export default class NavbarVolartech extends Component{
	constructor (props) {
		super(props);
		this.state = {
			...props
		};
	}
	render(){
		return (
			<div>
	 			<div className="contenedor-navbar-inside" layout="row" layout-align="center">
		 			<div className="navbar-volartech-inside" layout-gt-sm="row" layout="column" layout-align-gt-sm="center" layout-align="start stretch">
		 				<a href="/" layout="row" layout-align="center">
		 					<div className="logo-navbar-volartech-inside"></div>
		 				</a>
						<div flex=""></div>
		 				<div className="content-select-service" layout="row" layout-align="space-around center">
			 				<a href="/quienes" flex="" className="padding-quarter">
				 				<div className="contenedor-textos-navb-inside">
				 					<p className="text-navbar-volartech-inside" style={{fontWeight: this.props.current === 0 ? 800 : 400}}>Quiénes Somos</p>
				 				</div>
			 				</a>
			 				<a href="/produccion" flex="" className="padding-quarter">
			 				<div className="contenedor-textos-navb-inside">
			 					<p className="text-navbar-volartech-inside" style={{fontWeight: this.props.current === 1 ? 800 : 400}}>Producción</p>
			 				</div>
			 				</a>
			 				<a href="/construccion" flex="" className="padding-quarter">
				 				<div className="contenedor-textos-navb-inside">
				 					<p className="text-navbar-volartech-inside" style={{fontWeight: this.props.current === 2 ? 800 : 400}}>Construcción</p>
				 				</div>
			 				</a>
			 				<a href="/ingenieria" flex="" className="padding-quarter">
				 				<div className="contenedor-textos-navb-inside">
				 					<p className="text-navbar-volartech-inside" style={{fontWeight: this.props.current === 3 ? 800 : 400}}>Ingeniería</p>
				 				</div>
			 				</a>
			 				<a href="/contacto" hide-xs="" hide-sm="" flex="" className="padding-quarter">
				 				<div className="boton-contact-v-inside padding-v-quarter padding-h">
				 					<p className="text-navbar-volartech-inside">Contacto</p>
				 				</div>
			 				</a>
		 				</div>
		 			</div>
		 		</div>
 			</div>
		)
	}
}