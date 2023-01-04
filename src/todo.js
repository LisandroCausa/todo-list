export default function Todo(title, description, dueDate, priority) {
	let completed = false;
	return {
		title,
		description,
		dueDate,
		priority,
		completed
	};
};