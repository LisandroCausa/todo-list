export default function Todo(title, description, dueDate, priority) {
	let completed = false;
	dueDate = new Date(dueDate);
	console.log(dueDate);
	return {
		title,
		description,
		dueDate,
		priority,
		completed
	};
};