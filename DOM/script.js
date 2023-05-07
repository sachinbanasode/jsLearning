console.log(
  "====== API getElementsByTagName() to select element by tag name ====="
);
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[0].innerHTML);
h2Element[0].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log(
  "====== API getElementsByClassName() to select element class Name ====="
);
const elementLi = document.getElementsByClassName("liItem");
console.log(elementLi[0].innerHTML);
console.log(elementLi[1].innerHTML);
console.log(elementLi[2].innerHTML);
console.log(elementLi[3].innerHTML);

console.log("====== API querySelector() to select element by id =====");
const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery.innerHTML);

console.log("====== API querySelector() to select element by class =====");
const elementByQuery = document.querySelector(".liItem");
console.log(elementByQuery.innerHTML);

console.log("====== API querySelectorAll() to select element by class =====");
const elementsByQuery = document.querySelectorAll(".liItem");
console.log(elementsByQuery[3].innerHTML);
elementsByQuery[3].innerHTML = "oracle";
console.log(elementsByQuery[3].innerHTML);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", "https://www.linkedin.com/login");
console.log(elementMyProfile);

console.log("====== Changing the CSS Property =====");
const elementtechstack = document.querySelector("#techstack");
elementtechstack.style.color = "red";
elementtechstack.style.fontFamily = "'Courier New', Courier, monospace";

console.log("====== Changing the CSS Property =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

const elementitem = document.querySelector("#item");
const elementaj = document.getElementsByClassName("liItem");
elementitem.removeChild(elementaj[1]);
