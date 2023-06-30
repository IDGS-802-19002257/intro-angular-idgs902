import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent {

  @Input() califica!: number;

  @Output() calificaClick:EventEmitter<string> = new EventEmitter();
  puntosCal!: number;
  ngOnChanges():void{
    this.puntosCal = this.califica * 76/10;
  }

  onClick(){
    this.calificaClick.emit(`${this.califica}`)
  }
}
