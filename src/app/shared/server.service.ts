import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
urlM = 'http://192.168.0.22/SISV1/index.php/Agzapp';
  constructor(private http: Http) { }
  loginServer(data) {
   return this.http.get(this.urlM + '/LoginApp?email=' + data.usrlgn + '&password=' + data.pwdlgn);
  }
  logoutServer(data) {
   return this.http.get(this.urlM + '/CloseSession?token=' + data);
  }
  resetPass(data) {
   return this.http.get(this.urlM + '/recoveryPassword?email=' + data.rstMail);
  }
  changePass() {
    return this.http.get(this.urlM + '/changePassword');
   }
  getEmpresas() {
    return this.http.get(this.urlM + '/getEmpresas');
  }
  getEnterprisePeriods(data) {
    return this.http.get(this.urlM + '/consultPeriods?token=' + sessionStorage.getItem('token') + '&idCompany=' + data);
  }
  createPeriod() {
    return this.http.get(this.urlM + '/CreatePeriod');
  }
  advance() {
    return this.http.get(this.urlM + '/RegisterAdvance');
  }
  sndM() {
    return this.http.get(this.urlM + '/SendMessage');
  }
  gtM() {
    return this.http.get(this.urlM + '/GetMessages');
  }
  userList() {
    return this.http.get(this.urlM + '/userList');
  }
  editUser() {
    return this.http.get(this.urlM + '/editUser');
  }
  delUser() {
    return this.http.get(this.urlM + '/delUser');
  }
  createEmpresa() {
    return this.http.get(this.urlM + '/createEmpresa');
  }
  editEmpresa() {
    return this.http.get(this.urlM + '/editEmpresa');
  }

}
