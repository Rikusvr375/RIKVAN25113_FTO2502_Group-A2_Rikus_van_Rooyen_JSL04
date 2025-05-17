/**
 * Adds click event listeners to all elements with the class 'task-div'.
 * When clicked, the task's title and status are loaded into the overlay,
 * and the overlay is displayed.
 */
document.querySelectorAll('.task-div').forEach(button => {
  button.addEventListener('click', () => {
    /**
     * @constant {HTMLElement} overlay - The overlay element that displays task details.
     */
    const overlay = document.getElementById('overlay');

    /**
     * @constant {HTMLInputElement} taskTitleInput - Input field for the task title in the overlay.
     */
    const taskTitleInput = overlay.querySelector('.task-title');

    /**
     * @constant {HTMLSelectElement} statusSelect - Dropdown for task status in the overlay.
     */
    const statusSelect = overlay.querySelector('.status');

    /**
     * @constant {string} taskText - The text content of the clicked task.
     */
    const taskText = button.textContent;

    /**
     * @constant {string} columnStatus - The status of the task, derived from its column.
     */
    const columnStatus = button.closest('.column-div').getAttribute('data-status');

    // Set overlay values based on clicked task
    taskTitleInput.value = taskText;
    statusSelect.value = columnStatus;

    // Show the overlay
    overlay.classList.remove('hidden');
  });
});

/**
 * Adds a click event listener to the close button.
 * When clicked, it hides the task detail overlay.
 */
document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('hidden');
});

