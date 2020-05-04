import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HelloComponent } from './components/hello/hello.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    BodyComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
