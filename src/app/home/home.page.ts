import { Component } from '@angular/core';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre!: string;
  constructor(private router:Router, private stateService:StateService) {

  this.stateService.getNombre.subscribe((Alumno)=>{
    debugger;
    this.nombre = Alumno;
  })


}}
