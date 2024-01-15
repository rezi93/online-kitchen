import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute,Navigation } from '@angular/router';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  
  product:IProduct[]=[];
  
  
  
  constructor(private _service:DataService,private _router:Router){

  }
  ngOnInit(): void {
    this. _service.getProductList().subscribe(result=>{
      this.product=result
    })
  }
  getProductDEtail(getMenuId:any){
    this._router.navigate(['/singlproduct',getMenuId])

  }


}
