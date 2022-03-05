import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/template/header/header.component';
// para usar o material toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent} from './components/template/footer/footer.component';
import {NavComponent} from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './views/home/home.component';
import {ProducCrudComponent} from './views/produc-crud/produc-crud.component';
import {RedDirective} from './directives/red.directive';
import {ForDirective} from './directives/for.directive';
import {ProductCreateComponent} from './components/produc/product-create/product-create.component'
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CategoryCrudComponent} from './views/category-crud/category-crud.component';
import {CategoryCreateComponent} from './components/category/category-create/category-create.component';
import {ProductReadComponent} from './components/product/product-read/product-read.component';
import {CategoryReadComponent} from './components/category/category-read/category-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';
import {ProductDeleteComponent} from './components/product/product-delete/product-delete.component';
import {StateCrudComponent} from './views/state-crud/state-crud.component';
import {ListComponent} from './components/state/list/list.component';
import {CreateComponent} from './components/state/create/create.component';
import {DeleteComponent} from './components/state/delete/delete.component';
import {UpdateComponent} from './components/state/update/update.component';
import {ListBranchComponent} from './components/branch/list-branch/list-branch.component'
import {BranchComponent} from './components/branch/branch.component'
import {CreateBranchComponent} from './components/branch/create-branch/create-branch.component'
import {FormContainerComponent} from "./components/form-container/form-container.component";
import {FiltroComponentComponent} from "./components/filtro-component/filtro-component.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDialogModule} from '@angular/material/dialog';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponentComponent,
    ListBranchComponent,
    BranchComponent,
    CreateBranchComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProducCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    CategoryCrudComponent,
    CategoryCreateComponent,
    ProductReadComponent,
    CategoryReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    StateCrudComponent,
    ListComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    FormContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatIconModule,
    InfiniteScrollModule,
    MatChipsModule,
    DragDropModule
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue:'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
