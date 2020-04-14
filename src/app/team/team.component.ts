import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  s:string;
  users:any;/**Any: Is is a built in dat type in Type script
  which hlp in describing the type of variable which we are unsure of 
  while working
  */
    constructor(private data:DataService) { }

  ngOnInit(): void {
    this.s=this.data.helloService();
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
      }
      );
  }

   

}
