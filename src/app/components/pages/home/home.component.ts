import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../../services/perros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  perros = [];

  constructor(private perrosService: PerrosService) { }

  ngOnInit(): void {
    this.perrosService.getPerros()
      .subscribe(
        (perros: any) => {
          this.perros = perros;
          console.log('perros ', perros)
        },
        (error) => {
          console.error('Error consultando los perros ', error)
        }
      )
  }

}
