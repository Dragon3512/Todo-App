import "../App.css";
import React from "react";

export default function TodoCol({ todoDate, todoName, dispatch,id }) {  
  
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>[
            dispatch({type:"DELETE_ITEM",payload:id})
          ]}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}