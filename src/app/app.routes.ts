import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'administradorhomepage',
    loadComponent: () => import('./administradorhomepage/administradorhomepage.page').then( m => m.AdministradorhomepagePage)
  },
  {
    path: 'mecanicohomepage',
    loadComponent: () => import('./mecanicohomepage/mecanicohomepage.page').then( m => m.MecanicohomepagePage)
  },
  {
    path: 'repartidorhomepage',
    loadComponent: () => import('./repartidorhomepage/repartidorhomepage.page').then( m => m.RepartidorhomepagePage)
  },
  {
    path: 'pedidosrepartidores',
    loadComponent: () => import('./pedidosrepartidores/pedidosrepartidores.page').then( m => m.PedidosrepartidoresPage)
  },
];
