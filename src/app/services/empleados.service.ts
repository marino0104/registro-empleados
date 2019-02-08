import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
  searchEmployees(texto: string) {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
