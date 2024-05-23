import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import {UserSignInComponent} from '../userprofile/sign-in/sign-in.component';
import {UserSignUpComponent} from '../userprofile/sign-up/sign-up.component';
import {CartComponent} from '../userprofile/cart/cart.component';
import {ProfileComponent} from '../userprofile/profile/profile.component';
import {UserprofileComponent} from '../userprofile/userprofile.component';
import {AllfoodComponent} from '../allfood/allfood.component';
import {UserAuthGuard} from '../auth/auth.userguard';
import {FoodComponent} from '../food/food.component';
import {BookhistoryComponent} from '../userprofile/bookhistory/bookhistory.component';
import {BookfoodComponent} from '../userprofile/bookfood/bookfood.component';
import {UallfoodComponent} from '../userprofile/uallfood/uallfood.component';
import {UfoodComponent} from '../userprofile/ufood/ufood.component';
import {HeaderComponent} from '../header/header.component';
import { from } from 'rxjs';
const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},

  {
    path: '',component:HeaderComponent,
    children: [{path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: AllfoodComponent},
    {path: 'food', component: FoodComponent},
    {path: 'usersignup', component: UserSignUpComponent},
    {path: 'userlogin', component: UserSignInComponent}
    ]},
  {
    path: '-', component: UserprofileComponent, canActivate: [UserAuthGuard],
    children:[ {path: 'cart', component: CartComponent},
    {path: 'food', component: UfoodComponent},
    {path: 'home', component: UallfoodComponent},
    {path: 'bookinghistory',component:BookhistoryComponent},
    {path: 'bookfood',component:BookfoodComponent},
    { path: 'profile', component: ProfileComponent},
    {path: 'about-us', component: AboutComponent},
    {path: 'contact-us', component: ContactComponent},

  ]},
//   {
//     path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
//     children: [{ path: 'AddCategory', component: AddcategoryComponent  },
//     { path: 'ViewCategory', component: ViewcategoryComponent },
//     { path: 'EditCategory/:id', component : EditcategoryComponent},
//     { path: 'AddFood', component: AddfoodComponent},
//     { path: 'ViewFood', component: ViewfoodComponent},
//     { path: 'EditFood/:id', component: EditfoodComponent },
//     { path: 'reguser', component: ReguserComponent},
//     { path: 'booking' , component: BookingComponent},
//     {path: 'home',component:AdminHomeComponent}
// ]
// }
   ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
