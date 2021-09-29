import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { ApiParams, CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudApiService<IUser> {
  endpoint = 'users';

  getList$(params?: ApiParams): Observable<IUser[]> {
    return this.apiService.getCall$<IUser[]>({
      method: 'get',
      url: this.baseUrl + this.endpoint
    })
  }
}
