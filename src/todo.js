export default function Todo(title, description, dueDate, priority) {
	let completed = false;
	console.log(dueDate);
	return {
		title,
		description,
		dueDate,
		priority,
		completed
	};
};