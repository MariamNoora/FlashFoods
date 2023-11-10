import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string='';
  password:string='';
  
  isLogin:boolean=true;

  erroMessage:string="";

  constructor(private router: Router,private http: HttpClient) { }
                                       

  login()
  {
    // console.log(this.email);
    // console.log(this.password);

    let bodyData=
    {
      email: this.email,
      password: this.password
    };

    this.http.post("http://localhost:9992/customer/login",bodyData).subscribe((resultData:any)=>
    console.log(resultData))
    let resultData:any;
    
    if(resultData)
    {
      this.router.navigateByUrl('../menu');
    }
    else
    {
      alert("Incorrect Email or Password");
      console.log("error login");
      
    }
  }
  
  
  ngOnInit(): void {
    
  }

}

