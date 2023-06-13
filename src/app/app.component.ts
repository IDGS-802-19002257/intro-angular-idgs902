import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';
  alumno ={
    matricula: 19002257,
    nombre: 'Jesús',
    apaterno: 'Silva',
    inscrito: true,
    deuda: 15000.35,
    fechaNacimiento: new Date()
  }

  duplicaN(n:number):number{
    return n*2;
  }
}
