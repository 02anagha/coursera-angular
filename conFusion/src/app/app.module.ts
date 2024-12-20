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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
	MenuComponent,
	DishdetailComponent,
	HeaderComponent,
	FooterComponent,
	AboutComponent,
	HomeComponent,
	ContactComponent
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