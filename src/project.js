export default function Project(name) {
	const todos = [];
	const addTodo = (newTodo) => {
		let i = 0;
		while((i < todos.length) && (getDaysDifference(todos[i].dueDate, newTodo.dueDate) < 0))
		{
			i++;
		}
		todos.splice(i, 0, newTodo);
	};
	const removeTodo = (todo) => {
		const index = todos.indexOf(todo);
		if(index > -1)
		{
			todos.splice(index, 1);
		}
	};
	return {
		name,
		todos,
		addTodo,
		removeTodo
	};
}

function getDaysDifference(dateA, dateB) {
	const millDiff = dateA - dateB;
	return Math.ceil(millDiff / (1000 * 60 * 60 * 24));
}