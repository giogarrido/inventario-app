import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './producto-lista.component.html',

})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoServicio: ProductoService) { }

ngOnInit(){
  this.obtenerProductos();
}

private obtenerProductos(){
  this.productoServicio.obtenerProductosLista().subscribe(
    (datos => this.productos = datos)
  )
}
    
}
