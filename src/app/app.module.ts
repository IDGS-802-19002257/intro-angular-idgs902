import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MenuComponent } from './utl/menu/menu.component';
import { CalificacionComponent } from './utl/calificacion/calificacion.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { GruposComponent } from './utl/grupos.component';
import { IricComponent } from './utl/iric/iric.component';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        CalificacionComponent,
        AlumnoFilterPipe,
        AlumnoReactiveComponent,
        GruposComponent,
        IricComponent,
        SumaComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,

        EjerciciosModule,
        OperasModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
