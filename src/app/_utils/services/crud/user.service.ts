import { Injectable } from '@angular/core';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudApiService<IUser> {
  endpoint = 'users';
}
