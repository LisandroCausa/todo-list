import emptyCheckboxIcon from './img/checkbox-empty.svg';
import checkedCheckboxIcon from './img/checkbox-checked.svg';
import trashIcon from './img/trash.svg';


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
	container.classList.add("project-section");
	const projectTitle = document.createElement("h1");
	projectTitle.textContent = project.name;
	projectTitle.classList.add("project-title");
	container.appendChild(projectTitle);
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

export function renderSidebar(projects) {
	const container = document.createElement("div");
	container.id = "sidebar";
	const projectHeader = document.createElement("h2");
	projectHeader.textContent = "Projects";
	container.appendChild(projectHeader);
	const projectContainer = document.createElement("div");
	projectContainer.id = "projects-container";
	projects.forEach(project => {
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
			document.body.removeChild(document.body.lastChild);
			document.body.appendChild(renderProject(project));
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