import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  listaEmpleados: any[] = [];
  listaBusqueda: any[] = [];
  p: number = 1;

  constructor(private empleados: EmpleadosService,
              private router: Router) {
                this.empleados.getEmployees()
                .subscribe( (data: any) => {
                  this.listaEmpleados = data;
                  });
              }

  ngOnInit() {
  }

}
