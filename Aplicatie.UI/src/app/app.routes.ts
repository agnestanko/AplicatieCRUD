import { Routes } from '@angular/router';

import { AngajatiList } from './components/angajati/angajati-list/angajati-list';
import { AddAngajati } from './components/angajati/add-angajati/add-angajati';
import { EditAngajati } from './components/angajati/edit-angajati/edit-angajati';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'angajati',
    pathMatch: 'full'
  },
  {
    path: 'angajati',
    component: AngajatiList
  },
  {
    path: 'angajati/add',
    component: AddAngajati
  },
  {
    path: 'angajati/edit/:id',
    component: EditAngajati
  }
];