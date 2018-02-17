import {Component,OnInit} from "@angular/core"
import { Icarinfo } from "./Icarinfo";
import { CarInformationService } from "./carinfo.service";

@Component({
    templateUrl:"app/cars.component.html"
})

export class CarsCompoment implements OnInit{

    carPanelName:string = "Car Portal";
    cars:Icarinfo[];
    showImage:boolean = true;
    searchBy:string;
    errorMessage:string;

    constructor(private _carInfoService:CarInformationService){}

    ngOnInit():void{
        this._carInfoService.getCarsInformation()
        .subscribe(carinfo=>this.cars = carinfo,error =>this.errorMessage = <any>error)
    }

    ShowImageClicked():void{
        this.showImage = ! this.showImage;
    }
}