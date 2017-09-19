import React, { Component } from 'react';
import NavbarVolartech from '../../inc/navbarInside';
import Footer from '../../inc/Footer';
import './ingenieria.css'

export default class IngenieriaVol extends Component{
	render(){
		return (
			<div className="background-ingenieria">
		 		<NavbarVolartech />
	 			<div className="first-fond-ingenieria">
	 				<div className="content-text-dron-ing">
		 				<div>
		 					<div>
		 						<p className="text-title-ing">Ingeniería</p>
		 					</div>
		 					<div>
		 						<p className="sub-title-ing">Drones de ultima tecnologia.</p>
		 					</div>
		 					{/*<div className="quienes-somos-div-text"></div>*/}
		 				</div>
		 				<div className="imagen-dron-ing"></div>
	 				</div>
	 			</div>
	 			<div className="second-fond-ingenieria">
	 				<div className="content-text-descripcion">
 						<p className="text-descripcion-produccion">Operamos sistemas UAV/Drone multirotor y ala fija para empresas que buscan aumentar su eficiencia en recopilación de datos y proporcionar datos topográficos de mayor precisión, para trabajos de modelamiento, diseño e ingeniería.</p>
 					</div>
	 			</div>
	 			<div className="third-fond-ingenieria">
	 				<div></div>
	 			</div>
	 			<div className="fourth-fond-ingenieria">
	 				
	 			</div>
	 			<div className="fifth-fond-ingenieria">
	 				
	 			</div>
	 			<Footer />
	 		</div>
		)
	}
}