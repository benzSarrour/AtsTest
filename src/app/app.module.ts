import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {DataServiceService} from './services/data-service.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {PagerService} from './services/pager.service';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataServiceService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
