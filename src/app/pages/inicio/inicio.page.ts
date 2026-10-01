import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
  standalone: true,
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
  ],
})
export class InicioPage {}
