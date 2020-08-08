function aoClicarBtnCalcular() {
  //Leitura
  let lado1 = parseFloat(document.getElementById("l1").value);
  let lado2 = parseFloat(document.getElementById("l2").value);
  let lado3 = parseFloat(document.getElementById("l3").value);

  //Lógica
  let tri = new Triangulo(lado1, lado2, lado3);
  let tipo = tri.verificarTriangulo();

  //Resultado
  let resultado = document.getElementById("resultado");
  resultado.innerText = tipo;
}
