const Projects = (() => {
	const array = [];
	let currentProject = undefined;
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