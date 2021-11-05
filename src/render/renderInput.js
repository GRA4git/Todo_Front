const renderInput = (root) =>{
    const formBlock = document.createElement("div")
    const textInput = document.createElement("input")
    const addBtn = document.createElement("button")

    textInput.classList.add("text-input")
    addBtn.classList.add("btn")
    
    addBtn.textContent = "add"
    formBlock.append(textInput,addBtn)
    root.append(formBlock)
}

export default renderInput