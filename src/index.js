import Project from "./project";
import Todo from "./todo";
import { renderProject } from "./dom";
import './style.css'

const myProject = Project("default");
myProject.addTodo(Todo("lol", "this has to be the best compound...", "12/18", 2));
myProject.addTodo(Todo("Wasaphinllton", "its just a short show", "05/30", 1));
myProject.addTodo(Todo("pepepe", "nothing to see here", "01/02", 3));
document.body.appendChild(renderProject(myProject));