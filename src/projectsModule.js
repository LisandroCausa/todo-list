import storageManager from './storageManager';

const Projects = (() => {
	const array = storageManager.getSavedProjects(); // Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
	let currentProject = array[0];
	const push = (project) => {
		array.push(project);
	};
	return {
		array,
		currentProject,
		push
	};
})();

export default Projects;