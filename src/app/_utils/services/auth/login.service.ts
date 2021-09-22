import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({ providedIn: 'root' })

export class LoginService {
  baseUrl: string;

  constructor(private apiService: ApiService) {
    this.baseUrl = environment.backendUrl;
  }

  login$(params: LoginParams): Observable<LoginResponse|LoginError> {
    const { email, password } = params;
    return this.apiService.post$(this.baseUrl + 'auth/login', { email, password });
  }
}

export interface LoginParams {
  email: string,
  password: string
}

export interface LoginResponse {
  access_token: string,
  expires_in: number
  token_type: string,
}

export interface LoginError {
  error: string,
  email: string[],
}