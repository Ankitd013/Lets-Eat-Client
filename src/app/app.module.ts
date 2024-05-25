import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReguserService} from './shared/reguser.service';
import { UserAuthGuard} from './auth/auth.userguard';
import { UserAuthInterceptor} from './auth/auth.userinterceptor';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CartComponent } from './userprofile/cart/cart.component';
import { ProfileComponent } from './userprofile/profile/profile.component';
import { UserSignInComponent} from './userprofile/sign-in/sign-in.component';
import { UserSignUpComponent} from './userprofile/sign-up/sign-up.component';
import { FoodComponent } from './food/food.component';
import {BookfoodComponent} from './userprofile/bookfood/bookfood.component';
import {BookhistoryComponent} from './userprofile/bookhistory/bookhistory.component';
import { AllfoodComponent } from './allfood/allfood.component';
import { UallfoodComponent } from './userprofile/uallfood/uallfood.component';
import { UfoodComponent } from './userprofile/ufood/ufood.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FileDropDirective, FileSelectDirective, FileUploadModule, FileUploader } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserprofileComponent,
    CartComponent,
    ProfileComponent,
    UserSignInComponent,
    FoodComponent,
    UserSignUpComponent,
    BookfoodComponent,
    BookhistoryComponent,
    AllfoodComponent,
    UallfoodComponent,
    UfoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },DatePipe,UserAuthGuard, ReguserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
