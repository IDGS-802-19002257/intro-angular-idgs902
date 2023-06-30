import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IAlumnosIri } from 'src/app/utl/alumnos-iri';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnosIric:IAlumnosIri[] = []

  alumnosForm!: FormGroup;
  constructor(private readonly fb:FormBuilder) {
    this.alumnosForm = this.initForm();
  }

  onSubmit():void{
    // console.log('Form->', this.alumnosForm.value);
    // guardar en el arreglo
    this.alumnosIric.push(this.alumnosForm.value);
  }

  obtenerValor():void{
    const mat=this.alumnosForm.get('matricula')?.value;
    const nom=this.alumnosForm.get('nombre')?.value;
    console.log('Matricula->', mat);
    console.log('Nombre->', nom);
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['', [Validators.required, Validators.minLength(3)]],
      nombre:['', [Validators.required]],
      edad:[''],
      correo:['', [Validators.required]],
      foto:[''],
      calif:['']
    })
  }

}
