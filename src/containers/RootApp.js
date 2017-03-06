import React, { Component } from 'react'
import { connect }  from 'react-redux'

import Counter from '../components/Counter'


const mapStateToProps = ( state ) => {
	return {
		value: state
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		onIncrement: () => dispatch({ type: "INCREMENT"}),
		onDecrement: () => dispatch({ type: "DECREMENT"})
	}
}

const RootApp = connect( mapStateToProps, mapDispatchToProps )( Counter )

export default RootApp