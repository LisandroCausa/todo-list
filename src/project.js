export default function Project(name) {
	const todos = [];
	const addTodo = (todo) => {
		todos.push(todo);
	};
	return {
		name,
		todos,
		addTodo
	};
}