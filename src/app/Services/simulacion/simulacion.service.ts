import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DatosSimulacionModel } from 'src/app/Components/Models/datosSimulacion.model';

@Injectable({
  providedIn: 'root'
})
export class SimulacionService {
  private simulacionURL="https://simon.uis.edu.co/citricos/simuCultivo/simuCultivo/"
  //private simulacionURL= "http://localhost:8080/simuCultivo/"
  datosGrafica: any;
  

  constructor(private httpClient: HttpClient) { }
  simulacion(DatosSimulacion: DatosSimulacionModel){
    const authData ={
      ...DatosSimulacion
    };
    return this.httpClient.post<DatosSimulacionModel>(this.simulacionURL, authData)
    .pipe(map(datos =>{
      this.datosGrafica= datos;
      
      return datos 
    }));
  }

  simulacionRiegoOptimo(datosSimulacion: DatosSimulacionModel, cantFru: number, frecRieFinal: number): Observable<any> {
    // Asumiendo que el backend espera cantFru y frecRieFinal como parámetros de consulta en la URL
    let params = new HttpParams()
      .set('cantFrut', cantFru.toString())
      .set('frecRie', frecRieFinal.toString());

    return this.httpClient.post<any>(`${this.simulacionURL}riegoRecomendado/`, datosSimulacion, { params: params })
      .pipe(map(datos => {
        this.datosGrafica= datos.control;
        return datos;
      }));
  }
}
