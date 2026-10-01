import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full",
  },
  {
    path: "inicio",
    loadComponent: () =>
      import("./pages/inicio/inicio.page").then((m) => m.InicioPage),
  },
  {
    path: "categorias",
    loadComponent: () =>
      import("./pages/categorias/categorias.page").then(
        (m) => m.CategoriasPage,
      ),
  },
  {
    path: "producto/:id",
    loadComponent: () =>
      import("./pages/detalle-producto/detalle-producto.page").then(
        (m) => m.DetalleProductoPage,
      ),
  },
  {
    path: "**",
    redirectTo: "inicio",
  },
];
