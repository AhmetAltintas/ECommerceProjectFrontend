import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44363/api/auth/';
  jwtHelperService: JwtHelperService = new JwtHelperService();
  
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
    ) { }

  login(loginModel: LoginModel):Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', loginModel);
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'register', registerModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  isAdmin() {
    if(!this.loggedIn()) return false

    let decodedToken = this.getDecodedToken

    let roleString = Object.keys(decodedToken).filter(t=>t.endsWith("/role"))[0];

    if (roleString) {
      return decodedToken[roleString].includes("admin");
    }
    return false
  }

  loggedIn() {
    let token = this.getToken
    return !this.jwtHelperService.isTokenExpired(token);
  }

  get getToken(){
    return this.localStorageService.get("token")
  }

  get getDecodedToken() {
    let token = this.getToken
    return this.jwtHelperService.decodeToken(token)
  }

  get getCurrentUserId() {
    let decodedToken = this.getDecodedToken
    let nameidentifierString = Object.keys(decodedToken).filter(t=>t.endsWith("/nameidentifier"))[0]
    let userId: number = decodedToken[nameidentifierString]
    return userId
  }
}
