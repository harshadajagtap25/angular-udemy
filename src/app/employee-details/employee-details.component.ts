import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  public employee = [];

  constructor(private _emp: EmployeeServiceService) {}

  ngOnInit() {
    this.employee = this._emp.getEmployeeData();
  }
}
