//Variables
var a=10;
let b=20;
const c=30;


console.log(a,b,c);

function Mifuncion(){
    document.getElementById("saludo").innerHTML="Mi primera funcion";
}
function volver(){
    document.getElementById("saludo").innerHTML="Hola mundo";
}
const boton=document.querySelector("#comprar")
console.log(boton);
boton.style.background="red";

function comprar(){
    window.alert("Gracias por su compra");
}
let miau=document.querySelectorAll(".btn-danger");

console.log(miau);

let username="Fabi coder";

console.log( typeof username);
console.log(username.concact("full stack"));
console.log(username.includes("coder"));
console.log(username.indexOf("coder"));