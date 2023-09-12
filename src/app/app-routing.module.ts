import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { ProveedoresComponent } from './Components/proveedores/proveedores.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { ProductosComponent } from './Components/productos/productos.component';

const routes: Routes = [
  { path: "clientes", component: ClientesComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ventas', component: VentasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
