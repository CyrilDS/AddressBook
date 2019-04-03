import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


>>>>>>> 921a50c1cd8b4057fcd4b316edf149bde8dce8ea

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
<<<<<<< HEAD
    HomeComponent
=======
    NavbarComponent
>>>>>>> 921a50c1cd8b4057fcd4b316edf149bde8dce8ea
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
