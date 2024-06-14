import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomersType } from '../../models/northwind/customers-type';
import { OrdersType } from '../../models/northwind/orders-type';
import { EmployeesType } from '../../models/northwind/employees-type';
import { SuppliersType } from '../../models/northwind/suppliers-type';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, NgIf],
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public groupVisible: boolean = false;
  public northwindOrders: OrdersType[] = [];
  public northwindCustomers: CustomersType[] = [];
  public northwindEmployees: EmployeesType[] = [];
  public northwindSuppliers: SuppliersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getOrders().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindOrders = data,
      error: (_err: any) => this.northwindOrders = []
    });
    this.northwindService.getCustomers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
    this.northwindService.getSuppliers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindSuppliers = data,
      error: (_err: any) => this.northwindSuppliers = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
