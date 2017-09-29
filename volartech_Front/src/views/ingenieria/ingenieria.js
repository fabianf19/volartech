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
		 				<div className="content-texto-up">
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
	 				<div>
	 					<div className="content-text-dron-ingenieria">
		 					<div>
		 						<div className="img-droncito"></div>
		 					</div>
		 					<div className="size-responsive-content">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria">Topografía LiDAR</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="conetenedor-subtitulos">
		 							<p className="subtitle-text-ing">Drone / UAV</p>
		 						</div>
		 						<div className="content-info-ing">
		 							<p className="text-info-ing">- Perfecto para áreas pequeñas o de difícil acceso.</p>
		 							<p className="text-info-ing">- Multirotor confiable y robusto de última tecnología.</p>
		 							<p className="text-info-ing">- Levantamientos topográficos con lidar, permite generar modelos digitales de terreno y elevación con gran densidad de puntos.</p>
		 							<p className="text-info-ing">- Hasta 300,000 puntos por segundo.</p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fourth-fond-ingenieria">
	 				<div>
	 					<div className="content-text-dron-ingenieria">
		 					<div>
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria">Topografía LiDAR</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="conetenedor-subtitulos">
		 							<p className="subtitle-text-ing">Movil</p>
		 						</div>
		 						<div className="content-info-ing">
		 							<p className="text-info-ing">Nubes de puntos e imágenes con precisión desde un vehículo +-10 crm. Ideal para levantamiento de elementos lineales como carreteras, vías férreas, etc.</p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="fifth-fond-ingenieria">
	 				<div>
	 					<div className="content-text-dron-ingenieria">
		 					<div>
		 						<div className="img-droncito-2"></div>
		 					</div>
		 					<div className="size-responsive-content">
		 						<div className="contenedor-title-ingenieria">
		 							<p className="text-title-ingenieria">Topografía Aérea</p>
		 						</div>
		 						<div className="division-primeros-textos-ing"></div>
		 						<div className="content-info-ing">
		 							<p className="text-info-ing">- Modelos digitales de terreno (DTM)</p>
		 							<p className="text-info-ing">- Modelo digital de superficie (MSM)</p>
		 							<p className="text-info-ing">- Nube de puntos georeferenciada.</p>
		 							<p className="text-info-ing">- Ortofotografías de alta resolución georeferenciada.</p>
		 						</div>
		 					</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="background-ing-white">
	 				<div className="content-text-nuestrotrabajo-ing">
	 					<p className="text-nuestro-trabajo-ing">Algo de nuestro trabajo</p>
	 				</div>
	 				<div className="content-text-muestras-trabajo-ing">
	 					<p className="text-muestras-trabajo-ing">Te mostramos a continuación algunos de nuestros trabajos más recientes correspondiente a INGENIERÍA.  </p>
	 				</div>
	 				<div className="content-img-ing">
	 					<div className="content-1-img">
	 						<div className="img-1"></div>
	 						<p className="text-fecha-img">Lorem ipsum / 00-00-2017 Cliente: Empresas del Tal y Cual</p>
	 					</div>
	 					<div className="content-2-img">
	 						<div className="img-2"></div>
	 						<p className="text-fecha-img">Lorem ipsum / 00-00-2017 Cliente: Empresas del Tal y Cual</p>
	 					</div>
	 					<div className="content-3-img">
	 						<div className="img-3"></div>
	 						<p className="text-fecha-img">Lorem ipsum / 00-00-2017 Cliente: Empresas del Tal y Cual</p>
	 					</div>
	 				</div>
	 				<div className="big-content-ver-ing">
		 				<div className="contenedor-ver-mas-ing">
	 						<p className="text-ver-mas-ing">Ver mas</p>
	 					</div>
 					</div>
	 				<div className="contenedor-interes-boton-contacto-ing">
	 					<div className="content-info-interes-ing">
	 						<p className="text-te-interesa-ing">Te interesa?</p>
	 						<p className="text-text-interes-ing">Si te interesa alguno de nuestros servicios no dudes en ponerte en contacto.</p>
	 					</div>
	 					<div>
	 						<a href="/contacto" target="_blank">
		 						<div className="boton-cotizacion-ing">
		 							<p className="text-boton-cotizacion-ing">Cotizar servicio</p>
		 						</div>
	 						</a>
	 						<div className="content-mail-call-ing">
	 							<a href="mailto:contacto@volartech.com">
		 							<div className="boton-mail-ing">
		 								<p className="text-mail-boton-ing">Mail</p>
		 								<p className="text-mail-mail-ing">contacto@volartech.com.co</p>
		 							</div>
	 							</a>
	 							<a href="tel:+573173721618">
		 							<div className="boton-llamar-ing">
		 								<p className="text-llamar-boton-ing">Llamar</p>
		 								<p className="text-llamar-llamar-ing">+57 (313) 868 9045</p>
		 							</div>
	 							</a>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 			<div className="linea-larga-ing"></div>
	 			<Footer />
	 		</div>
		)
	}
}