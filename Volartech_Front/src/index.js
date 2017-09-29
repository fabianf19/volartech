import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './views/home/Home';
import QuienesSomos from './views/quienesSomos/QuienesSomos';
import Contacto from './views/contacto/Contacto';
import ProduccionVol from './views/produccion/produccion';
import IngenieriaVol from './views/ingenieria/ingenieria';
import ConstruccionVol from './views/construccion/construccion';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Prismic from 'prismic-javascript';
// import request from 'browser-request';
// import _ from 'underscore'
// class Prismic {
// 	constructor(apiEndpoint) {
// 		this.apiEndpoint = apiEndpoint
// 	}
// 	static getApi(apiEndpoint) {
// 		return Promise.resolve(new Prismic(apiEndpoint))
// 	}
// 	getSingle(query) {
// 		console.log(this.apiEndpoint + `/documents/search?ref=MASTER_REF&q=[at(document.type,"${query}")]`)
// 		return this.search(query).then((response) => {
// 			console.log(response)
// 		})
// 	}
// 	search(query) {
// 		return new Promise((resolve, reject) => {
// 			request({
// 				method: 'GET',
// 				url: this.apiEndpoint + `/documents/search?ref=MASTER_REF&q=[[at(document.type,"${query}")]]`,
// 				oauth:	{
// 					callback: 'localhost',
// 					consumer_key: 'Wc3FbykAABT2j5kL',
// 					consumer_secret: '664a0fca547e787b7db49d2972a4a32a'
// 				}
// 			}, (a, b, c) => {
// 				if (a) {
// 					console.log(a)
// 					reject(a)
// 				} else {
// 					resolve()
// 				}
// 			})
// 		})
// 	}
// }
let apiEndpoint = "https://volartech.prismic.io/api/v2";

Prismic.getApi(apiEndpoint).then((api) => {
	window.PrismicApi = api;
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
});

registerServiceWorker();
