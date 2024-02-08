

var buttonAdd= document.querySelector(".add")
var buttonRemove= document.querySelector(".remove")

// console.log(document.querySelector(".add"));
buttonAdd.onclick= addClass;
buttonRemove.onclick= removeClass;
// console.log(buttonAdd);

document.querySelector("div").classList.add("demo")


function addClass (){
    document.querySelector("h1").classList.add("vip");
}
function removeClass (){
    document.querySelector("h1").classList.remove("vip");
}

// function addOrRemovClass (){
//     document.querySelector("h1").classList.toggle("vip");
// }