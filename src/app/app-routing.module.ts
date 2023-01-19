import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import { OpenBookViewComponent } from './Components/open-book-view/open-book-view.component';
import { PlaceOrderPageComponent } from './Components/place-order-page/place-order-page.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'dashboard',component:DashboardComponent,
   children:[
    {path:'display',component:DisplayBookComponent},
    {path:'openBook',component:OpenBookViewComponent},
    {path:'cart',component:CartComponent},
    {path: 'placeOrder', component:PlaceOrderPageComponent},
    {path: 'wishlist', component:WishlistComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
