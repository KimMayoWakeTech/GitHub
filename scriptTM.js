/* Kim Mayo, WEB.115.0002, Final Project - Task Manager */


    let tasks = [];
    let idCounter = 1;

        /* Add event listener for form submission and stop the page from refreshing */
    document.getElementById('taskForm').addEventListener('submit', function (e) {
      e.preventDefault();

        /* Collect the task details */
      const name = document.getElementById('taskName').value.trim();
      const priority = document.getElementById('priority').value;
      const isImportant = document.getElementById('isImportant').checked;
      const date = new Date().toLocaleString();
        
       /* Validate data */
      if (!name) return alert("Task name can't be empty");
        
       /* Create new task object */
      const task = {
        id: idCounter++,
        name,
        priority,
        isImportant,
        isCompleted: false,
        date
      };

      /* Add task to list, log list to console, display on page and reset form */
      tasks.push(task);
      console.log(JSON.stringify(tasks));
      renderTasks();
      this.reset();
    });

     /* Dynamically display tasks */
    function renderTasks() {
      const container = document.getElementById('taskmanager');
      container.innerHTML = '';
      tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task';
        if (task.isImportant) div.classList.add('important');
        if (task.isCompleted) div.classList.add('completed');

        div.innerHTML = `
          <strong>${task.name}</strong><br>
          Priority: ${task.priority}<br>
          Added: ${task.date}<br>
          <button onclick="toggleComplete(${task.id})">${task.isCompleted ? 'Undo' : 'Complete'}</button>
          <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        container.appendChild(div);
      });
    }

     /* Delete task */
    function deleteTask(id) {
      tasks = tasks.filter(task => task.id !== id);
      console.log(JSON.stringify(tasks));
      renderTasks();
    }

     /* Strikeout task when complete */
    function toggleComplete(id) {
      const task = tasks.find(t => t.id === id);
      if (task) task.isCompleted = !task.isCompleted;
      console.log(JSON.stringify(tasks));
      renderTasks();
    }
