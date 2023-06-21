//Definicion de constantes y types
const defColor = "blanco";
const defConsumo = "F";
const defPrecioBase = 100;
const defPeso = 5;

type colors = "blanco" | "rojo" | "negro" | "azul" | "gris";
type consumo = "A" |"B"|"C"|"D"|"E"| "F";
//Definicion de la clase

class Electrodomestico {
  //atributos de la clase
  protected precioBase: number;
  protected color: string;
  protected consumo: string;
  protected peso: number;

  //constructor de la clase
  constructor() {
    this.precioBase = defPrecioBase;
    this.color = defColor;
    this.consumo = defConsumo;
    this.peso = defPeso;
  }

  //metodos de la clase

  getColor(): string {
    return this.color;
  }
  getPeso(): number {
    return this.peso;
  }
  getPrecioBase(): number {
    return this.precioBase;
  }
  getConsumo(): string {
    return this.consumo;
  }
}

const comprobarLetra=(type:consumo)=>{
for 


}

//instancias de clase
