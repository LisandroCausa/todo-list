export default function Todo(title, description, dueDate, priority, completed) {
	console.log(dueDate);
	return {
		title,
		description,
		dueDate,
		priority,
		completed
	};
};