import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter],
})
export class HomePage {
  constructor(private router: Router) {}

  goToRepartidor() {
    this.router.navigate(['/repartidorhomepage']);
  }

  goToAdministrador() {
    this.router.navigate(['/administradorhomepage']);
  }

  goToMecanico() {
    this.router.navigate(['/mecanicohomepage']);
  }
}
