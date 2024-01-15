import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
constructor(private _service:DataService,private _router:Router){

}
  ngOnInit(): void {
    
      
  }
  getOrder(){
    this._router.navigate(['/menu'])

  }
  

    
    
  
}

