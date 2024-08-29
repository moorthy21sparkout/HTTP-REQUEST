import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path:'Contact-us',component:ContactusComponent},
  {path: 'about-us',component:AboutComponent}
];
