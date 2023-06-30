import { Component } from '@angular/core';
import { IAlumnosIri } from '../alumnos-iri';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  alumnosIric:IAlumnosIri[] = [
    {
      matricula: "123456",
      nombre: "Juan",
      edad: 20,
      correo: "juan@mail.com",
      foto: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      calif: 10
    },
    {
      matricula: "654321",
      nombre: "Pedro",
      edad: 21,
      correo: "pedro@mail.com",
      foto: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      calif: 4.5
    },
    {
      matricula: "456789",
      nombre: "Maria",
      edad: 22,
      correo: "maria@mail.com",
      foto: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      calif: 9
    },
    {
      matricula: "987654",
      nombre: "Erick",
      edad: 23,
      correo: "erick@mail.com",
      foto: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
      calif: 6.7
    }
  ];

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';
  alumnoTitle!: string;

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }

  onCalificaClic(message: string) {
    this.alumnoTitle = ` ${message}`
  }

}
