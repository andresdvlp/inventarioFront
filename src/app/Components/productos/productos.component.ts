import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/Services/rest.service';
import { FormularioComponent } from '../clientes/formulario/formulario.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  displayedColumns: string[] = [
    'idProducto',
    'nombreProducto',
    'descripcion',
    'precioUnitario',
    'cantidadStock',
    'acciones',
  ];
  constructor(public api: RestService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  ngOnInit(): void {
    this.api.get('productos').subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  public get() {
    this.api.get('clientes').subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
