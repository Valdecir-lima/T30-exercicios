class Triangulo {
  //Definindo construtor e suas propriedades
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  verificarTriangulo() {
    //Condicoes Lógica do Triangulo
    let triangulo =
      this.lado1 + this.lado2 > this.lado3 &&
      this.lado2 + this.lado3 > this.lado1 &&
      this.lado1 + this.lado3 > this.lado2;

    let escaleno =
      this.lado1 != this.lado2 &&
      this.lado2 != this.lado3 &&
      this.lado3 != this.lado1;

    let equilatero =
      this.lado1 == this.lado2 &&
      this.lado2 == this.lado3 &&
      this.lado3 == this.lado1;

    let isosceles = !escaleno && !equilatero;

    console.log(
      `Triangulo:${triangulo}  Escaleno:${escaleno} Equilatero:${equilatero} Isosceles:${isosceles}`
    );

    //Lógica do return
    if (triangulo) {
      if (escaleno) {
        return "Escaleno";
      } else if (equilatero) {
        return "Equilatero";
      } else {
        return "Isósceles";
      }
    } else {
      return "Não Forma Triangulo";
    }
  }
}
