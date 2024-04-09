import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosSimulacionModel } from 'src/app/Components/Models/datosSimulacion.model';
import { Grafica1Component } from 'src/app/Components/grafica1/grafica1.component';
import { SimulacionService } from 'src/app/Services/simulacion/simulacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-simulador3',
  templateUrl: './simulador3.component.html',
  styleUrls: ['./simulador3.component.css']
})
export class Simulador3Component implements OnInit {
  mostrargrafica=false;
  mostrargrafica2=false;
  simuDato: DatosSimulacionModel;
  auxGrafica1: Grafica1Component;
  cantFru=0;
  frecRieFinal=0;
  datosControlRiego: number[] = [];
  predCult : string = '';



  
 
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

    this.simulacionService.simulacionRiegoOptimo(this.simuDato, this.cantFru, this.frecRieFinal).subscribe({
      
      next: (resultado) => {
        console.log('Resultado de la simulación de riego óptimo:', resultado);
        this.datosControlRiego = resultado.controlRiego;
        this.predCult= resultado.objetivo;
        console.log('Riego',this.datosControlRiego);
        // Aquí puedes hacer más acciones, como actualizar la UI con los resultados
        if(this.mostrargrafica){
          this.mostrargrafica2=true;
        }
        this.mostrargrafica=true;
    },
    error: (error) => {
      console.error('Error al obtener la recomendación de riego óptimo:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al obtener la recomendación de riego óptimo. Por favor, inténtalo de nuevo.',
        showConfirmButton: true,
      });
    }
  });
    

  }

}
