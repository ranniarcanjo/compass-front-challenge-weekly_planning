const btnSaveLocalStorage = document.querySelector('[data-save-local-storage]');
const btnDeleteLocalStorage = document.querySelector('[data-delete-local-storage]');
const btnAddTask = document.querySelector('[data-add-task]');
const btnDeleteAllTask = document.querySelector('[data-delete-all-task]');

let taskList = [];

//Busca task em localStorage
const getTaskList = () => JSON.parse(localStorage.getItem('taskList')) ?? [];

//Salva task em localStorage
const setTaskList = (taskList) => localStorage.setItem('taskList', JSON.stringify(taskList));

const listItemTerca = document.querySelector("#itemTerca");

//Criar objeto task e adiciona no array
const createTask = (text, day, hour, indice) => {
    taskList.push(
        {   
            'taskId': indice,
            'taskDay': day,
            'taskHour': hour,
            'taskText': text,
        }
    )
    
    console.log("Task ", taskList)
}

//Criar item na lista
const createItemList = (list) => {
    const itemTerca = document.querySelector("#itemTerca");
    listItemTerca.innerHTML = '';
    
    taskList.forEach(el => {


        listItemTerca.innerHTML += `
        <div class="card__horario-item bg-terca">
            ${el.taskHour}
        </div>
        <div class="card-task__container">
            <div class="task-item bd-terca">
                <p class="task__text">${el.taskText}</p>
                <button class="btn btn-sm btn-danger btn-delete-item-task" data-del-id="${el.taskId}">Apagar</button>
            </div>  
        </div>
        `
    })
}

// Adicionando em local storage
btnSaveLocalStorage.addEventListener('click', (e) => {
    alert('Adicionar Local Storage...');
    setTaskList(taskList)
});

// Delete em local storage
btnDeleteLocalStorage.addEventListener('click', (e) => {
    alert('Deletando Local Storage...');
});

// Adicionando Task
// btnAddTask.addEventListener('click', (e) => {
//     alert('Adicionando Task')
// })

// Deletando Task
btnDeleteAllTask.addEventListener('click', (e) => {
    alert('Deletando todos Task')
    taskList.splice(0, taskList.length);
    console.log('ARRAY TASK LIST', taskList)
})

//Refresh
const refreshList = () => {
    // console.log(taskList)
    if (taskList.length === 0){
        // console.log('lista vazia')
    }else{
        createItemList(taskList)
    }
      
}

//Recuperando dados formulario
document.querySelector('#task-form').addEventListener('submit', (e) =>{
    e.preventDefault();

    //Get Form Values
    const taskText = document.querySelector("#taskDescription").value;
    const taskDay = document.querySelector("#taskDay").value;
    const taskHour = document.querySelector("#taskHour").value;

    //Validar campos
    if (taskText  === "" || taskDay === "" || taskHour === ""){
        alert("Campos de preenchimento obrigatorio");
    }else{
        createTask(taskText, taskDay, taskHour, uuid())
        refreshList()
        clearForm()
    }
})

//Limpa formulario
const clearForm = () => {
    document.querySelector("#taskDescription").value = ""; 
    document.querySelector("#taskDay").value = ""; 
    document.querySelector("#taskHour").value = ""; 
}

//Gera id
const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

//Clock
const timeNow = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    clock.innerHTML = `${hour}:${minute}`
}

// const formatHour = (hour)
  
setInterval(() => {timeNow()}, 1000)

refreshList()
