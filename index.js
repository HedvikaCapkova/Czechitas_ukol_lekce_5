import { Task } from "./Task.js";

const renderTasks = () => {
    fetch ('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks').then((response)=>{
        return response.json();
    }) 
    // .then(data => {
    //     taskList.innerHTML = data.map((item) => {
    //         return Task(item);
    //     }).join('');
    // });

    .then(data => {
        const taskList = document.querySelector('.todo__tasks');
        taskList.innerHTML = data.filter((item) => !item.done).map((item) => Task(item)
        ).join('');
    });
    

};

renderTasks();



