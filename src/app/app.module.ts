import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddworkComponent } from './addwork/addwork.component';
import { DisplistComponent } from './displist/displist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddworkComponent,
    DisplistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
