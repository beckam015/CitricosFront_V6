import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


//componentes
import { LoginComponent } from './Components/login/login.component';
import { SimuladorComponent } from './Components/simulador/simulador.component';
import { Grafica1Component } from './Components/grafica1/grafica1.component';
import { Grafica2Component } from './Components/grafica2/grafica2.component';
import { Grafica3Component } from './Components/grafica3/grafica3.component';
import { Grafica4Component } from './Components/grafica4/grafica4.component';
import { Grafica5Component } from './Components/grafica5/grafica5.component';
import { Grafica6Component } from './Components/grafica6/grafica6.component';
import { Simulador2Component } from './Components/simulador2/simulador2.component';
import { Simulador3Component } from './simulador3/simulador3/simulador3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SimuladorComponent,
    Grafica1Component,
    Grafica2Component,
    Grafica3Component,
    
    Grafica4Component,
         Grafica5Component,
         Grafica6Component,
         Simulador2Component,
         Simulador3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
