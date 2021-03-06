import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
enableProdMode();
if (environment.production) {
  enableProdMode();
}
// app module carrega o modulo da aplicação 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
