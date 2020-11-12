import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environmentLoader } from '@aeontronix/tekmatik-core'
import { environment } from '@aeontronix/tekmatik-core'

environmentLoader.then(env => {
    if (env.production) {
        enableProdMode();
    }
    environment.apiBaseUrl = env.apiBaseUrl;
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
