import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'santosh.kasam@tr.com',
      dateOfBirth: new Date('08/29/1985'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      email: 'santosh.visu@gmail.com',
      dateOfBirth: new Date('12/27/2015'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 9989198956,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/john.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
