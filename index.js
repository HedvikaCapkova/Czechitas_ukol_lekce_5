const renderTasks = () => {
    fetch ('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks').then((response)=>{
        return response.json();
    }) 
    .then(data => {
        const taskList = document.querySelector('.task');
        taskList.innerHtml = data.map((item) => {
            return Task(item);
        }).join('');
    });
};

renderTasks();

const Task = (props) => {
    const { name, due, done } = prosp;

    return`
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
          </div>
        <div class="task__done">${done}</div>
        `;     
};

