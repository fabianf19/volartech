import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import HelloWorld from './views/HelloWorld';

import Home from './views/home/Home';
import QuienesSomos from './views/quienesSomos/QuienesSomos';
import Contacto from './views/contacto/Contacto';
import ProduccionVol from './views/produccion/produccion';
import IngenieriaVol from './views/ingenieria/ingenieria';
import ConstruccionVol from './views/construccion/construccion';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
	<Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/quienes" component={QuienesSomos}/>
			<Route exact path="/contacto" component={Contacto}/>
			<Route exact path="/produccion" component={ProduccionVol}/>
			<Route exact path="/ingenieria" component={IngenieriaVol}/>
			<Route exact path="/construccion" component={ConstruccionVol}/>
		</div>
	</Router>),
document.getElementById('root')
);


registerServiceWorker();
