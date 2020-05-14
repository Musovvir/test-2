import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Container1Component } from './container1/container1.component';
import { Container2Component } from './container2/container2.component';
import { Container3Component } from './container3/container3.component';
import { Container4Component } from './container4/container4.component';
import { Container5Component } from './container5/container5.component';
import { Container6Component } from './container6/container6.component';
import { Container7Component } from './container7/container7.component';
import { Container8Component } from './container8/container8.component';
import { Container9Component } from './container9/container9.component';
import { Container10Component } from './container10/container10.component';
import { Container11Component } from './container11/container11.component';
import { Container12Component } from './container12/container12.component';
import { Container13Component } from './container13/container13.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Container1Component,
    Container2Component,
    Container3Component,
    Container4Component,
    Container5Component,
    Container6Component,
    Container7Component,
    Container8Component,
    Container9Component,
    Container10Component,
    Container11Component,
    Container12Component,
    Container13Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
