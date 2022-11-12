import { Task } from "./Task.js";

let isDone;
const checkbox = document.querySelector('#checkbox-undone');
const renderTasks = () => {
    fetch ('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks').then((response)=>{
        return response.json();
    })

    .then(data => {
        const taskList = document.querySelector('.todo__tasks');
        taskList.innerHTML = data.map((item) => Task(item)
        ).join('');
    });
};

checkbox.addEventListener("click", () => {
    isDone = isDone ?  "":"?done=false";

    fetch (`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks${isDone}`).then((response)=>{
        return response.json();
    })
    .then(data => {
        const taskList = document.querySelector('.todo__tasks');
        taskList.innerHTML = data.map((item) => Task(item)
        ).join('');
    });
});

renderTasks();
