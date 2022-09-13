import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [tarea, setTarea] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setToDo((prev) => [...prev, tarea]);
	setTarea("");
  };
  console.log(toDo);
  const elementDellete = (dIndex)=> {
	setToDo(toDo.filter((e,i)=>i!=dIndex))
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-center">ToDo's</h1>
        <form onSubmit={onSubmit}>
          <div class="input-group d-flex justify-content-center">
            <input type="text" onChange={(e) => setTarea(e.target.value)} />
          </div>
          <div>
            {toDo.map((element, dIndex) => {
              return (
                <div className="d-flex justify-content-between my-3 col-4 mx-auto">
                  <p>{element}</p>
                  <button type="button" class="btn btn-primary" onClick={()=>elementDellete(dIndex)}>
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
