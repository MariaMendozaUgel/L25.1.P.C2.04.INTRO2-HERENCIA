import Cl_hijo1 from "./Cl_hijo1.js";
import Cl_hijo2 from "./Cl_hijo2.js"; 

let hijo1 = new Cl_hijo1(1,2)
let hijo2 = new Cl_hijo2(1,2)

let salida = document.getElementById("salida");

salida.innerHTML = `
Calculo del hijo 1 es ${hijo1.calculo()} <br>
Calulo del hijo 2 es ${hijo2.calculo()}`
