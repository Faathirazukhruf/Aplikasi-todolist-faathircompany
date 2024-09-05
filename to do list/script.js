// tanggal
document.getElementById('date-picker').valueAsDate = new Date(); 

// Function untuk setting nama dan jabatan
document.getElementById('update-profile-btn').addEventListener('click', function() {
    let name = document.getElementById('name').value.trim();
    let position = document.getElementById('position').value.trim();

    if (name !== "" && position !== "") {
        document.getElementById('profile').innerHTML = `
            <p>Name: ${name}</p>
            <p>Position: ${position}</p>
        `;
    }
});

// Function upload tugas
  document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('task-input').value.trim();
    let priority = document.getElementById('priority-level').value;
    let selectedDate = document.getElementById('date-picker').value;

    if (taskInput !== "") {
        let taskList = document.getElementById('task-list');

        let newTask = document.createElement('li');
        newTask.classList.add('priority-' + priority);
        newTask.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span class="task-text">${taskInput} - ${selectedDate} - Priority: ${priority}</span>
            <button class="remove-task-btn">Remove</button>
        `;

        taskList.appendChild(newTask);
        document.getElementById('task-input').value = "";

        // Checkbox 
         newTask.querySelector('.checkbox').addEventListener('change', function() {
            if (this.checked) {
                moveTaskToDone(newTask);
            } else {
                moveTaskToTodo(newTask);
            }
        });

        // fungsi hapus tugas 
       newTask.querySelector('.remove-task-btn').addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
    }
});

// Function untuk membuat tugas done ya bang
function moveTaskToDone(taskItem) {
    let doneList = document.getElementById('done-list');
    let doneTask = taskItem;

    doneTask.classList.add('completed-task');
    doneTask.querySelector('.checkbox').checked = true;

    doneList.appendChild(doneTask);
}

function moveTaskToTodo(taskItem) {
    let todoList = document.getElementById('task-list');
    let undoneTask = taskItem;

    undoneTask.classList.remove('completed-task');
    undoneTask.querySelector('.checkbox').checked = false;

    todoList.appendChild(undoneTask);
}

// Function untuk menghapus semua tugas 
document.getElementById('clear-all-btn').addEventListener('click', function() {
    document.getElementById('task-list').innerHTML = '';
    document.getElementById('done-list').innerHTML = '';
});
