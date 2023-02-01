import storageManager from "./storageManager";
import Project from "./project";
import Todo from "./todo";
import { renderProject, renderSidebar } from "./dom";
import './style.css';
import Projects from "./projectsModule";


if(window.localStorage.length === 0)
{
	const defaultProject = Project("Default", []);
	defaultProject.addTodo(Todo("lol", "this has to be the best compound...", new Date("12/18"), 2, false));
	defaultProject.addTodo(Todo("Wasaphinllton", "its just a short show", new Date("05/30"), 1, false));
	defaultProject.addTodo(Todo("pepepe", "nothing to see here", new Date("01/02"), 3, false));
	Projects.push(defaultProject);
	Projects.currentProject = Projects.array[0];
	storageManager.saveProject(Projects.currentProject, 0);
}

document.body.appendChild(renderSidebar());
document.body.appendChild(renderProject(Projects.currentProject));