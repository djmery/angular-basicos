import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent implements OnInit {

  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.DbzService.personajes;
  }

  constructor(private DbzService: DbzService) { }

  ngOnInit(): void {
  }

}
