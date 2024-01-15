import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage=localStorage
  constructor() { }

  getitem(data:string):any|undefined{
  return this._storage.getItem(data)||undefined
  }
  setitem(key:string,value:any){
    this._storage.setItem(key,JSON.stringify(value))
  }
  itemExist(key:string):boolean{
    return !!this._storage.getItem(key)
  }
  
}
