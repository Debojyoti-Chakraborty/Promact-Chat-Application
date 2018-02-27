import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://chat.promactinfo.com/';
    public ApiUrl = 'api/user/login';
    public ServerWithApiUrl = this.Server + this.ApiUrl;

}