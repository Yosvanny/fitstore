import { Component } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonText,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.page.html",
  styleUrls: ["./categorias.page.scss"],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonText,
  ],
})
export class CategoriasPage {}
