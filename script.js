document.querySelectorAll('.task-div').forEach(button => {
  button.addEventListener('click', () => {
    // Code to get different section text
    const overlay = document.getElementById('overlay');
    const taskTitleInput = overlay.querySelector('.task-title');
    const statusSelect = overlay.querySelector('.status');

    
    const taskText = button.textContent;
    const columnStatus = button.closest('.column-div').getAttribute('data-status');

    // Code to match naming convention
    taskTitleInput.value = taskText;
    statusSelect.value = columnStatus;

    overlay.classList.remove('hidden');
  });
});


document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('hidden');
});

