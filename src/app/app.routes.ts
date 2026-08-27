import { Routes } from '@angular/router';
import { Landing } from './pages/user/landing/landing';
import { Auth } from './pages/user/auth/auth';
import { Collection } from './pages/user/collection/collection';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'auth', component: Auth },
  { path: 'collection', component: Collection },
  { path: '**', redirectTo: '' }
];
