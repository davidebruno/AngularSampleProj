import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Base} from 'app/utility/base';
import { AutenticationService } from 'app/services/authentication.service';
import {TooltipModule} from 'primeng/primeng';


@Component({
  template: `   
    <div *ngIf="!aService.isLoggedIn"  class="col-md-6 col-md-offset-3">
    <form  name="form" (ngSubmit)="f.form.valid && login()" #f="ngForm" novalidate>
        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !username.valid }">
         <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input type="text" class="form-control" placeholder="Username" name="username"
                                 [(ngModel)]="model.username" #username="ngModel" required />
         </div>
            <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>
        </div>
        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !password.valid }">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input type="password" class="form-control" placeholder="Password" name="password" 
                   [(ngModel)]="model.password" #password="ngModel" required />
          </div>
            <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>
        </div>
        <div class="form-group">
          <div>
            <button class="btn btn-primary">Login</button>   {{ message }}
          </div>
        </div>
    </form>
</div>
<div *ngIf="aService.isLoggedIn"  class="col-md-6 col-md-offset-3">
  <button *ngIf="aService.isLoggedIn"  class="btn btn-primary" (click)="logout()">Logout</button>
</div>
   `
})
export class LoginComponent extends Base {
  message: string;

  model: any = {};

  constructor(public aService: AutenticationService, public router: Router) {
      super();
  }

  setMessage() {
    this.message = 'Logged ' + (this.aService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.aService.login().subscribe(() => {
      this.setMessage();
      if (this.aService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.aService.redirectUrl ? this.aService.redirectUrl : '/home';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  logout() {
    this.aService.logout();
    // this.setMessage();
  }
}