import Project from "./project";
import Todo from "./todo";
import { renderProject, renderSidebar } from "./dom";
import './style.css'

const defaultProject = Project("Default");
defaultProject.addTodo(Todo("lol", "this has to be the best compound...", "12/18", 2));
defaultProject.addTodo(Todo("Wasaphinllton", "its just a short show", "05/30", 1));
defaultProject.addTodo(Todo("pepepe", "nothing to see here", "01/02", 3));

const defaultProject2 = Project("other project");
defaultProject2.addTodo(Todo("Finish math problems", "lorem ipsum foo", "09/17", 2));
defaultProject2.addTodo(Todo("Fix car", "fix car lights and seats from the last...", "07/21", 3));

const projects = [];
projects.push(defaultProject);
projects.push(defaultProject2);

document.body.appendChild(renderSidebar(projects));
document.body.appendChild(renderProject(defaultProject));