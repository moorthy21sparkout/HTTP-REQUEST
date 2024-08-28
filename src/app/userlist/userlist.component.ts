import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [HttpClientModule,CommonModule,ReactiveFormsModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  users: user[] = []

  userForm = new FormGroup({
    name : new FormControl(""),
    email:new FormControl("")
  })
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    /**
     * the subscribe methode is waiting for this responce to get the value
     * this is onlty run in the get method
     */
    this.getUsers().subscribe((responce) =>{
      console.log("the responce is", responce)
      this.users = responce
  })
  }

  OnSubmit(){
    /**
     * after submit the function is call
     * this insise function call the another function addUser
     * after get the value to pass the user property help of user class
     */
    // alert(123);
    console.log("working",this.userForm.value);

    this.addUser().subscribe((responce)=>{
      this.users.push(responce)

      //after form submit the input field the empty
      this.userForm.reset();

    })

  }
  addUser(){
    /**
     * this function pass the the data from this current url
     */
    // alert(1234);
    return this.http.post<user>('https://jsonplaceholder.typicode.com/users',{
      name:this.userForm.controls.name.value,
      email:this.userForm.controls.email.value
    });
  }
  getUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }
}

class user {
  name!: string;
  email!:string
}
