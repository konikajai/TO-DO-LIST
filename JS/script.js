function getValue() {

    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    const div = document.createElement('div');
    // const span = document.createElement('span');
    // const btn1 = document.createElement('button');
    // const btn2 = document.createElement('button');
    // const btn3 = document.createElement('button');

    // btn1.textContent = "Done";
    // btn2.textContent = "Edit";
    // btn3.textContent = "Delete";

    // div.classList.add('taskDiv')
    // btn1.classList.add('done-btn')
    // btn2.classList.add('edit-btn')
    // btn3.classList.add('delete-btn')

    // btn1.addEventListener('click',()=>{
    //     div.style.color="red";
    // })

    // if (taskInput != "") {
    //     span.textContent = taskText;
    //     div.append(span, btn1, btn2, btn3);
    //     taskList.append(div);
    //     console.log(taskList)
    //     taskInput.value="";
    // }

    if (taskText != "") {
        div.innerHTML = `
        <span>${taskText}</span>
        <button onclick="doneTask(this)">Done</button>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>`
        taskList.append(div);
        taskInput.value="";
        console.log(taskList)
    }
}
function doneTask(button){
    const task = button.parentElement;
    task.classList.toggle('completed')
    // div.classList.toggle('completed')
    // div.style.text-decoration="line-through"
}

function editTask(button){
    const task = button.parentElement;
    const span = task.querySelector("span");
    const newtext = prompt("edit the task",span.innerText)
    if(newtext!==""){
        span.textContent=newtext;
    }
}

function deleteTask(button){
    const task = button.parentElement;
    task.remove();
}

