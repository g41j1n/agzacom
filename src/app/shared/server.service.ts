import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  loginServer() {
   return this.http.get('http://192.168.0.22/SISV1/index.php/Agzapp/LoginApp?email=e@e.com&password=1');  }
}
