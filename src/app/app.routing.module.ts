import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { IricComponent } from './utl/iric/iric.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'alta-alumnos', component: AlumnoReactiveComponent},
    { path: 'iric', component: IricComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }