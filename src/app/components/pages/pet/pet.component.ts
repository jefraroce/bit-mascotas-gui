import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../../services/perros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  perro = {
    nombre: '',
    edad: 0,
    raza: '',
    comeCarne: false
  };

  constructor(private perrosService: PerrosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params) => {
          this.getInfoPerro(params.id)
        },
        (error) => {
          console.error('Error obteniendo los parametros de la URL ', error)
        }
      )
  }

  getInfoPerro(idPerro: String) {
    this.perrosService.getPerroById(idPerro)
      .subscribe(
        (perro: any) => {
          this.perro = perro;
        },
        (error) => {
          console.log('Error consultando la información del perro ', error)
        }
      )
  }

}
