import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { inject } from '@vercel/analytics';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        inject({ mode: 'production' });
      },
    }, provideNzI18n(pt_BR), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(),
  ],
};
