import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './formulario/formulario.component';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'idCliente',
    'nombreCliente',
    'apellidoCliente',
    'celularCliente',
    'correoCliente',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public api: RestService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.api.get('clientes').subscribe((res: any) => {
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
