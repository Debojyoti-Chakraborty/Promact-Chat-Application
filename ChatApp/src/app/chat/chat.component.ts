import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { SharedService } from "../shared.service";
import { Headers } from '@angular/http'
import { FormsModule } from '@angular/forms'

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.style.css']
})
export class ChatComponent implements OnInit {
public users:any;
public jsonObj:any;
public messages:any;
public toUser:any=1;
public text:string;

constructor(private http: HttpClient, private router:Router, private sharedService:SharedService){

}
getMessages(userID){
  this.toUser=userID;
  var URL="http://chat.promactinfo.com/api/chat/"+userID.id;
  console.log(URL);
  let headers=new HttpHeaders().set("Authorization",this.jsonObj["token"]).set("Content-Type","application/json");
  
  this.http.get(URL,{headers:headers}).toPromise().then(response=>
  {
    this.messages=response;
    console.log(this.messages);
    });
}

sendMessage(){

 let headers=new HttpHeaders().set("Authorization",this.jsonObj["token"]).set("Content-Type","application/json");
 this.http.post("http://chat.promactinfo.com/api/chat",{headers:headers,"message":this.text,"toUserId":this.toUser.id});
 this.getMessages(this.toUser);
}

  ngOnInit(){
this.jsonObj=this.sharedService.getAuth();
let headers=new HttpHeaders().set("Authorization",this.jsonObj["token"]);
this.http.get("http://chat.promactinfo.com/api/user",{headers:headers}).subscribe(users=>this.users=users);
  }
}
