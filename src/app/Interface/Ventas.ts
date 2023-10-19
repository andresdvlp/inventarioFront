import { Cliente } from "./Cliente";

export interface Venta {
  idVenta: number;
  fechaVenta: string;
  descripcionVentas: string;
  clientes: Cliente;
}
