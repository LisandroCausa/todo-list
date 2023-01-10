import emptyCheckboxIcon from './img/checkbox-empty.svg';
import checkedCheckboxIcon from './img/checkbox-checked.svg';
import trashIcon from './img/trash.svg';
import Todo from './todo';
import Projects from './projectsModule';

function renderTodo(todo) {
	const container = document.createElement("div");
	const title = document.createElement("h3");
	title.textContent = todo.title;
	const description = document.createElement("p");
	description.textContent = todo.description;
	description.style.display = "none";
	const dueDate = document.createElement("p");
	const dateFormatOptions = { day: "numeric", month: "numeric" };
	dueDate.textContent = todo.dueDate.toLocaleDateString("en-GB", dateFormatOptions);
	dueDate.classList.add("due-date");
	const checkbox = document.createElement("img");
	checkbox.src = emptyCheckboxIcon;
	checkbox.classList.add("checkbox-button");
	checkbox.addEventListener("click", (event) => {
		event.stopPropagation();
		container.classList.toggle("completed");
		todo.completed = !todo.completed;
		if(container.classList.contains("completed"))
			checkbox.src = checkedCheckboxIcon;
		else
			checkbox.src = emptyCheckboxIcon;
	});
	
	const deleteButton = document.createElement("img");
	deleteButton.src = trashIcon;
	deleteButton.classList.add("delete-button");
	container.appendChild(title);
	container.appendChild(dueDate);
	container.appendChild(description);
	container.appendChild(checkbox);
	container.appendChild(deleteButton);
	container.classList.add("todo");
	if(todo.completed)
	{
		container.classList.add("completed");
	}

	if(todo.priority == 1)
	{
		container.classList.add("low-prio");
	}
	else if(todo.priority == 2)
	{
		container.classList.add("med-prio");
	}
	else
	{
		container.classList.add("high-prio");
	}
	container.addEventListener("click", () => {
		container.classList.toggle("opened-todo");
		if(container.classList.contains("opened-todo"))
			description.style.display = "block";
		else
			description.style.display = "none";
	});
	return container;
}

export function renderProject(project) {
	const container = document.createElement("div");
	container.id = "project-section";
	const projectTitle = document.createElement("h1");
	projectTitle.textContent = project.name;
	projectTitle.classList.add("project-title");
	container.appendChild(projectTitle);
	const newTodoButton = renderNewTodoButton();
	container.appendChild(newTodoButton);
	const todosContainer = document.createElement("div");
	todosContainer.classList.add("todos-container");
	project.todos.forEach(element => {
		const todoDOMElement = renderTodo(element);
		todosContainer.appendChild(todoDOMElement);
		const deleteButton = todoDOMElement.lastChild;
		deleteButton.addEventListener("click", () => {
			project.removeTodo(element);
			todoDOMElement.remove();
		});
	});
	container.appendChild(todosContainer);
	return container;
}

export function renderSidebar() {
	const container = document.createElement("div");
	container.id = "sidebar";
	const projectHeader = document.createElement("h2");
	projectHeader.textContent = "Projects";
	container.appendChild(projectHeader);
	const projectContainer = document.createElement("div");
	projectContainer.id = "projects-container";
	Projects.array.forEach(project => {
		projectContainer.appendChild(projectButton(project));
	});
	container.appendChild(projectContainer);
	return container;
}

function projectButton(project) {
	const container = document.createElement("div");
	container.textContent = project.name;
	container.classList.add("project-sidebar-btn");
	container.addEventListener("click", () => {
		if(container.classList.contains("opened-project") == false)
		{
			const projectsContainer = document.getElementById("projects-container");
			const openedClassName = "opened-project";
			removeClassChildren(projectsContainer, openedClassName);
			container.classList.add(openedClassName);
			document.body.removeChild(document.getElementById("project-section"));
			document.body.appendChild(renderProject(project));
			Projects.currentProject = project;
		}
	});
	return container;
}

function removeClassChildren(parent, className) {
	const children = parent.children;
	for (const element of children)
	{
		element.classList.remove(className);
	}
}

function renderNewTodoButton() {
	const btn = document.createElement("button");
	btn.textContent = "new To-Do";
	btn.addEventListener("click", () => {
		document.body.appendChild(renderNewTodoOverlay());
	});
	return btn;
}

function renderNewTodoOverlay() {
	const container = renderOverlayBackground();
	const window = document.createElement("div");
	window.classList.add("new-todo-window");

	const nameSection = document.createElement("div");
	nameSection.classList.add("form-field-section");
	const nameLabel = document.createElement("label");
	nameLabel.htmlFor = "name";
	nameLabel.textContent = "Name";
	const nameField = document.createElement("input");
	nameField.id = "name";
	nameField.required = true;
	nameSection.appendChild(nameLabel);
	nameSection.appendChild(nameField);

	const descriptionSection = document.createElement("div");
	descriptionSection.classList.add("form-field-section");
	const descriptionLabel = document.createElement("label");
	descriptionLabel.htmlFor = "description";
	descriptionLabel.textContent = "Description";
	const descriptionField = document.createElement("textarea");
	descriptionField.id = "description";
	descriptionSection.appendChild(descriptionLabel);
	descriptionSection.appendChild(descriptionField);

	const dueDateSection = document.createElement("div");
	dueDateSection.classList.add("form-field-section");
	const dueDateLabel = document.createElement("label");
	dueDateLabel.htmlFor = "due-date";
	dueDateLabel.textContent = "Due date";
	const dueDateField = document.createElement("input");
	dueDateField.id = "due-date";
	dueDateField.type = "date";
	dueDateField.required = true;
	dueDateSection.appendChild(dueDateLabel);
	dueDateSection.appendChild(dueDateField);

	const okButton = renderFormOkButton();
	
	window.appendChild(nameSection);
	window.appendChild(descriptionSection);
	window.appendChild(dueDateSection);
	window.appendChild(okButton);
	container.appendChild(window);
	return container;
}

function renderOverlayBackground() {
	const background = document.createElement("div");
	background.id = "overlay-background";
	background.addEventListener("click", (event) => {
		if(event.target == background)
		{
			background.remove();
		}
	});
	return background;
}

function renderFormOkButton() {
	const button = document.createElement("button");
	button.textContent = "OK";
	button.addEventListener("click", () => {
		const name = document.getElementById("name").value;
		const description = document.getElementById("description").value;
		const dueDateInput = document.getElementById("due-date").valueAsDate;
		const dueDate = new Date(dueDateInput);
		const todo = Todo(name, description, dueDate, 1);
		console.log(todo);
		Projects.currentProject.addTodo(todo);
		document.body.removeChild(document.getElementById("project-section"));
		document.body.appendChild(renderProject(Projects.currentProject));
		const overlay = document.getElementById("overlay-background");
		overlay.remove();
	});
	return button;
}