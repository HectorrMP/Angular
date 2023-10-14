import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private personajes: BehaviorSubject<any> = new BehaviorSubject(null);
  private personaje: BehaviorSubject<any> = new BehaviorSubject(null);

  setPersonajes(dataPersonajes:any){
    this.personajes.next(dataPersonajes);
  }

  getPersonajes(){
    return this.personajes.asObservable();
  }

  setPersonaje(dataPersonaje:any){
    this.personaje.next(dataPersonaje);
  }

  getPersonaje(){
    return this.personaje.asObservable();
  }


  constructor() { }
}
