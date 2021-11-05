const addBtn = document.querySelector(".btn")
const textInput = document.querySelector(".text-input")

addBtn.addEventListener("click", ()=>{
    fetch("http://localhost:4000/add", {
    metod: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({text: textInput.value})
})
})


