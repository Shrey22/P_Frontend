import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUsersURL =    "http://localhost:54881/api/Users";
  private loginURl =    "http://localhost:54881/api/Login"
  private userProfileURL = "http://localhost:54881/api/Users/"
  private registerURl = "http://localhost:54881/api/Login/Register"
  private forgotPwdURL ="http://localhost:54881/api/User/IsExist";
  private generateOTPURL=  "http://localhost:54881/api/User/OTP";
  private changePwdURL=    "http://localhost:54881/api/User/UpdatePassword";
  private subjectURL =  "http://localhost:54881/api/Subject";
  private addQuesURL = "http://localhost:54881/api/Question";
  private feedbkURL = "http://localhost:54881/api/Question/AFeedback/onlysubmiteduser";
  private postfeedbkURL = "http://localhost:54881/api/AFeedback";
  // private resultURL = "http://localhost:54881/api/Result/LoggedInUser/";
  private resultURL = "http://localhost:54881/api/Result/";
  private questionpaperURL = "http://localhost:54881/api/Question";
  private questionpaperofsubjURL = "http://localhost:54881/api/Question/";
  private submitanswersURL = "http://localhost:54881/api/Question";

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
    return this.http.get("http://localhost:54881/api/Subject/"+subId);
  }

  GetAFeedback()
  {
    debugger
      return this.http.get(this.feedbkURL);
  }

  GetResult(id:any)
  {
      return this.http.get(this.resultURL+id);
  }

  GetQuestbySubj(subj:any)
  {
      return this.http.get(this.questionpaperURL+subj);
  }

  GetQuestpaper()
  {
      return this.http.get("http://localhost:54881/api/Question");
  }

  GetQuestpaperwithsubjId(sid)
  {
     return this.http.get(this.questionpaperofsubjURL+sid);
  }

  GetPDF()
  {
    return this.http.get("http://localhost:54881/api/Subject/pdf");
  }

  //----------------- ADD MODIFY DATA ---------------------------------------------
  AddSubject(subObj)
  {
    return this.http.post(this.subjectURL,subObj);
  }

  AddQuestions(quesObj)
  {
    return this.http.post(this.addQuesURL,quesObj);
  }

  UpdatePwd(userObj)
  {
    return this.http.put(this.forgotPwdURL,userObj);
  }
  ModifySubject(subId, subObj)
  {
    return this.http.put("http://localhost:54881/api/Subject/"+subId,subObj);
  }

  UpdateUser(userId,userObj)
  {
    console.log(userObj);
    
    return this.http.put("http://localhost:54881/api/Users/"+userId,userObj);
  }

  insertFeedback(obj)
  {
    return this.http.post(this.postfeedbkURL,obj);
  }

  SubmitAns(obj:any)
  {
    return this.http.post(this.submitanswersURL,obj);
  }

  SubmitAns1(obj:any,UID,SID:any)
  {
    return this.http.put(this.submitanswersURL+"/Subid/"+SID,obj,UID);
  }

//----------------------REMOVE REQUESTS--------------------------------------------
  DeleteUser(userId)
  {
    return this.http.delete(this.userProfileURL+userId);
  }

  DeleteSubject(subId)
  {
    return this.http.delete("http://localhost:54881/api/Subject/"+subId);
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

