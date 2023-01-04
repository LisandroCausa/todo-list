function renderTodo(todo) {
	const container = document.createElement("div");
	const title = document.createElement("h2");
	title.textContent = todo.title;
	const description = document.createElement("p");
	description.textContent = todo.description;
	const dueDate = document.createElement("p");
	dueDate.textContent = todo.dueDate;
	container.appendChild(title);
	container.appendChild(description);
	container.appendChild(dueDate);
	container.classList.add("todo");
	if(todo.priority == 1)
	{
		container.classList.add("prio-low");
	}
	else if(todo.priority == 2)
	{
		container.classList.add("prio-med");
	}
	else
	{
		container.classList.add("prio-high");
	}
	return container;
}

export function renderProject(project) {
	const container = document.createElement("div");
	project.todos.forEach(element => {
		const todoDOMElement = renderTodo(element);
		container.appendChild(todoDOMElement);
	});
	return container;
}