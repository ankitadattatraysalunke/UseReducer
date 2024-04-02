import React, { useReducer, useState } from 'react'
const initialState={count:0}
const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type) {
    case 'Decrement':
      return {count:state.count-1}
      case 'Increment':
        return {count:state.count+1}
      default: 
      return state
  }
}

function Counter() {
 // const [count, setCount] = useState(0);
  const [state ,dispatch ] = useReducer(reducer, initialState)
  return (
    <div>
        <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
        {state.count}
        <button onClick={()=>dispatch({type:'Increment'})}>+</button>
        <button>+</button>
    </div>
  )
}

export default Counter;

