import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotfoundComponent } from './auth/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent,pathMatch:'full' },
    { path: 'signin', component: SigninComponent },
    {path:'product',component:ProductComponent},
    {path:'',component:HomeComponent,pathMatch:'full'},
    { path: '**', component: NotfoundComponent }
];
