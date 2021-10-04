import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({ providedIn: 'root' })

export class RegisterService {
  baseUrl: string;

  constructor(private apiService: ApiService) {
    this.baseUrl = environment.backendUrl;
  }

  register$(params: RegisterParams): Observable<RegisterResponse | RegisterError> {
    return this.apiService.getCall$<RegisterResponse | RegisterError>({
      method: 'post',
      url: this.baseUrl + 'auth/register', data: params
    });
  }
}
export interface RegisterParams {
  email: string,
  first_name: string,
  last_name: string,
  password: string,
}

export interface RegisterResponse {
  created_at: string,
  email: string
  first_name: string,
  full_name: string,
  id: number,
  last_name: string,
}

export interface RegisterError {
  email: string[],
  error: string,
}
