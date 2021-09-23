import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  baseUrl: string;

  constructor(private apiService: ApiService) {
    this.baseUrl = environment.backendUrl;
  }

  version$(): Observable<string> {
    return this.apiService.getCall$<string>({
      method: 'get',
      url: `${this.baseUrl}version`
    });
  }
}

