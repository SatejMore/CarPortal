import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component'
import { carinfofilter } from './carinfo.pipe';
import { CarInformationService } from './carinfo.service';
import { CarDetails } from './cardetails.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { CarsCompoment } from './cars.component';
import { CarDetailsGuard } from './cardetails.guard';

@NgModule({
    imports:[
        BrowserModule , 
        FormsModule, 
        HttpModule,
        RouterModule.forRoot([
            {path:'home', component:HomeComponent},
            {path:'cars',component:CarsCompoment},
            {path:'cars/:id',canActivate:[CarDetailsGuard],component:CarDetails},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**', component:NotFoundComponent}
        ])],
    
    declarations:[
        AppComponent,
        carinfofilter,
        CarDetails, 
        HomeComponent,
        NotFoundComponent,
        CarsCompoment],
    
        providers:[CarInformationService, CarDetailsGuard],
    
        bootstrap:[AppComponent]
})

export class AppModule{}