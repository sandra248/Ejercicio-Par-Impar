let datoIngresado : number = Number(prompt("Ingrese un NUMERO"));

if (datoIngresado === 0) {
  console.log("El numero ingresado es CERO")
} else {
    if (datoIngresado %2 == 0) {
      console.log("El numero ingresado es PAR")
    } else {
      console.log("El numero ingresado es IMPAR");
    } 
  }
}
