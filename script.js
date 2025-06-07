// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Form validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Show error message
function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}

// Hide error message
function hideError(element) {
    element.textContent = '';
    element.style.display = 'none';
}

// Form submission handler
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    if (!validateName(nameInput.value)) {
        showError(nameError, 'Name must be at least 2 characters long');
        isValid = false;
    } else {
        hideError(nameError);
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
    } else {
        hideError(emailError);
    }

    if (!validateMessage(messageInput.value)) {
        showError(messageError, 'Message must be at least 10 characters long');
        isValid = false;
    } else {
        hideError(messageError);
    }

    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

// To-Do List Functionality
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'todo-buttons';
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        todoItem.classList.add('removing');
        setTimeout(() => todoItem.remove(), 300);
    });

    buttonContainer.appendChild(deleteButton);
    
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(buttonContainer);
    todoList.appendChild(todoItem);

    todoInput.value = '';
    todoInput.focus();
}

// Event listeners
addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
}); 