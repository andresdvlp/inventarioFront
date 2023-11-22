import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormularioComponent } from '../../clientes/formulario/formulario.component';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css'],
})
export class FormularioProductoComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombreProducto: ['', Validators.required, null],
      descripcion: ['', Validators.required, null],
      precioUnitario: ['', Validators.required, null],
      cantidadDisponible: ['', Validators.required, Validators.email],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
