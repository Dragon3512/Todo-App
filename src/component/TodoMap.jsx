import React, { useContext } from 'react';
import TodoCol from './TodoCol';
import { TodoContext } from './Context/Context';

export default function TodoMap() {
  const {state,dispatch}=useContext(TodoContext)
  return (
    <div>
      {state?.map((item, index) => (
        <TodoCol 
          key={index} 
          id={item.id}
          todoDate={item.date} 
          todoName={item.name} 
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}