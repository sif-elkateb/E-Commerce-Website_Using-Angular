import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthGuard } from './Services/authentication/authguard';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AlertComponent } from './Components/alert/alert.component';
AlertComponent;

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'alert', component: AlertComponent },
  { path: '**', component: NotfoundComponent },
];
