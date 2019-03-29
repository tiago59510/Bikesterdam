import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { VeloComponent } from './velo/velo.component';





@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    VeloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'inscription',
        component: FormComponent,
        data: {title: 'Inscription'}
      },
      {
        path: '',
        component: HomeComponent,
        data: {title: 'Bikesterdam'}
      },
      {
        path: 'velos',
        component: VeloComponent,
        data: {title: 'Vélos'}
      }
    ]),
    MDBBootstrapModule.forRoot()
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
