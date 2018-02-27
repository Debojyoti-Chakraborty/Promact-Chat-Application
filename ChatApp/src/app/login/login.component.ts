import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Headers, URLSearchParams } from '@angular/http'
import { SharedService } from '../shared.service'
import 'rxjs/add/operator/map';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.css']
})
export class LoginComponent {

    public name:string;
    public jsonObj:any;
    constructor(private http:HttpClient, private router:Router, private sharedService:SharedService){

    }
    go(){

      let headers=new Headers();
      
      headers.set('Content-Type', 'application/json');
      this.http.post("http://chat.promactinfo.com/api/user/login",{header:headers,"name":this.name }).toPromise().then(body=>{
        this.jsonObj=body;
       
        this.sharedService.setAuth(this.jsonObj);
      this.router.navigate(['../chat']);
      });
    
    
    }

}

