import { ApplicationId } from './../../../environments/environment';
import { API } from 'src/environments/environment';
import { Http } from './../../shared/services/http.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [Http]
})
export class HttpModule { }