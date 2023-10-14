import { Component, Injectable, OnInit } from '@angular/core';
import { ServicioService } from '../core/servicio.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public detalle: any;
  constructor (private stateService: ServicioService) { }

  ngOnInit() {
    this.stateService.getPersonaje().subscribe((personaje)=>{
      this.detalle = personaje;
    });
  }

}
