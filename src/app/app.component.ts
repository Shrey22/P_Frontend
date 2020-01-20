import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProjectFE';

  /**
   *
   */
  constructor(private AuthService:AuthService, private router:Router) {
    
    
  }

  isLoggedIn()
  {
    if(this.AuthService.isLoggedIn())
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  Logout()
  {
    
    sessionStorage.setItem("isLoggedIn", "0");
    delete sessionStorage["EmailId"];
    delete sessionStorage["UserId"];
    delete sessionStorage["userData"];
    delete sessionStorage["isLoggedIn"];
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(!this.AuthService.isLoggedIn())
    {
      this.router.navigate(['/login']);
    }
    
    
  }
}
