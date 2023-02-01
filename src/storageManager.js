import Project from "./project";

const storageManager = (() => {
	const storage = window.localStorage;

	const getSavedProjects = () => {
		const projects = [];
		let i = 0;
		let item = storage.getItem("pro" + i);
		while (item !== null)
		{
			item = JSON.parse(item);
			const newProject = Project(item.name, item.todos);
			// (fix) Convert the dueDate string back to a Date object
			newProject.todos.forEach(todo => {
				todo.dueDate = new Date(todo.dueDate);
			});
			projects.push(newProject);
			i++;
			item = storage.getItem("pro" + i);
		}
		return projects;
	};

	const saveProject = (project, index) => {
		const keyName = "pro" + index;
		storage.setItem(keyName, JSON.stringify(project));
	};

	return {
		getSavedProjects,
		saveProject
	};
})();

export default storageManager;