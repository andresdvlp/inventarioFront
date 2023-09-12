import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent {
  constructor(public api: RestService) {}

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get('ventas');
  }
}
