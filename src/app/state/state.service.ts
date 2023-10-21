import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
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

 // Nuevo si
  nombre: BehaviorSubject<string> = new BehaviorSubject('');
  get getNombre(){
    return this.nombre.asObservable();
  }
  set setNombre(nombre:string){
     this.nombre.next(nombre);
  }
  //otro si
  private isLoged:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false)
  getisLogged(){
    return this.isLoged.asObservable();
  }
  set setisLoged(dataisLoged:boolean){
    this.isLoged.next(dataisLoged);
  }

  constructor() { }
}