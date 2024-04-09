import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SimulacionService } from 'src/app/Services/simulacion/simulacion.service';
import Swal from 'sweetalert2';
import { DatosSimulacionModel } from '../Models/datosSimulacion.model';
import { Grafica1Component } from '../grafica1/grafica1.component';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {
  mostrargrafica=false;
  mostrargrafica2=false;
  simuDato: DatosSimulacionModel;
  auxGrafica1: Grafica1Component;

  
 
  constructor(public simulacionService: SimulacionService) { }

  ngOnInit(): void {
    this.simuDato= new DatosSimulacionModel();


  }

  EnviarDatosSimulacion(form:NgForm){
    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Oh Oh!!',
        text: 'Algún campo vacío',
        showConfirmButton: true,
      });
      return;
    }
    console.log(this.simuDato.tipoSuel);
    this.simulacionService.simulacion(this.simuDato).subscribe((resp)=>{
      //console.log(resp)
      if(this.mostrargrafica){
        this.mostrargrafica2=true;
      }
      this.mostrargrafica=true;
    });
    

  }
}
