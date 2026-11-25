import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductDetails } from './product-details/product-details';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@NgModule({
  declarations: [App, ProductDetails, ShoppingCart],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
