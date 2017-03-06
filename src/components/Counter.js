import React, { Component } from 'react'

class Counter extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		numsOne: 1,
    		operators: '',
    		numsTwo: 1,
    		sum: 0
    	};
    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleInputChange(event) {
    	const target = event.target;
    	const value = target.value;
    	const name = target.name;

    	this.setState({
    		[name]: value
    	})
  	}

  	handleSubmit(event) {
  		const n1 = Number(this.state.numsOne);
  		const n2 = Number(this.state.numsTwo);

  		var operator = this.state.operators;

  		var sum = 0;
  			if (operator === "+") {
  				sum = n1 + n2;
  			} else if (operator === "*") {
  				sum = n1 * n2;
  			} else if (operator === "-") {
  				sum = n1 - n2;
  			} else if (operator === "/") {
  				sum = n1 / n2;
  			} 
  			
    	alert(sum);
    	event.preventDefault();
  	}

	
	render(){
		console.log( this.props )
		return (
			<div>
			<form class="form-inline" onSubmit={this.handleSubmit}>
			<input type="text" 
				class="form-control mb-2 mr-sm-2 mb-sm-0" 
				placeholder="1" 
				name="numsOne"
				value={this.state.numsOne} 
				onChange={this.handleInputChange} />

			<select class="custom-select mb-2 mr-sm-2 mb-sm-0"
					name="operators"
					value={this.state.operators} onChange={this.handleInputChange}>
    			<option selected> Operator </option>
    			<option value="+"> + </option>
    			<option value="-"> - </option>
    			<option value="*"> * </option>
    			<option value="/"> / </option>
  			</select>

			<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="1"
					name="numsTwo" 
					value={this.state.numsTwo} 
					onChange={this.handleInputChange}/>
			 <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
			{/* <label class="mr-sm-2"> <h1 id ="sum">{this.state.sum}</h1></label> */}

			</form>
				{/*
				<button 
					className="btn btn-primary" 
					onClick={ this.props.onIncrement }> 
					点我加1 
				</button>
				<button 
					className="btn btn-success"  
					onClick={ this.props.onDecrement }> 
					点我减1 
				</button>
				*/}
			</div>

		)
	}
}

Counter.propTypes = {
	
}
export default Counter
