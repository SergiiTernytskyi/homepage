import { skillsListMarkup, skillsLogoListMarkup } from "./createMarkup.js";

const skills = document.querySelector("[data-logo-lost-show]");
const softSkills = document.querySelector(".hard-skills");
console.log(skills);

const renderSkillsList = () => {
  softSkills.innerHTML = skillsListMarkup();
};

const renderSkillsListDetailed = () => {
  softSkills.innerHTML = skillsLogoListMarkup();
};
skills.addEventListener("click", () => {
  console.log("hello");
  softSkills.innerHTML.includes("img")
    ? renderSkillsList()
    : renderSkillsListDetailed();
});
