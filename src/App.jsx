import { useReducer } from "react";
import { todoReducer } from "./hooks/todoReducer";

const initialState = [{
  id: new Date().getTime(),
  name: 'Recolectar la piedra del Alma',
  done: false,
},
{
  id: new Date().getTime() + 100,
  name: 'Recolectar la piedra del Test',
  done: false,
}];

function App() {


  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1> TodoApp (10) | <small> pendientes: </small>  </h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <ul className="list-group">
            {
              todos.map(todo => (
                <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                  <span className="align-self-center"> {todo.name} </span>
                  <button className="btn btn-danger" > Borrar </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4> Agregar TODO </h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Qué hay que hacer?"
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-outline-primary my-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
