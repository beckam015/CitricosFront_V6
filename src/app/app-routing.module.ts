import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';


//Componentes
import { LoginComponent } from './Components/login/login.component';
import { SimuladorComponent } from './Components/simulador/simulador.component';
import { Simulador2Component } from './Components/simulador2/simulador2.component';
import { Simulador3Component } from './simulador3/simulador3/simulador3.component';

const routerOpciones: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'simulacion2', component: Simulador2Component},
  { path: 'simulacion', component: SimuladorComponent},
  { path: 'simulacion3', component: Simulador3Component},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    routerOpciones
  )],

  exports: [RouterModule]
})
export class AppRoutingModule { }
