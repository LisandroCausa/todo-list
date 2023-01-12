import emptyCheckboxIcon from './img/checkbox-empty.svg';
import checkedCheckboxIcon from './img/checkbox-checked.svg';
import trashIcon from './img/trash.svg';
import Todo from './todo';
import Projects from './projectsModule';
import Project from './project';

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
	const headerSection = document.createElement("div");
	headerSection.id = "project-header-section";
	const projectTitle = document.createElement("h1");
	projectTitle.textContent = project.name;
	projectTitle.classList.add("project-title");
	const newTodoButton = renderNewTodoButton();
	headerSection.appendChild(projectTitle);
	headerSection.appendChild(newTodoButton);
	container.appendChild(headerSection);
	
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
	container.appendChild(renderSidebarProjectsContainer());
	return container;
}

function renderSidebarProjectsContainer() {
	const container = document.createElement("div");
	container.id = "projects-container";
	Projects.array.forEach(project => {
		container.appendChild(projectButton(project));
	});
	const currentIndex = Projects.array.indexOf(Projects.currentProject);
	if(currentIndex > -1)
	{
		container.children[currentIndex].classList.add("opened-project");
	}
	container.appendChild(renderNewProjectButton());
	return container;
}

function projectButton(project) {
	const container = document.createElement("div");
	container.textContent = project.name;
	container.classList.add("project-sidebar-btn");
	const openedClassName = "opened-project";
	container.addEventListener("click", () => {
		if(container.classList.contains(openedClassName) == false)
		{
			removeClassChildren(container.parentNode, openedClassName);
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

	const sectionsClassName = "form-field-section";

	const nameSection = document.createElement("div");
	nameSection.classList.add(sectionsClassName);
	const nameLabel = document.createElement("label");
	nameLabel.htmlFor = "name";
	nameLabel.textContent = "Name";
	const nameField = document.createElement("input");
	nameField.id = "name";
	nameField.required = true;
	nameSection.appendChild(nameLabel);
	nameSection.appendChild(nameField);

	const descriptionSection = document.createElement("div");
	descriptionSection.classList.add(sectionsClassName);
	const descriptionLabel = document.createElement("label");
	descriptionLabel.htmlFor = "description";
	descriptionLabel.textContent = "Description";
	const descriptionField = document.createElement("textarea");
	descriptionField.id = "description";
	descriptionSection.appendChild(descriptionLabel);
	descriptionSection.appendChild(descriptionField);

	const dueDateSection = document.createElement("div");
	dueDateSection.classList.add(sectionsClassName);
	const dueDateLabel = document.createElement("label");
	dueDateLabel.htmlFor = "due-date";
	dueDateLabel.textContent = "Due date";
	const dueDateField = document.createElement("input");
	dueDateField.id = "due-date";
	dueDateField.type = "date";
	dueDateField.required = true;
	dueDateSection.appendChild(dueDateLabel);
	dueDateSection.appendChild(dueDateField);

	const prioritySection = document.createElement("div");
	prioritySection.classList.add(sectionsClassName);
	const priorityLabel = document.createElement("label");
	priorityLabel.textContent = "Priority";
	prioritySection.appendChild(priorityLabel);
	const priorityButtonsContainer = document.createElement("div");
	priorityButtonsContainer.id = "priority-buttons-container";
	const lowButton = renderPriorityButton("Low");
	const medButton = renderPriorityButton("Med");
	medButton.classList.add("selected-priority");
	const highButton = renderPriorityButton("High");
	priorityButtonsContainer.appendChild(lowButton);
	priorityButtonsContainer.appendChild(medButton);
	priorityButtonsContainer.appendChild(highButton);
	prioritySection.appendChild(priorityButtonsContainer);

	const okButton = renderTodoFormOkButton();
	
	window.appendChild(nameSection);
	window.appendChild(descriptionSection);
	window.appendChild(dueDateSection);
	window.appendChild(prioritySection);
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

function renderTodoFormOkButton() {
	const button = document.createElement("button");
	button.id = "ok-button";
	button.textContent = "OK";
	button.addEventListener("click", () => {
		const name = document.getElementById("name").value;
		if(name === "") return;
		const description = document.getElementById("description").value;
		const dueDateInput = document.getElementById("due-date").valueAsDate;
		if(dueDateInput === null) return;
		const dueDate = new Date();
		dueDate.setHours(0, 0, 0);
		dueDate.setDate(dueDateInput.getUTCDate());
		dueDate.setMonth(dueDateInput.getUTCMonth());
		dueDate.setFullYear(dueDateInput.getUTCFullYear());

		const prioButtons = document.getElementById("priority-buttons-container").children;
		let priority = 1;
		while((prioButtons[priority-1].classList.contains("selected-priority") == false) && priority < 10)
		{
			priority++;
		}

		const todo = Todo(name, description, dueDate, priority);
		console.log(todo);
		Projects.currentProject.addTodo(todo);
		document.body.removeChild(document.getElementById("project-section"));
		document.body.appendChild(renderProject(Projects.currentProject));
		const overlay = document.getElementById("overlay-background");
		overlay.remove();
	});
	return button;
}

function renderPriorityButton(name) {
	const btn = document.createElement("button");
	btn.classList.add("priority-btn");
	btn.textContent = name;
	const selectedClassName = "selected-priority";
	btn.addEventListener("click", () => {
		if(btn.classList.contains(selectedClassName) == false)
		{
			removeClassChildren(btn.parentNode, selectedClassName);
			btn.classList.add(selectedClassName);
		}
	});
	return btn;
}

function renderNewProjectButton() {
	const container = document.createElement("div");
	container.textContent = "+";
	container.classList.add("project-sidebar-btn");
	container.id = "new-project-btn";
	container.addEventListener("click", () => {
		console.log("foo");
		document.body.appendChild(renderNewProjectOverlay());
	});
	return container;
}

function renderNewProjectOverlay() {
	const container = renderOverlayBackground();
	const window = document.createElement("div");
	window.classList.add("new-todo-window");

	const nameSection = document.createElement("div");
	nameSection.classList.add("form-field-section");
	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Project name";
	nameLabel.htmlFor = "project-name";
	const nameField = document.createElement("input");
	nameField.id = "project-name";
	nameSection.appendChild(nameLabel);
	nameSection.appendChild(nameField);

	window.appendChild(nameSection);
	window.appendChild(renderProjectFormOkButton());
	container.appendChild(window);
	return container;
}

function renderProjectFormOkButton() {
	const button = document.createElement("button");
	button.id = "ok-button";
	button.textContent = "OK";
	button.addEventListener("click", () => {
		const name = document.getElementById("project-name").value;
		if(name === "") return;
		const newProject = new Project(name);
		Projects.push(newProject);
		const sidebar = document.getElementById("sidebar");
		sidebar.removeChild(sidebar.lastChild);
		sidebar.appendChild(renderSidebarProjectsContainer());
		const overlay = document.getElementById("overlay-background");
		overlay.remove();
	});
	return button;
}