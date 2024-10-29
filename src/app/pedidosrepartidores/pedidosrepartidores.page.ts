import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonList, IonItem, IonBadge, IonFooter} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pedidosrepartidores',
  templateUrl: './pedidosrepartidores.page.html',
  styleUrls: ['./pedidosrepartidores.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonList, IonItem, IonBadge, IonFooter
  ]
})
export class PedidosrepartidoresPage implements OnInit {
  activeSegment: string = 'all';
  showDetail: string | null = null;

  // Simulación de historial de pedidos
  orderHistory = [
    { id: 101, status: 'Completado', date: '2024-10-10' },
    { id: 102, status: 'En curso', date: '2024-10-12' },
    { id: 103, status: 'Por aceptar', date: '2024-10-14' },
    { id: 104, status: 'Completado', date: '2024-10-15' },
    { id: 105, status: 'Completado', date: '2024-10-18' }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToHome() {
    this.router.navigate(['/repartidorhomepage']);
    this.activeSegment = 'all';
  }

  navigateToPedidos() {
    this.router.navigate(['/pedidosrepartidores']);
    this.activeSegment = 'favorites';
  }

  toggleDetail(category: string) {
    this.showDetail = this.showDetail === category ? null : category;
  }
}
