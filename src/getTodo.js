import state from "./state"
import render from "./render/render"

const getTodo = () => {
  fetch("http://localhost:4000/")
    .then((res) => res.json())
    .then((data) => {
      state.ToDo = data
      render()
    })
}

export default getTodo
