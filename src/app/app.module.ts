import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeJA from '@angular/common/locales/ja';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeJA);

@NgModule({
    declarations: [
        AppComponent,
        CapitalizadoPipe,
        DomSeguroPipe,
        ContrasenaPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
