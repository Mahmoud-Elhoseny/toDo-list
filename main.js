

let form = document.getElementById("new-task-form");
let input = document.getElementById("new-task-input");
let list_el = document.getElementById("tasks");



form.addEventListener("submit", (e) => {
    e.preventDefault()



    if (input.value == "") {
        alert("please add a task")
        return
    }

    let task_el = document.createElement("div")
    task_el.classList.add("task")

    let task_content_el = document.createElement("div")


    task_content_el.classList.add("content")

    task_el.appendChild(task_content_el)

    let task_input_el = document.createElement("input")
    task_input_el.type = "text"
    task_input_el.classList.add("text")
    task_input_el.value = input.value
    task_input_el.setAttribute("readonly", "readonly")
    task_content_el.appendChild(task_input_el)


    let task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions")

    let task_edit_el = document.createElement("button")
    task_edit_el.classList.add("edit")

    task_edit_el.innerHTML = "Edit"

    let task_delete_el = document.createElement("button")
    task_delete_el.classList.add("delete")

    task_delete_el.innerHTML = "Delete"

    task_actions_el.appendChild(task_edit_el)
    task_actions_el.appendChild(task_delete_el)


    task_el.appendChild(task_actions_el)


    list_el.appendChild(task_el)

input.value = ""




task_edit_el.addEventListener("click",()=>{

if (task_edit_el.innerText.toLowerCase() == "edit") {
    task_input_el.removeAttribute("readonly")
task_input_el.focus()
task_edit_el.innerText = "Save"
}else{
task_input_el.setAttribute("readonly","readonly")
task_edit_el.innerText = "Edit"


}

})


task_delete_el.addEventListener("click",()=>{

    list_el.removeChild(task_el) 







})

    
    
    
})

