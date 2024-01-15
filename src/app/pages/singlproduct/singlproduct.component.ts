import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-singlproduct',
  templateUrl: './singlproduct.component.html',
  styleUrls: ['./singlproduct.component.scss']
})
export class SinglproductComponent implements OnInit {

  getMenuId: any;
  menuData: IProduct | undefined;

  constructor(private _route: ActivatedRoute, private _service: DataService,private _router:Router) {}

  ngOnInit(): void {
    this.getMenuId = this._route.snapshot.paramMap.get('id');

    if (this.getMenuId) {
      this.getSingleProductById(this.getMenuId);
    }
  }

  getSingleProductById(getMenuId: any) {
    this._service.getSingleProductById(getMenuId).subscribe(
      data => {
        this.menuData = data;
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }
  getOrder(){
    alert('order added');
    this._router.navigate(['/menu'])
  }
}
