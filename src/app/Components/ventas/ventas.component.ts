import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../clientes/formulario/formulario.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent {
  displayedColumns: string[] = [
    'idVenta',
    'fechaVenta',
    'descripcionVentas',
    'idCliente',
    'acciones'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public api: RestService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.api.get('ventas').subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  public get() {
    this.api.get('ventas');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
