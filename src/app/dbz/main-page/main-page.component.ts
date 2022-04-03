import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 8500 }
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Rogui',
    poder: 1000
  }


  constructor() { }

  ngOnInit(): void {
  }

  /*agregar(event: any) {
    event.preventDefault();
    console.log('Heyy...');
  } */

  agregarNuevoPersonaje(Personaje: Personaje) {
    this.personajes.push(Personaje);
  }


}
