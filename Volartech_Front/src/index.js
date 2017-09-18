import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import HelloWorld from './views/HelloWorld';

import Home from './views/home/Home';
import QuienesSomos from './views/quienesSomos/QuienesSomos';
import Contacto from './views/contacto/Contacto';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
	<Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/quienes" component={QuienesSomos}/>
			<Route exact path="/contacto" component={Contacto}/>
		</div>
	</Router>),
document.getElementById('root')
);


registerServiceWorker();
