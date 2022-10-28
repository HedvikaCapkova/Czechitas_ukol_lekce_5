import { Task } from "./Task.js";

let showAllItems = true;
const checkbox = document.querySelector('#checkbox-undone');
const renderTasks = (update) => {
    fetch ('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks').then((response)=>{
        return response.json();
    })

    .then(data => {
        const taskList = document.querySelector('.todo__tasks');
        taskList.innerHTML = data.filter((item) => !item.done || update).map((item) => Task(item)
        ).join('');
    });
};

checkbox.addEventListener("click", () => {
    showAllItems = !showAllItems;
    renderTasks(showAllItems);
});

renderTasks(showAllItems);
