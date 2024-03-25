document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
  
    addBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addBtn.click();
      }
    });
  
    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '❌';
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });
  