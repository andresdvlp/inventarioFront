import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  constructor(public api: RestService) {}

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get('proveedor');
  }
}
