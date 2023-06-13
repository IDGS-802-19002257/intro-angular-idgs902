import { Component } from "@angular/core";

@Component({
    selector: 'app-grupos',
    template: `
    <h1>Grupos</h1>
    <form action="">
    <div class="input-group mb-3">
        <input type="number" name="numero" id="numero" class="form-control" placeholder="Numero">
        <button type="submit" class="btn btn-outline-secondary">Enviar</button>
    </div>
        <!-- <div class="form-group">
            <label for="numero" class="form-label">Numero</label>
            <input type="number" name="numero" id="numero" class="form-control">
        </div>
        <div class="form-group mt-md-1">
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div> -->
    </form>
    `
    /* templateUrl: './grupos.component.html', */
})
export class NamesGrupos{
    constructor(){

    }
}