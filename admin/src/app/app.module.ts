import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/_services/auth.service';
import { environment } from 'src/environments/environment';
// Highlight JS
import { SplashScreenModule } from './_metronic/partials/layout/splash-screen/splash-screen.module';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { NoticyAlertComponent } from './components/notifications/noticy-alert/noticy-alert.component';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { SlotDirective } from './directives/slot.directive';
// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    // return new Promise((resolve) => {
    //   authService.getUserByToken().subscribe().add(resolve);
    // });
  };
}


@NgModule({
  declarations: [
    AppComponent,
    NoticyAlertComponent,
    SlotDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SplashScreenModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    // HighlightModule,
    ClipboardModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
        passThruUnknownUrl: true,
        dataEncapsulation: false,
      })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    ToastNotificationsModule.forRoot({duration: 5000, position: 'top-right'}),
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [AuthService],
    // },
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     coreLibraryLoader: () => import('highlight.js/lib/core'),
    //     languages: {
    //       xml: () => import('highlight.js/lib/languages/xml'),
    //       typescript: () => import('highlight.js/lib/languages/typescript'),
    //       scss: () => import('highlight.js/lib/languages/scss'),
    //       json: () => import('highlight.js/lib/languages/json')
    //     },
    //   },
    // },
  ],
  exports: [
    NoticyAlertComponent,
    SlotDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
