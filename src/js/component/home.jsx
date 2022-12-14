import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    getTareas();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    sendTarea();
    if (tarea != "") {
      setToDo((prev) => [...prev, {label:tarea, done: false}]);
      setTarea("");
    }
  };

  //Mostrar las tareas
  const getTareas = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch("https://assets.breatheco.de/apis/fake/todos/user/gonzalo", requestOptions)
      .then((res) => res.json())
      .then((res) => setToDo(res))
      .catch((error) => console.log("error", error));
  };

// Enviar tareas nuevas
  const sendTarea = () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify([
			...toDo,
			{ label: tarea, done: false }
		]);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/gonzalo",
			requestOptions
		)
			.then(res => res.json())
			.then(res => console.log(res))
			.catch(error => console.log("error", error));
	}

  //Borrar tareas
  const elementDellete = indexItem => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let newList = toDo.filter(
			(todo, index) => index !== indexItem
		);

		var raw = JSON.stringify(newList);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/gonzalo",
			requestOptions
		)
			.then(res => res.json())
			.then(res => getTareas())
			.catch(error => console.log("error", error));
	};

  console.log(toDo);

  return (
    <div className="container">
      <div>
        <h1 className="text-center fw-bold text-primary opacity-75">ToDo's</h1>
        <form onSubmit={onSubmit}>
          <div className="input-group d-flex justify-content-center">
            <input
              type="text"
              placeholder="Tareas a realizar"
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
            />
          </div>
          <div>
            {toDo.map((element, dIndex) => {
              return (
                <div className="d-flex justify-content-between my-4 col-6 mx-auto shadow-lg p-2 bg-body rounded">
                  <p>{element.label}</p>
                  <button
                    type="button"
                    className="btn btn-danger opacity-50"
                    onClick={() => elementDellete(dIndex)}
                  >
                      
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
