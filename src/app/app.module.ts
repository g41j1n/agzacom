import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresasService } from './shared/empresas.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { AsideEmpComponent } from './aside-emp/aside-emp.component';
import { AsideUsrComponent } from './aside-usr/aside-usr.component';
import { AsideProComponent } from './aside-pro/aside-pro.component';
import { ContEmpComponent } from './cont-emp/cont-emp.component';
import { ContUsrComponent } from './cont-usr/cont-usr.component';
import { ContProComponent } from './cont-pro/cont-pro.component';
import { EmpresaItemComponent } from './aside-emp/empresa-item/empresa-item.component';
import { UsuarioItemComponent } from './aside-usr/usuario-item/usuario-item.component';
import { ProcesoItemComponent } from './aside-pro/proceso-item/proceso-item.component';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AsideComponent,
    AsideEmpComponent,
    AsideUsrComponent,
    AsideProComponent,
    ContEmpComponent,
    ContUsrComponent,
    ContProComponent,
    EmpresaItemComponent,
    UsuarioItemComponent,
    ProcesoItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpresasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
