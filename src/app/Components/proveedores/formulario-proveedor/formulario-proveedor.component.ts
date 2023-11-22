import { Component, Inject } from '@angular/core';
import { FormularioComponent } from '../../clientes/formulario/formulario.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-proveedor',
  templateUrl: './formulario-proveedor.component.html',
  styleUrls: ['./formulario-proveedor.component.css'],
})
export class FormularioProveedorComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombreProveedor: ['', Validators.required, null],
      nombreEmpresa: ['', Validators.required, null],
      direccionProveedor: ['', Validators.required, null],
      celularProveedor: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
