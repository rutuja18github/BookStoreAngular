import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ReactiveFormsModule } from "@angular/forms";
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { OpenBookViewComponent } from './Components/open-book-view/open-book-view.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { PlaceOrderPageComponent } from './Components/place-order-page/place-order-page.component';
import { FormsModule } from "@angular/forms";
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { NgxPaginationModule } from 'ngx-pagination';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    DisplayBookComponent,
    OpenBookViewComponent,
    CartComponent,
    WishlistComponent,
    PlaceOrderPageComponent,
    SearchFilterPipe,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatMenuModule,
    FormsModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
