import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'; we are using angular version > 9.0


import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
    // ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
