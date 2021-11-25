import { ProductCreateComponent } from './components/produc/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProducCrudComponent } from './views/produc-crud/produc-crud.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProducCrudComponent
}, 
{
  path: "products/create",
  component: ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
