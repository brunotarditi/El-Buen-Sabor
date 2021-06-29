import { Articulo } from "./articulo";
import { Factura } from "./factura";

export interface DetalleFactura {

    id: number;
    cantidad: number;
    articulo: Articulo;
    factura: Factura;
}