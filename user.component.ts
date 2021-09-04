import { Component, OnInit } from '@angular/core';

import { Users } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user :Users=new Users();
  
  users:Array<Users>=[];
  
  constructor(private userService:UserService){}


  
  
  ngOnInit():void{
        
   
    console.log(this.users)
    this.userService.getUsers().subscribe(response =>{
      this.users=response;
      //console.log(this.users)
      },error=>{

         console.log(error);
     })
    }
     takeUser(){
      this.user=new Users();
      this.userService.addNote(this.user).subscribe(response => {
          this.users.push(this.user);

      }, error => {
        console.log(error)
      })
      
    }
    }

     
  


