import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl,NgForm } from '@angular/forms';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor(private _router:Router,private _fb:FormBuilder) {
    this.registerForm =this._fb.group({
      gender:this._fb.control('', (Validators.required)),
      firstName:this._fb.control('', Validators.required),
      lastName:new FormControl ('', Validators.required),
      email: this._fb.control('', Validators.required),
      password:this._fb.control ('', (Validators.required, Validators.minLength(6))),
      confirmPassword:this._fb.control ('', (Validators.required, Validators.minLength(6))),
      acceptTerms:this._fb.control('', Validators.required)
  })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.registerForm.valid){
      alert(JSON.stringify(this.registerForm.value));
      
      
      
    }else{
      console.log("form not valid");
      
    }

  }
  
}

