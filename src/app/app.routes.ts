import { Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component'
import { FindComponent } from './find/find.component'

export const routes: Routes = [
    { path: 'cadastro', component: InsertComponent },
    { path: 'consulta', component: FindComponent }
];
