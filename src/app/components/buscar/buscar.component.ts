import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  p: number = 1;
  buscar: string = '';
  arregloEmpleados: any[] = [];
  palabra: any;
  
  constructor(public empleadosService: EmpleadosService,
              public router: ActivatedRoute) {
                this.router.params.subscribe(parametros => {
                  if (parametros['texto']) {
                    this.buscar = parametros['texto'];
                    this.arregloEmpleados = this.buscarEmpleado();
                  }
                });
              }

  ngOnInit() {
  }
buscarEmpleado(): any[] {
  let empleadosArray: any[]=[];
  if (this.buscar.length == 0) {
    return;
  }
  this.buscar = this.buscar.toLowerCase();
  this.empleadosService.getEmployees().subscribe((data: any) => {
    for (let empleado of data) {
      let nombre = empleado.employee_name.toLowerCase();
      let salario = empleado.employee_salary.toLowerCase();
      let edad = empleado.employee_age.toLowerCase();
      if (nombre.indexOf(this.buscar) >= 0 || salario.indexOf(this.buscar) >= 0  || edad.indexOf(this.buscar) >= 0 ) {
        empleadosArray.push(empleado);
      }

    }
  });
  return empleadosArray;
}
}
