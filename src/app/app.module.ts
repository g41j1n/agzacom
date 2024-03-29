import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmpresasService } from './shared/empresas.service';
import { ProcesosService } from './shared/procesos.service';
import { ServerService } from './shared/server.service';
import { HeaderHandler } from './shared/header.service';

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
import { ChangeComponent } from './home/change/change.component';
import { ResetComponent } from './reset/reset.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'home/:first', canActivate: [AuthGuard], component: HomeComponent},
  { path: '**', redirectTo: '' }

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
    DropdownDirective,
    ChangeComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpresasService, ProcesosService, HeaderHandler, ServerService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
