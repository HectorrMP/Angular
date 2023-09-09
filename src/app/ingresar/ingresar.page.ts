import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})

export class IngresarPage implements OnInit {
  formulariousuario:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formulariousuario=this.fb.group({
      nombre:[""],
      contraseña:[""],
    })
  }

  ngOnInit() {
  }

  grabarEmpleado(){
    console.log("Ingresando a la funcion")
    const Alumno={
      nombre:this.formulariousuario.get('nombre')?.value,
      edad:this.formulariousuario.get('contraseña')?.value,
    }
    // if(Alumno.edad >= 18) {

    //   console.log(Alumno)
    //   return
    // }
    // console.log("No es mayor de edad")
  }

}