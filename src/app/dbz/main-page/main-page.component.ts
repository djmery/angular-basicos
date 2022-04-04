import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Maestro Rogui',
    poder: 1000
  }


  constructor() {

  }

  ngOnInit(): void {
  }

  /*agregar(event: any) {
    event.preventDefault();
    console.log('Heyy...');
  } */

  /*agregarNuevoPersonaje(Personaje: Personaje) {
    this.personajes.push(Personaje);
  } */


}
