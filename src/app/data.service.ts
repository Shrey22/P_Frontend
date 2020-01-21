import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUsersURL =    "http://localhost:53940/api/Users";
  private loginURl =    "http://localhost:53940/api/Login"
  private userProfileURL = "http://localhost:53940/api/Users/"
  private registerURl = "http://localhost:53940/api/Login/Register"
  private forgotPwdURL ="http://localhost:53940/api/User/IsExist";
  private generateOTPURL=  "http://localhost:53940/api/User/OTP";
  private changePwdURL=    "http://localhost:53940/api/User/UpdatePassword";
  private subjectURL =  "http://localhost:53940/api/Subject";
  private 
  constructor(public http:HttpClient) { }

  LoginUserData(userObj)
  {
    return this.http.post(this.loginURl,userObj);
  }

  RegisterData(userObj)
  {
    return this.http.post(this.registerURl,userObj);
  }

  //----------------- GETDATA ---------------------------------------------
  UserData(userId:any)
  {
    return this.http.get(this.userProfileURL + userId)
  }

  
  GetUsers()
  {
    return this.http.get(this.getUsersURL);
  }

  GetSubjects()
  {
    return this.http.get(this.subjectURL);
  }
  GetSubject(subId:any)
  {
    return this.http.get("http://localhost:53940/api/Subject/"+subId);
  }

  //----------------- ADD MODIFY DATA ---------------------------------------------
  AddSubject(subObj)
  {
    return this.http.post(this.subjectURL,subObj);
  }

  UpdatePwd(userObj)
  {
    return this.http.put(this.forgotPwdURL,userObj);
  }
  ModifySubject(subId, subObj)
  {
    return this.http.put("http://localhost:53940/api/Subject/"+subId,subObj);
  }
//----------------------REMOVE REQUESTS--------------------------------------------
  DeleteUser(userId)
  {
    return this.http.delete(this.userProfileURL+userId);
  }

  DeleteSubject(subId)
  {
    return this.http.delete("http://localhost:53940/api/Subject/"+subId);
  }
//---------------------------------------------------------------------------------
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
    
    return this.http.post(this.generateOTPURL, RUser,);
  }

  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.http.put(this.changePwdURL, RUser);
  }
}

