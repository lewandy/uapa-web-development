const calculateButton = document.getElementById("calculate-button");

calculateButton.onclick = () => {
  //Buscamos el valor del checkbox de la operacion seleccionada
  const operation = document.querySelector("input[name = operation]:checked")
    ?.value;

  //Obtener valores
  const numberOne = Number(document.getElementById("num1").value);
  const numberTwo = Number(document.getElementById("num2").value);

  //Mostrar alerta si no se selecciona una operacion
  if (!operation) {
    alert("Debe seleccionar una operacion!");
    return;
  }

  const result = calculate(operation, numberOne, numberTwo);

  //Mostrar el resultado
  document.getElementById("input-result").value = result;
};

const calculate = (operation, num1, num2) => {
  switch (operation) {
    case "suma":
      return num1 + num2;

    case "resta":
      return num1 - num2;

    case "multiplica":
      return num1 * num2;

    case "divide":
      return num1 / num2;

    default:
      throw new Error("Error: Operation not specified");
  }
};
