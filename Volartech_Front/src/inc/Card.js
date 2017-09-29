import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component{
	constructor(props){
		super(props);

		this.state = {
			'show' : false
		}

		this.show_card = this.show_card.bind(this);
		this.hide_card = this.hide_card.bind(this);
		this.click_event = this.click_event.bind(this);
	}

	show_card(){
		this.setState({show : true});
	}

	hide_card(){
		this.setState({show : false});	
	}

	click_event(event){
		// console.log(event.target.id);
		if (event.target.id === 'fondo')
			this.hide_card();

	}

	render(){

		if (!this.state.show)
			return null;

		var seccion = (this.props.seccion) ? this.props.seccion : "Elegir";

		return (
			<div className="card_back" onClick={(event) => this.click_event(event)} id="fondo">
				<div className="card_container">
					<div className="dropdown">
						<button className="dropbtn">{seccion}</button>
						<div className="dropdown-content">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}