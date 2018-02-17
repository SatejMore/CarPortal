import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import { Icarinfo } from './Icarinfo';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()

export class CarInformationService{

    private _apiUrl:string = "http://localhost:5000/carsIndex"
    constructor(private _http:Http){}

    getCarsInformation():Observable<Icarinfo[]>{
        return this._http.get(this._apiUrl).
        map((response:Response)=><Icarinfo>response.json())
        .catch(this.errorHandler)
    }

    private errorHandler(error:Response){
        return Observable.throw(error.json()||"server.error")
    }
}