import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IComment } from '../../interfaces/IComment';
import { ApiService } from './api.service';

const DATA: IComment[] = [
  {
    id: 1,
    text: "Cazzo dici scemo",
    created_at: "2021-01-01 15:00:00",
    updated_at: "2021-01-01 16:00:00",
    post_id: 1,
    user: {
      id: 1,
      email: "cassandra_luizgmail.com",
      first_name: "Cassandra",
      last_name: "Luiz",
      full_name: "Cassandra Luiz",
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    }
  },
  {
    id: 2,
    text: "Giustooooo",
    created_at: "2021-01-01 15:00:00",
    updated_at: "2021-01-01 16:00:00",
    post_id: 2,
    user: {
      id: 1,
      email: "cassandra_luizgmail.com",
      first_name: "Cassandra",
      last_name: "Luiz",
      full_name: "Cassandra Luiz",
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  },
  {
    id: 3,
    text: "beh oddio...",
    created_at: "2021-01-01 15:00:00",
    updated_at: "2021-01-01 16:00:00",
    post_id: 2,
    user: {
      id: 3,
      email: "marshall.larson@example.com",
      first_name: "Marshall",
      last_name: "Larson",
      full_name: "Marshall Larson",
      avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
    },
  }
]

@Injectable({
  providedIn: 'root'
})

export class CommentService extends ApiService<IComment> {
  getList$(params: { [key: string]: any, post_id: number }): Observable<IComment[]> {
    return of(DATA.filter(d => d.post_id === params.post_id)).pipe(delay(1000));
  }
  getItem$(id: number): Observable<IComment> {
    throw new Error('Method not implemented.');
  }
  deleteItem$(id: any): Observable<void> {
    throw new Error('Method not implemented.');
  }
  save$(item: any): Observable<IComment> {
    throw new Error('Method not implemented.');
  }

  getComments$(post_id: number): Observable<IComment[]> {
    return of(DATA.filter(d => d.post_id === post_id)).pipe(delay(1000));
  }
}
