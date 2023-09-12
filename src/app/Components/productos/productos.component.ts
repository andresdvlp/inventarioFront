import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  constructor(public api: RestService) {}

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get('productos');
  }
}
