import Project from "./project";
import Todo from "./todo";
import { renderProject, renderSidebar } from "./dom";
import './style.css';
import Projects from "./projectsModule";
import storageManager from "./storageManager";

const defaultProject = Project("Default");
defaultProject.addTodo(Todo("lol", "this has to be the best compound...", new Date("12/18"), 2));
defaultProject.addTodo(Todo("Wasaphinllton", "its just a short show", new Date("05/30"), 1));
defaultProject.addTodo(Todo("pepepe", "nothing to see here", new Date("01/02"), 3));

/*const defaultProject2 = Project("other project");
defaultProject2.addTodo(Todo("Finish math problems", "lorem ipsum foo", new Date("09/17"), 2));
defaultProject2.addTodo(Todo("Fix car", "fix car lights and seats from the last...", new Date("07/21"), 3));*/
if(window.localStorage.length === 0)
{
	Projects.push(defaultProject);
	Projects.currentProject = Projects.array[0];
	storageManager.saveProject(Projects.currentProject);
}
//Projects.push(defaultProject2);

document.body.appendChild(renderSidebar());
document.body.appendChild(renderProject(Projects.currentProject));