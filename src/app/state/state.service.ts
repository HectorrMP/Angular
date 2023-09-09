import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  titulo:BehaviorSubject<string> = new BehaviorSubject('Ingreso de Alumno');

  get getTitulo(){
    return this.titulo.asObservable();
  }

  set setTitulo(titulo:string){
    this.titulo.next(titulo);
  }

  constructor() { }
}