import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// declaracion de estados
	const [inputValue, setInputValue]= useState("") 
	const [ToDo, setToDo]= useState([]) 
	



	return (
		<div className="container my-5">
  <h1 className="text-center text-muted">Quereseres</h1>
  <div className="bg-white shadow-sm p-4 rounded">
    <input 
      type="text" 
      className="form-control mb-3"
      placeholder="añadir quereseres"
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      onKeyDown={(e) => {
        if (e.key === "Enter" && inputValue.trim()) {
          setToDo([...ToDo, inputValue]);
          setInputValue("");
        }
      }}
    />
    <ul className="list-group">
      {ToDo.map((task, index) => (
        <li 
          key={index} 
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {task}
          <button 
            className="btn btn-sm btn-outline-danger"
            onClick={() => setToDo(ToDo.filter((_, i) => i !== index))}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
	<p className="mt-3 text-muted small opacity-75">{ToDo.length} quereseres{ToDo.length !== 1 ? 's' : ''} en total</p>

  </div>
</div>


)
}








export default Home;


