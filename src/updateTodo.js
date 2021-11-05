import state from "./state";


const updateTodo = (id, bol) => {
    const parameters = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            complete: !bol
        })
    }
    fetch(`http://localhost:4000/update/${id}`, parameters)
}

export default updateTodo()