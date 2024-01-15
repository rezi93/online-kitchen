import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router,Navigation, } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInform:FormGroup ;
  constructor(private _router:Router,private _fb:FormBuilder, private _auth:AuthService){
    this.signInform = this._fb.group({
      email: this._fb.control('kminchelle', [Validators.required, Validators.email]),
      pwd: this._fb.control('0lelplR', [Validators.required, Validators.minLength(6)])
    });
    
  }
  ngOnInit(): void {
   
  }
 
  
  onsubmit() {
    console.log('Form status:', this.signInform.status); 
    if (this.signInform.valid) {
      console.log('form is valid', this.signInform.value);
      this._auth.authUser(this.signInform.value).subscribe(() => {
        this._router.navigate(['/home']);
      });
    } else {
      console.log('form not valid');
    }
  }
  
  gotoregister() {
    this._router.navigate(['/register']);
  }

}

