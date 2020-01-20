import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  constructor(public router:Router) { }
UserData:any
  isLoggedIn()
  {
    return (sessionStorage.getItem("isLoggedIn") == "1");
  }
  canActivate(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (this.isLoggedIn)
    {
      return true;
    } else 
    {
      this.router.navigate(['/login']);
      return false;
    }
  }

  Login(data:any)
  {
    sessionStorage.setItem("isLoggedIn", "1");
    sessionStorage.setItem("EmailId",data.EmailId);
    sessionStorage.setItem("UserId", data.UserId);
    sessionStorage.setItem("RoleId", data.RoleId);
    sessionStorage.setItem("userData", JSON.stringify(data));
    this.UserData = data;
    this.router.navigate(['/user/dashboard']);
   return
  }

  
}
