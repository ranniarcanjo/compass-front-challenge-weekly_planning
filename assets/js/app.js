const btnSaveLocalStorage = document.querySelector('[data-save-local-storage]');
const btnDeleteLocalStorage = document.querySelector('[data-delete-local-storage]');
const btnAddTask = document.querySelector('[data-add-task]');
const btnDeleteAllTask = document.querySelector('[data-delete-all-task]');

// console.log(btnSaveLocalStorage);


// Adicionando em local storage
btnSaveLocalStorage.addEventListener('click', (e) => {
    alert('Adicionar Local Storage...');
});

// Delete em local storage
btnDeleteLocalStorage.addEventListener('click', (e) => {
    alert('Deletando Local Storage...');
});

// Adicionando Task
btnAddTask.addEventListener('click', (e) => {
    alert('Adicionando Task')
})

// Adicionando Task
btnDeleteAllTask.addEventListener('click', (e) => {
    alert('Deletando todos Task')
})