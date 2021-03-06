import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }    
  
    title = "Login";
    
    login() {     
      this.spinner.show();
      this.authService.login();
    }   

    ngOnInit() {
    }
}
