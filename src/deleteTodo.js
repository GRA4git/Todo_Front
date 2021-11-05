const removeTodo = (id) => {
  fetch(`http://localhost:4000/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default removeTodo