import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

    private jsonObj:any;
    constructor(){}
     setAuth(data:any){
        this.jsonObj=data;
    }
     getAuth():any{
        return this.jsonObj;
    }
}