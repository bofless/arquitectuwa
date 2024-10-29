import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBadge, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mecanicohomepage',
  templateUrl: './mecanicohomepage.page.html',  // Asegúrate de que este nombre sea correcto
  styleUrls: ['./mecanicohomepage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonBadge, IonFooter]
})
export class MecanicohomepagePage implements OnInit {
  showDetail: string | null = null;

  constructor() { }

  ngOnInit() { }

  toggleDetail(section: string) {
    this.showDetail = this.showDetail === section ? null : section;
  }
}

