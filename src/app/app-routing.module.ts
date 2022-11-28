import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductComponent } from './product/product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'addProduct',component:FormProductComponent},
  {path:'product/:id', component:DetailsProductComponent},
  {path:'todoroot', component:TodoListComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
