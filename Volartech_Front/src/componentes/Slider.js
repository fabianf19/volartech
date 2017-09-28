import React, { Component } from 'react';
import './Slider.css';

const slider_container = 900;
const slide_w = slider_container/3;

export default class Slider extends Component{
	constructor(props){
		super(props);

		this.state = {
			selected : 0,
			num_slides : props.images.length
		}

		this.start_timer = this.start_timer.bind(this);
		this.decrement = this.decrement.bind(this);
		this.increment = this.increment.bind(this);
	}

	componentDidMount(){
		this.start_timer();
	}

	start_timer(){
		this.interval = setInterval(() => {
			this.increment();
		},5000);
	}

	decrement(){
		clearInterval(this.interval);

		let n = this.state.selected;
		var nuevo = -1;

		if (n - 1 < 0){
			nuevo = this.state.num_slides - 3;
		}else{
			nuevo = n - 1;
		}
		this.setState({selected : nuevo});
		this.start_timer();
	}

	increment(){
		clearInterval(this.interval);

		let n = this.state.selected;
		var nuevo = -1;

		if (n + 1 > this.state.num_slides - 3){
			nuevo = 0;
		}else{
			nuevo = n + 1;
		}
		this.setState({selected : nuevo});
		this.start_timer();
	}

	render(){

		let slides = this.props.images.map((elem, index) => {
			return <div key={index} className="slide" style={{ backgroundImage : 'url(' + elem + ')', width : slide_w }}></div>;
		});

		return (
			<div className="slider">
				<div className="slider_btn_left" onClick={() => this.decrement()}></div>
				<div className="slider_container" style={{ width : slider_container }}>
					<div className="slider_scrollable" style={{ width : this.state.num_slides * slide_w, transform : 'translateX(' + -1 * this.state.selected * slide_w + 'px)' }}>
						{slides}
					</div>
				</div>
				<div className="slider_btn_right" onClick={() => this.increment()}></div>
			</div>
		)
	}
}