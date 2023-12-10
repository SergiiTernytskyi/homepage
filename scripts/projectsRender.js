import {
  createProjectsDetailedMarkup,
  createProjectsMarkup,
} from "./createMarkup.js";

const projectsList = document.querySelector(".projects__list");
const showList = document.querySelector("[data-projectList-show]");

const renderProjectsDetailedList = () => {
  projectsList.innerHTML = createProjectsDetailedMarkup();
  showList.innerHTML = "Hide details";
};

const renderProjectsSimple = () => {
  projectsList.innerHTML = createProjectsMarkup();
  showList.innerHTML = "Show details";
};

showList.addEventListener("click", () => {
  projectsList.innerHTML.includes("img")
    ? renderProjectsSimple()
    : renderProjectsDetailedList();
});
