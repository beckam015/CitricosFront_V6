import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SimulacionService } from 'src/app/Services/simulacion/simulacion.service';
import { GraficaModel } from '../Models/grafica.model';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {
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
    this.salesData.datasets[0].data = this.grafica.listBrotes;
    this.salesData.datasets[1].data = this.grafica.listFrutos;
    this.salesData.datasets[2].data = this.grafica.listMaxFloracion;

    this.salesData2.datasets[0].data = this.grafica.listNitrogeno;
    this.salesData2.datasets[1].data = this.grafica.listPotasio;
    this.salesData2.datasets[2].data = this.grafica.listFosforo;
    this.Graficar1();

    this.chart.update();
    
  }
  salesData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Brotes', tension: 0.05, fill:true },
      { data: [], label: 'Frutos',tension: 0.05, fill: true },
      { data: [], label: 'Floración',tension: 0.01, fill: true },

    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comportamiento de su cultivo mes a mes:',
      },
    },
  };

  salesData2: ChartData<'line'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Nitrogeno', tension: 0.05, fill:true },
      { data: [], label: 'Potasio',tension: 0.05, fill: true },
      { data: [], label: 'Fosforo',tension: 0.01, fill: true },

      //{ label: 'Peso', data: [73, 73.4, 74, 74.5, 76], tension: 0.5 },
    ],
  };
  chartOptions2: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comportamiento de los nutrientes:',
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
      this.grafica.listYear[i]= this.rtaDatos[i]['listYear']
      
    }    
    this.salesData.datasets[0].data = this.rtaDatos.listBrotes;
    this.salesData.datasets[1].data = this.rtaDatos.listFrutos;
    this.salesData.datasets[2].data = this.rtaDatos.listMaxFloracion;

    this.salesData2.datasets[0].data = this.rtaDatos.listNitrogeno;
    this.salesData2.datasets[1].data = this.rtaDatos.listPotasio;
    this.salesData2.datasets[2].data = this.rtaDatos.listFosforo;
    //this.salesData.labels = this.rtaDatos.listYear;
    this.chart.update();
    console.log("entro");
    console.log(this.salesData2.datasets[0]);
  }

  

}
