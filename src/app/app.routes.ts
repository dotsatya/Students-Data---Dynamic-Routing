import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
  {
    path: 'profile/:id',
    component: Profile,
  },
  {
    path: 'about',
    component: About,
  },
];
