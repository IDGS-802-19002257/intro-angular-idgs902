import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnosIri } from './alumnos-iri';

@Pipe({
  name: 'alumnoFilter'
})
export class AlumnoFilterPipe implements PipeTransform {

  transform(value: IAlumnosIri[], args: string): IAlumnosIri[] {
    let filter: string = args ? args.toLocaleLowerCase() : '';

    return filter ? value.filter((alumno: IAlumnosIri) => alumno.nombre.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }

}
