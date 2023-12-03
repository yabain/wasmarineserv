import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm :FormGroup
  constructor(public formBuilder:FormBuilder,
    private auth:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
        
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password:['',[Validators.required,Validators.pattern ('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };
  onLogin(){
    this.auth.login();
    this.router.navigateByUrl('/logo-docker');
  }
 
  }







