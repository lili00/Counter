import { createStore } from 'redux'
//import * as Redux from 'redux'


//纯函数：给定输入参数，得到结果一定

const counter = ( count = 0, action ) => {

	switch( action.type ) {
		case "INCREMENT":
			return count + 1
		case "DECREMENT":
			return count - 1
		default:
			return count	
	}
}

//createStore(reducer, preloadedState, enhancer)
const initState = {
	name: "Yi",
	city: "beijing"
}
//let store = createStore(counter, initState)
let store = createStore(counter)

console.log(store)
console.log(store.getState())


const actionCreator = (info, id ) => {
	return {
		type: info,
		id: id
	}
}

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREMENT" })
store.dispatch( actionCreator("INCREMENT", 9))
store.dispatch( actionCreator("INCREMENT", 9))
store.dispatch( actionCreator("INCREMENT", 9))
console.log(store.getState())

// const listener = () => {
// 	document.body.innerText = store.getState()
// }
// //store数据监听
// store.subscribe( listener )

// document.addEventListener("click", function() {
// 	store.dispatch({ type: "INCREMENT" })
// })
