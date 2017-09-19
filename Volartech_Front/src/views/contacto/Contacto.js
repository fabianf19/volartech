import React, { Component } from 'react';
import './Contacto.css';

import Slider from '../../componentes/Slider';

export default class Contacto extends Component{
	render(){
		return (
			<div>
				<Slider images={[
					'https://s-media-cache-ak0.pinimg.com/originals/4d/25/19/4d2519d9a55ff617ebe23200f00104eb.jpg',
					'https://s-media-cache-ak0.pinimg.com/originals/d7/4f/6b/d74f6bc80da41c7737388fa37c1a4f62.jpg',
					'https://s-media-cache-ak0.pinimg.com/originals/5f/71/38/5f71381c133e3cb667e430f57f90f923.jpg',
					'https://s-media-cache-ak0.pinimg.com/originals/4d/25/19/4d2519d9a55ff617ebe23200f00104eb.jpg',
					'https://s-media-cache-ak0.pinimg.com/originals/4d/25/19/4d2519d9a55ff617ebe23200f00104eb.jpg']}
				/>
			</div>
		)
	}
}