import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1!: number;
  num2!: number;
  resultado!: number;

  operacionSeleccionada: string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multi',
    'divi'
  ]

  calcular() {
    switch (this.operacionSeleccionada) {
      case 'suma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multi':
        this.resultado = this.num1 * this.num2;
        break;
      case 'divi':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }
}