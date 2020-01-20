import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loginURl =    "http://localhost:53940/api/Login"
  private userProfile = "http://localhost:53940/api/Users/"
  private registerURl = "http://localhost:53940/api/Login/Register"
  private forgotPwdURL ="http://localhost:53940/api/User/IsExist";
  private generateOTP=  "http://localhost:53940/api/User/OTP";
  private changePwd=    "http://localhost:53940/api/User/UpdatePassword";
  constructor(public http:HttpClient) { }

  LoginUserData(userObj)
  {
    return this.http.post(this.loginURl,userObj);
  }

  RegisterData(userObj)
  {
    return this.http.post(this.registerURl,userObj);
  }

  UserData(userId:any)
  {
    return this.http.get(this.userProfile + userId)
  }

  // UpdatePwd(userObj)
  // {
  //   return this.http.put(this.forgotPwdURL,userObj);
  // }

  OTPGenerate(email)
  {
    alert("inside OTPGenerate ");
    var RUser={
      "EmailId":email,
      
     };

    return this.http.post(this.forgotPwdURL, RUser);
  }
  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "OTP":otp
     };

   
     console.log(RUser);
    
    return this.http.post(this.generateOTP, RUser,);
  }

  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.http.put(this.changePwd, RUser);
  }
}

