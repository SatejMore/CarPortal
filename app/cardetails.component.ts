import {Component,OnInit} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    templateUrl:'app/cardetails.component.html'
})

export class CarDetails implements OnInit{
    id:number;
    brand:string;
    name:string;
    imgurl:string;
    desc:string;

    constructor(private _route:ActivatedRoute,
    private _router:Router){}

    ngOnInit():void{
        this.id = +this._route.snapshot.params["id"];
        
        this._route.queryParams.subscribe( params =>{
            this.brand = params.brand,
            this.name = params.name,
            this.imgurl = params.imgurl,
            this.desc = params.desc
        })
    }
    onClick():void{
        this._router.navigate(['/cars']);
        }

}