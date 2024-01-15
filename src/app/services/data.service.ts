import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct, IProductBaseReponse } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {}

  getProductList(): Observable<IProduct[]> {
    return this._http.get<IProductBaseReponse>('https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory').pipe(
      map(result => result.data)
    );
  }

  getSingleProductById(getMenuId: number): Observable<IProduct> {
    return this._http.get<IProductBaseReponse>('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId?categoryId=' + getMenuId).pipe(
      map(res => res.data[0]) 
    );
  }
}
