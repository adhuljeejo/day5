import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts';

import { Product } from './product/product';
import { Productdetails } from './productdetails/productdetails';

export const routes: Routes = [
    
 { path: '', component: Home },
  {path: 'contacts',component:Contacts},
  {path: 'product',component:Product},
  {path:'productdetails/:id',component:Productdetails}
    
];

