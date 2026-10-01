import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  selector: "app-detalle-producto",
  templateUrl: "./detalle-producto.page.html",
  styleUrls: ["./detalle-producto.page.scss"],
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
export class DetalleProductoPage {
  private route = inject(ActivatedRoute);

  productoId = this.route.snapshot.paramMap.get("id");
}
