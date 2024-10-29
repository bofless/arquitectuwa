import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonFooter, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-administradorhomepage',
  templateUrl: './administradorhomepage.page.html',
  styleUrls: ['./administradorhomepage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonFooter, IonBadge]
})
export class AdministradorhomepagePage implements OnInit {
  showDetail: string | null = null; // Para controlar qué detalle mostrar

  constructor() { }

  ngOnInit() { }

  toggleDetail(section: string) {
    // Cambia el detalle mostrado
    if (this.showDetail === section) {
      this.showDetail = null; // Oculta el detalle si ya está visible
    } else {
      this.showDetail = section; // Muestra el detalle seleccionado
    }
  }

  // Métodos de navegación para cada opción
  navigateToRegistroTiempos() { /* lógica de navegación */ }
  navigateToCalendario() { /* lógica de navegación */ }
  navigateToNotificaciones() { /* lógica de navegación */ }
  navigateToHistorialModificaciones() { /* lógica de navegación */ }
  navigateToHistorialOrdenes() { /* lógica de navegación */ }
  navigateToGestionAnuncios() { /* lógica de navegación */ }
  navigateToInformes() { /* lógica de navegación */ }
  navigateToGestionDocumentos() { /* lógica de navegación */ }
}
