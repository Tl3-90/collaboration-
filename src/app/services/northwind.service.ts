import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomersType } from '../models/northwind/customers-type';
import { OrdersType } from '../models/northwind/orders-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { SuppliersType } from '../models/northwind/suppliers-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getOrders(): Observable<OrdersType[]> {
    return of(Northwind['OrdersType']);
  }

  public getCustomers(): Observable<CustomersType[]> {
    return of(Northwind['CustomersType']);
  }

  public getEmployees(): Observable<EmployeesType[]> {
    return of(Northwind['EmployeesType']);
  }

  public getSuppliers(): Observable<SuppliersType[]> {
    return of(Northwind['SuppliersType']);
  }
}
