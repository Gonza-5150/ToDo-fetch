import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [tarea, setTarea] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (tarea != ""){
      setToDo((prev) => [...prev, tarea]);
      setTarea("");
    }
    
    
  };
  console.log(toDo);
  const elementDellete = (dIndex) => {
    setToDo(toDo.filter((e, i) => i != dIndex));
  };

  function limpiar() {
    document.getElementById("prueba").value = "";
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-center">ToDo's</h1>
        <form onSubmit={onSubmit}>
          <div className="input-group d-flex justify-content-center">
            <input
              type="text"
              id="prueba"
              placeholder="Tareas a realizar"
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
            />
          </div>
          <div>
            {toDo.map((element, dIndex) => {
              return (
                <div className="d-flex justify-content-between my-3 col-4 mx-auto">
                  <p>{element}</p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => elementDellete(dIndex)}
                  >
                    borrar
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
