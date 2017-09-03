import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HelloWordModule } from './app/hello-word/hello-word.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HelloWordModule);
