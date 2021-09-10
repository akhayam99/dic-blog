import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/IUser';
import { ApiParams, ApiService } from './api.service';

const DATA = [
  {
    id: 1,
    email: "cassandra_luiz@example.com",
    first_name: "Cassandra",
    last_name: "Luiz",
    full_name: "Cassandra Luiz",
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 2,
    email: "penelope672@example.com",
    first_name: "Penelope",
    last_name: "Gallison",
    full_name: "Penelope Gallison",
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
  },
  {
    id: 3,
    email: "marshall.larson@example.com",
    first_name: "Marshall",
    last_name: "Larson",
    full_name: "Marshall Larson",
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    id: 4,
    email: "ramon.hudson@example.com",
    first_name: "Ramon",
    last_name: "Hudson",
    full_name: "Ramon Hudson",
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
  },
  {
    id: 5,
    email: "cassandra_luiz@example.com",
    first_name: "Cassandra",
    last_name: "Luiz",
    full_name: "Cassandra Luiz",
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 6,
    email: "penelope672@example.com",
    first_name: "Penelope",
    last_name: "Gallison",
    full_name: "Penelope Gallison",
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
  },
  {
    id: 7,
    email: "marshall.larson@example.com",
    first_name: "Marshall",
    last_name: "Larson",
    full_name: "Marshall Larson",
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    id: 8,
    email: "ramon.hudson@example.com",
    first_name: "Ramon",
    last_name: "Hudson",
    full_name: "Ramon Hudson",
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
  },
  {
    id: 9,
    email: "cassandra_luiz@example.com",
    first_name: "Cassandra",
    last_name: "Luiz",
    full_name: "Cassandra Luiz",
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 10,
    email: "penelope672@example.com",
    first_name: "Penelope",
    last_name: "Gallison",
    full_name: "Penelope Gallison",
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
  },
  {
    id: 11,
    email: "marshall.larson@example.com",
    first_name: "Marshall",
    last_name: "Larson",
    full_name: "Marshall Larson",
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    id: 12,
    email: "ramon.hudson@example.com",
    first_name: "Ramon",
    last_name: "Hudson",
    full_name: "Ramon Hudson",
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
  },
]

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService<IUser> {
  getList$(params?: ApiParams): Observable<IUser[]> {
    return of(DATA).pipe(delay(1000));
  }
  getItem$(id: number): Observable<IUser> {
    throw new Error('Method not implemented.');
  }
  deleteItem$(id: any): Observable<void> {
    throw new Error('Method not implemented.');
  }
  save$(item: any): Observable<IUser> {
    throw new Error('Method not implemented.');
  }
}
