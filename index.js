let submit = document.querySelector("#submit");
let input = document.querySelector(".text");
let Checkbox = document.querySelector(".strike");
let toDoList = [];
let newListItem = document.createElement("li");
let newBox = document.createElement("input");
let listContainer = document.querySelector("ul");
let boxContainer = document.querySelectorAll("li");

const addToDo = () => {

let add = input.value;

if(toDoList.indexOf(add) === -1){
  toDoList.push(add);
  }
toDoList.forEach((element) => { //Prolly change to a for loop to see if it helps
  newListItem.innerHTML = `
  <li>${element}</li>`;

  listContainer.appendChild(newListItem);
  newBox.innerHTML = `<input type="checkbox" class="strike" value="done>Completed?`;
  boxContainer.appendChild(newBox);
    });
console.log(toDoList);
  /*toDoList.push();
  return toDoList;
  newListItem.innerHTML = `
  <li>${toDoList[toDoList.length - 1]}</li>
  <input type="checkbox" class="strike" value="done">Done`;
  listContainer.appendChild(newListItem);*/
}

const strikethrough = () => {
for(let index=0; index < addToDo.length; index++){
  if(document.querySelectorAll("li")[index].children[0].checked === true){
    document.querySelectorAll("li")[index].style.textDecoration = "line-through";
  } else {
    document.querySelectorAll("li")[index].style.textDecoration = "";
  }
}

}

submit.addEventListener("click", addToDo);
Checkbox.addEventListener("click", strikethrough);
console.log(toDoList);