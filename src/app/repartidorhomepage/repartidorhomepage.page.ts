import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonMenu,
  IonMenuButton,
  IonItem,
  IonList,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonButton,
  IonAlert,
  IonCardSubtitle,
  IonPopover,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonCheckbox,
  IonRange,
  IonSegmentButton,
  IonSegment
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-repartidorhomepage',
  templateUrl: './repartidorhomepage.page.html',
  styleUrls: ['./repartidorhomepage.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonMenu,
    IonMenuButton,
    IonItem,
    IonList,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    IonButton,
    FormsModule,
    IonAlert,
    IonCardSubtitle,
    IonPopover,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonCheckbox,
    IonRange,
    IonSegmentButton,
    IonSegment
  ],
})
export class RepartidorhomepagePage {
  constructor(private router: Router) {} // Inyecta el Router en el constructor

  // Método para navegar a las diferentes páginas
  navigateTo(page: string) {
    this.router.navigate([page]); // Navega a la página especificada
  }
  enviarReporte() {
    // Lógica para enviar el reporte
    console.log('Reporte enviado');
    // Aquí podrías añadir más lógica, como enviar datos a un servicio, etc.
  }
}

