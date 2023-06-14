import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
// import { Signup1Component } from './login/signup1/signup1.component';
import { LoginGuard } from './login.guard';
import { HeaderComponent } from './header/header.component';

const appRoute: Routes=[

{path: 'Home' , component: HomeComponent},
{path: 'About' , component: AboutComponent},
{path: 'Services' , component: ServicesComponent},
 {path: 'Contact' , component: ContactComponent, canActivate:[LoginGuard]},
// {path: 'Contact' , component: ContactComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Signup' , component: SignupComponent},
{path:'Admin',component:AdminComponent},
{path: "" ,redirectTo:'Home' , pathMatch:'full'}
// {path: '' , component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    
    // Signup1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
