import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';

import 'hammerjs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
	MenuComponent,
	DishdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	FlexLayoutModule,
	MatToolbarModule,
	MatListModule,
	MatGridListModule,
	MatButtonModule,
	MatCardModule
	
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }