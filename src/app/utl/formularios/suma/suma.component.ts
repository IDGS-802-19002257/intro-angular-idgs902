import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  resultado: number = 0;
  num1: number = 0;
  num2: number = 0;

  sumar():void{
    this.resultado = this.num1 + this.num2;
  }
}
