import { Component, OnInit,Input } from '@angular/core';
import {Employee} from '../employee';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  powers = ['Smart Coder', 'Super Flexible',
'Logical Thinker', 'Excellent Analyst'];
model = new Employee(18, '',"", '');
submitted = false;

onSubmit() { this.submitted = true; 

}

  constructor() { }

  ngOnInit(): void {
  }

}


