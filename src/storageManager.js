import Projects from './projectsModule';
import Project from './project';
import Todo from './todo';

const storageManager = (() => {
	const storage = window.localStorage;

	const getSavedProjects = () => {
		const projects = [];
		let i = 0;
		let item = storage.getItem("pro" + i);
		console.log(item);
		while (item !== null)
		{
			projects.push(stringToProject(item));
			i++;
			item = storage.getItem("pro" + i);
		}
		console.log(projects);
		return projects;
	};

	const saveProject = (project) => {
		let string = projectToString(project);
		const keyName = "pro" + Projects.array.indexOf(project);
		storage.setItem(keyName, string);
	};

	return {
		getSavedProjects,
		saveProject
	};
})();

export default storageManager;

function todoToString(todo) {
	let string = "'" + todo.title + "',"
	+ "'" + todo.description + "',"
	+ "'" + todo.dueDate + "',"
	+ "'" + todo.priority + "',"
	+ "'" + todo.completed + "'";
	return ("{" + string + "}");
}

function projectToString(project) {
	let string = "'" + project.name + "',";
	project.todos.forEach(todo => {
		string += todoToString(todo) + ",";
	});
	return string;
}

function stringToProject(string) {
	console.log(string);
	let char = '';
	let i = 1;
	while (char !== "'")
	{
		char = string.charAt(i);
		i++;
	}
	const name = string.slice(1, i - 1);
	string = string.slice(i);

	console.log(name);
	console.log("str: ", string);

	let array = string.split("},{");
	array[0] = array[0].slice(2);
	array[array.length - 1] = array[array.length - 1].slice(0, -2);
	console.log(array);
	const project = Project(name);
	if(array[0] === "") return project;
	array.forEach(todo => {
		project.addTodo(stringToTodo(todo));
	});
	return project;
}

function stringToTodo(string) {
	const array = string.split(",");
	console.log("TODO: ", array);
	const title = removeQuotes(array[0]);
	const description = removeQuotes(array[1]);
	const dueDate = new Date(removeQuotes(array[2]));
	const priority = Number(removeQuotes(array[3]));
	const completed = (removeQuotes(array[4]) === "true");
	console.log("INPUTS:", title, description, dueDate, priority, completed)
	return Todo(title, description, dueDate, priority, completed);
}
// write a function that removes the quotes. Its guaranteed that the first and last character are quotes
function removeQuotes(string) {
	return string.slice(1, -1);
}