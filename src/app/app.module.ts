import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {TekmatikSapphireModule} from '@aeontronix/tekmatik-theme-sapphire';
import {StaticTmConfig, TekmatikModule} from '@aeontronix/tekmatik-core';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TekmatikModule.forRoot(new StaticTmConfig('TestApp', [
                {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
                {label: 'Secure', icon: 'lock', routerLink: ['/secure']}
            ], false
        )),
        TekmatikSapphireModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
