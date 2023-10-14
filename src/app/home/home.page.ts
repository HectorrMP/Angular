import { Component, Injectable, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ServicioService } from '../core/servicio.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public personajes: any;


  constructor(private servicio: StateService, private http : HttpClient, private router: Router, private stateService: ServicioService  ) {}

  ngOnInit() {
    this.servicio.getCharacters().subscribe((data) => {
      console.log('ACAAAA',data);
      this.personajes = data;
    });
  }

  irADetalle(personaje: any){
    this.stateService.setPersonaje(personaje);
    // debugger;
    this.router.navigateByUrl('/listar')

  };
}
