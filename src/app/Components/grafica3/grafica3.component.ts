import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SimulacionService } from 'src/app/Services/simulacion/simulacion.service';
import { GraficaModel } from '../Models/grafica.model';

@Component({
  selector: 'app-grafica3',
  templateUrl: './grafica3.component.html',
  styleUrls: ['./grafica3.component.css']
})
export class Grafica3Component implements OnInit {
  rtaDatos = this.simulacionService.datosGrafica;
  grafica: GraficaModel;
  datos:Array<GraficaModel>;
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor(public simulacionService: SimulacionService) { }

  ngOnInit(): void {
    this.grafica= new GraficaModel();
    this.grafica.listMaxFloracion=[22, 21, 24, 25, 26];
    this.grafica.listBrotesPosPerd=[22, 21, 24, 25, 26];
    this.grafica.listBrotes=[22, 21, 24, 25, 26];
    this.grafica.listFrutosPosPerd=[22, 21, 24, 25, 26];
    this.grafica.listFrutos=[22, 21, 24, 25, 26];
    this.grafica.listNitrogeno=[22, 21, 24, 25, 26];
    this.grafica.listPotasio=[22, 21, 24, 25, 26];
    this.grafica.listFosforo=[22, 21, 24, 25, 26];
    this.grafica.listFronteraAirTierr=[22, 21, 24, 25, 26];
    this.grafica.listHorizontedeSuelo=[22, 21, 24, 25, 26];
    //this.grafica.listYear=[22, 21, 24, 25, 26];
    //console.log(this.rtaDatos);
    
    this.grafica.listMaxFloracion=[];
    this.grafica.listBrotesPosPerd=[];
    this.grafica.listBrotes=[];
    this.grafica.listFrutosPosPerd=[];
    this.grafica.listFrutos=[];
    this.grafica.listNitrogeno=[];
    this.grafica.listPotasio=[];
    this.grafica.listFosforo=[];
    this.grafica.listFronteraAirTierr=[];
    this.grafica.listHorizontedeSuelo=[];
    this.grafica.listYear=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diembre"];

    this.salesData.labels = this.grafica.listYear;
    

    this.salesData.datasets[0].data = this.grafica.listFronteraAirTierr;
    this.salesData.datasets[1].data = this.grafica.listHorizontedeSuelo;
    //this.salesData.datasets[2].data = this.grafica.listFosforo;
    this.Graficar1();

    this.chart.update();
  }
  salesData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Frontera Aire Tierra', tension: 0.05, fill:true },
      { data: [], label: 'Horizonte de Suelo',tension: 0.05, fill: true },
      //{ data: [], label: 'Fosforo',tension: 0.01, fill: true },

      //{ label: 'Peso', data: [73, 73.4, 74, 74.5, 76], tension: 0.5 },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Resultados de las fronteras:',
      },
    },
  };
  Graficar1() {
    this.rtaDatos = this.simulacionService.datosGrafica;
    console.log(this.rtaDatos);
    
    for (let i in this.rtaDatos) {
      this.grafica.listMaxFloracion[i] = this.rtaDatos[i]['listMaxFloracion'];
      this.grafica.listBrotesPosPerd[i] = this.rtaDatos[i]['listBrotesPosPerd'];
      this.grafica.listBrotes[i] = this.rtaDatos[i]['listBrotes'];
      this.grafica.listFrutosPosPerd[i] = this.rtaDatos[i]['listFrutosPosPerd'];
      this.grafica.listFrutos[i] = this.rtaDatos[i]['listFrutos'];
      this.grafica.listNitrogeno[i] = this.rtaDatos[i]['listNitrogeno'];
      this.grafica.listFosforo[i] = this.rtaDatos[i]['listFosforo'];
      this.grafica.listPotasio[i] = this.rtaDatos[i]['listPotasio'];
      this.grafica.listFronteraAirTierr[i] = this.rtaDatos[i]['listFronteraAirTierr'];
      this.grafica.listHorizontedeSuelo[i] = this.rtaDatos[i]['listHorizontedeSuelo'];
      this.grafica.listYear[i]= this.rtaDatos[i]['listYear']
      
    }    
    

    this.salesData.datasets[0].data = this.rtaDatos.listFronteraAirTierr;
    this.salesData.datasets[1].data = this.rtaDatos.listHorizontedeSuelo;
    //this.salesData.datasets[2].data = this.rtaDatos.listFosforo;
    //this.salesData.labels = this.rtaDatos.listYear;
    this.chart.update();
    console.log("entro");
    
  }

}
