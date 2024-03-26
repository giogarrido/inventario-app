import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos,
        error: (errores:any) => console.error(errores),
      }
    );
  }

  onSubmit() {
    this.guardarProducto();
  }
  guardarProducto() {
    this.productoServicio.editarProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
        error: (errores:any) => console.error(errores),
      }
    );
  }

  irProductoLista() {
    this.enrutador.navigate(['/productos']);
  }
}
