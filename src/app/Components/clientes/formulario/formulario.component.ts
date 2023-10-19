import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombreCliente: ['', Validators.required, null],
      apellidoCliente: ['', Validators.required, null],
      celularCliente: ['', Validators.required, null],
      correoCliente: ['', Validators.required, Validators.email],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
