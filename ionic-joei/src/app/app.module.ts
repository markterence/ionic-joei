import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
//Mark Terence
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectDetailsPage } from '../pages/project-details/project-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Included by `ionic g provider` command
import { HttpModule, JsonpModule } from '@angular/http';
import { ApiServiceProvider } from '../providers/api-service/api-service';

import { PopoverPage } from '../pages/popover/popover';
import { ProjectFormPage } from "../pages/project-form/project-form";

import { ProjectModalPage } from "../pages/project-modal/project-modal";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ProjectsPage,
    ProjectDetailsPage,
    PopoverPage,
    ProjectFormPage,
    ProjectModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ProjectsPage,
    ProjectDetailsPage,
    PopoverPage,ProjectFormPage,
    ProjectModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //provided by `ionic g provider` command
    ApiServiceProvider
  ]
})
export class AppModule {}
