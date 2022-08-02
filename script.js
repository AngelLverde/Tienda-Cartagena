// let nombreIngresado = prompt ("ingresa tu nombre");
// let ingresarMail = prompt ("Bienvenido a Cartagena "+nombreIngresado+" dejanos tu mail para recibir el newsletter");





let products = [];
let total = 0;


function add(product,price) {
    console.log (product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`


}


function pagar() {
    alert(products.join(", \n"));
    console.log ("el usuario hizo click en pagar");

}


// Agrego Evento//
const clickPagar = (event)=> {
    console.log (event);

}


const usuarioPagar = document.getElementById("checkout");


usuarioPagar.addEventListener("click" , clickPagar);



// usuarioPagar.removeEventListener("click" , clickPagar);